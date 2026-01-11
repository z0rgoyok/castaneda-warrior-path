#!/usr/bin/env python3
"""
Скрипт для извлечения глоссария терминов из книг Кастанеды через Gemini API.
Формат: понятное изложение для зумеров.
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

PROMPT = """Ты — копирайтер, который умеет объяснять сложные концепции простым языком для зумеров (поколение Z, 18-25 лет).

Твоя задача — создать ГЛОССАРИЙ ТЕРМИНОВ из книги Карлоса Кастанеды.

ВАЖНО — формат объяснений:
- БЕЗ эзотерического буллшита и мистики
- Используй понятные аналогии из современной жизни (соцсети, TikTok, батарейка телефона, GPS, и т.д.)
- Пиши так, как будто объясняешь другу в чате
- Каждый термин должен иметь практическое применение
- Добавляй цитаты из книги где уместно

Структура для каждого термина:
1. **Название термина**
2. **Что это** — суть в 1-2 предложениях
3. **На пальцах** — понятная аналогия из современной жизни
4. **Зачем / Как использовать** — практическое применение
5. **Цитата из книги** (если есть ключевая)

Категории терминов для поиска:
- Базовые концепции учения (остановка мира, описание мира, личная история, ЧСВ и т.д.)
- Состояния и качества (воин, охотник, настроение воина, и т.д.)
- Социальные стратегии (недоступность, разрушение распорядков, и т.д.)
- Практики восприятия (неделание, видение, созерцание теней, и т.д.)
- Телесные практики (ходьба силы, сновидение, и т.д.)
- Любые другие специфические термины из этой книги

В конце добавь TL;DR таблицу с терминами и их сутью в одном предложении.

Формат вывода: структурированный markdown.

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


def process_book(filepath: Path, book_num: int):
    """Обрабатывает конкретную книгу."""
    print(f"\n{'='*60}")
    print(f"Генерация глоссария для книги {book_num}")
    print(f"{'='*60}")

    books = split_into_books(filepath)

    # Находим нужную книгу
    target_book = None
    for book_id, text in books:
        if f"book_{book_num}_" in book_id:
            target_book = (book_id, text)
            break

    if not target_book:
        print(f"Книга {book_num} не найдена")
        return

    book_id, book_text = target_book
    print(f"Найдена: {book_id}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_file = OUTPUT_DIR / f"{book_id}_glossary_zoomer.md"

    result = call_gemini(book_text, book_id)

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"# Глоссарий терминов: {book_id}\n\n")
        f.write("> Формат: понятное объяснение для зумеров. Без эзотерического буллшита.\n\n")
        f.write("---\n\n")
        f.write(result)

    print(f"Сохранено: {output_file}")


def main():
    import sys

    if not API_KEY:
        print("Ошибка: не найден GEMINI_API_KEY_PAID")
        return

    print(f"API Key: {API_KEY[:10]}...{API_KEY[-4:]}")
    print(f"Model: {MODEL}")

    # Номер книги из аргументов или по умолчанию 3
    book_num = int(sys.argv[1]) if len(sys.argv) > 1 else 3

    filepath = DATA_DIR / "castaneda-all-books-full.txt"

    if not filepath.exists():
        print(f"Файл не найден: {filepath}")
        return

    process_book(filepath, book_num)


if __name__ == "__main__":
    main()
