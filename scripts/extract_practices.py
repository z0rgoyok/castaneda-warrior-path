#!/usr/bin/env python3
"""
Скрипт для извлечения практик и майндсетов из книг Кастанеды через Gemini API.
"""

import os
import re
import time
import requests
from pathlib import Path

# Конфигурация
API_KEY = os.environ.get("GEMINI_API_KEY_PAID") 
MODEL = "models/gemini-2.5-flash"
API_URL = f"https://generativelanguage.googleapis.com/v1beta/{MODEL}:generateContent"

DATA_DIR = Path(__file__).parent.parent / "data"
OUTPUT_DIR = Path(__file__).parent.parent / "research" / "extracted"

PROMPT = """Ты — исследователь практик личностного развития.

Твоя задача — выписать ПОЛНЫЕ МАНУАЛЫ по ВСЕМ практикам и майндсетам, упомянутым в тексте книги Карлоса Кастанеды.

ВАЖНО:
- Учитывай даже малоочевидные и неочевидные практики и майндсеты
- Не ограничивайся только явно названными техниками — ищи скрытые принципы в диалогах и действиях
- Для каждой практики/майндсета опиши:
  1. Название (если есть оригинальное) или дай описательное
  2. Суть практики — что конкретно делать
  3. Цель — зачем это нужно, какой эффект
  4. Контекст — в какой ситуации применяется
  5. Цитаты из текста (если есть ключевые)

Категории для поиска:
- Телесные практики (походка, дыхание, позы, движения)
- Практики внимания и восприятия
- Работа с мыслями и внутренним диалогом
- Эмоциональные практики
- Социальные практики (взаимодействие с людьми)
- Майндсеты и установки воина
- Практики принятия решений
- Работа со страхом и смертью
- Энергетические практики
- Практики сновидения
- Любые другие

Формат вывода: структурированный markdown с заголовками для каждой практики.

---

ТЕКСТ КНИГИ:

"""


def split_into_books(filepath: Path) -> list[tuple[str, str]]:
    """Разбивает файл на отдельные книги."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Паттерн для начала книги
    pattern = r'(кн\.(\d+)\s*\(\d{4}\)[^\n]*)'
    matches = list(re.finditer(pattern, content))

    books = []
    for i, match in enumerate(matches):
        start = match.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)

        book_num = match.group(2)
        book_text = content[start:end].strip()

        # Извлекаем название
        title_match = re.search(r'«([^»]+)»', book_text[:500])
        title = title_match.group(1) if title_match else f"Книга {book_num}"

        books.append((f"book_{book_num}_{title.replace(' ', '_')}", book_text))

    return books


def call_gemini(text: str, book_name: str, retries: int = 5) -> str:
    """Отправляет текст в Gemini API с retry."""
    headers = {
        "Content-Type": "application/json",
    }

    payload = {
        "contents": [{
            "parts": [{
                "text": PROMPT + text
            }]
        }],
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 65536,
        }
    }

    for attempt in range(retries):
        print(f"  Отправляю запрос в Gemini ({len(text):,} символов)..." + (f" [попытка {attempt+1}]" if attempt > 0 else ""))

        response = requests.post(
            f"{API_URL}?key={API_KEY}",
            headers=headers,
            json=payload,
            timeout=300  # 5 минут на ответ
        )

        if response.status_code == 429:
            # Извлекаем время ожидания из сообщения
            import re
            match = re.search(r'retry in (\d+\.?\d*)', response.text)
            wait_time = float(match.group(1)) + 5 if match else 65
            print(f"  Rate limit, жду {wait_time:.0f} сек...")
            time.sleep(wait_time)
            continue

        if response.status_code != 200:
            print(f"  Ошибка API: {response.status_code}")
            print(f"  {response.text[:500]}")
            return f"ERROR: {response.status_code} - {response.text}"

        result = response.json()

        try:
            return result["candidates"][0]["content"]["parts"][0]["text"]
        except (KeyError, IndexError) as e:
            print(f"  Ошибка парсинга ответа: {e}")
            if "candidates" not in result:
                print(f"  Нет candidates, жду 60 сек и повторяю...")
                time.sleep(60)
                continue
            return f"ERROR parsing response: {result}"

    return "ERROR: превышено число попыток"


def process_file(filepath: Path, books_filter: range = None):
    """Обрабатывает файл с книгами."""
    print(f"\n{'='*60}")
    print(f"Обработка: {filepath.name}")
    print(f"{'='*60}")

    books = split_into_books(filepath)

    # Фильтруем книги если указан диапазон
    if books_filter:
        books = [(book_id, text) for book_id, text in books
                 if int(re.search(r'book_(\d+)', book_id).group(1)) in books_filter]

    print(f"Книг для обработки: {len(books)}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for i, (book_id, book_text) in enumerate(books, 1):
        print(f"\n[{i}/{len(books)}] {book_id}")

        output_file = OUTPUT_DIR / f"{book_id}_practices.md"

        # Пропускаем если уже обработано
        if output_file.exists():
            print(f"  Уже существует, пропускаю")
            continue

        result = call_gemini(book_text, book_id)

        with open(output_file, "w", encoding="utf-8") as f:
            f.write(f"# Практики и майндсеты: {book_id}\n\n")
            f.write(result)

        print(f"  Сохранено: {output_file.name}")

        # Пауза между запросами (rate limit ~60 сек)
        if i < len(books):
            print("  Пауза 60 сек...")
            time.sleep(60)


def main():
    if not API_KEY:
        print("Ошибка: не найден NEIRO_GEMINI_FREE")
        return

    print(f"API Key: {API_KEY[:10]}...{API_KEY[-4:]}")
    print(f"Model: {MODEL}")

    # Обрабатываем полный файл (книги 3-11)
    filepath = DATA_DIR / "castaneda-all-books-full.txt"

    if not filepath.exists():
        print(f"Файл не найден: {filepath}")
        return

    process_file(filepath, books_filter=range(3, 12))  # книги 3-11


if __name__ == "__main__":
    main()
