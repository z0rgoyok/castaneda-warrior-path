const translations = {
  ru: {
    // Header
    nav_home: "Главная",
    nav_practices: "Практики",
    nav_glossary: "Глоссарий",

    // Hero
    hero_title: "Путь <span>Воина</span>",
    hero_subtitle: "Учение дона Хуана для современного мира. Древняя мудрость толтеков в практиках, которые меняют восприятие и дают силу.",
    hero_cta: "К практикам",

    // Manifesto
    manifesto_badge: "Путь знания",
    manifesto_title: "Воин видит мир иначе",
    manifesto_p1: "Каждая практика здесь работает на двух уровнях. Психология объясняет, почему это помогает справляться с тревогой, стрессом и автоматизмом мышления. Путь воина показывает более глубокий смысл — как эти техники меняют само восприятие реальности.",
    manifesto_p2: "Можешь использовать только психологический слой — и получишь рабочие инструменты для ментального здоровья. А можешь пойти глубже — и открыть то, о чём говорил дон Хуан.",

    // Practices section
    practices_title: "Практики",
    practices_subtitle: "От простого к глубокому. Начни сверху и двигайся вниз.",

    // Labels
    psych_label: "Психология",
    warrior_label: "Путь воина",
    practice: "Практика",
    what: "Что это",

    // Practice 1
    p1_title: "Настроение воина",
    p1_psych: "Это сочетание flow-состояния и acceptance из ACT-терапии. Полная вовлечённость в процесс без привязки к результату снижает тревожность, убирает паралич перфекционизма и позволяет действовать эффективнее. Исследования показывают: отпускание контроля над outcome парадоксально улучшает результаты.",
    p1_warrior: "Воин действует безупречно — вкладывает всего себя в каждое действие, потому что это может быть его последняя битва. Но он не привязан к результату, потому что знает: исход в руках силы, не его. Это даёт парадоксальную свободу — делать максимум без страха провала.",
    p1_practice_text: "В любой важной ситуации — выложись полностью, но заранее прими, что результат может быть любым. Перед действием скажи себе: «Я сделаю лучшее, на что способен. Остальное — не моя забота».",
    p1_quote: "«В настроении воина полный самоконтроль и абсолютное самообладание соединяются с отрешенностью»",

    // Practice 2
    p2_title: "Отказ от чувства собственной важности",
    p2_psych: "Это эго-децентрация — ключевой навык в когнитивной терапии. Чрезмерная фокусировка на себе («что обо мне подумают», «меня обидели», «я заслуживаю лучшего») — главный источник тревоги и депрессии. Снижение self-focus освобождает огромное количество когнитивных ресурсов и снижает руминацию.",
    p2_warrior: "ЧСВ — главный враг воина. Это не просто эго, а постоянный слив энергии на поддержание образа себя. Воина нельзя обидеть — у него нет той части, за которую можно зацепиться. Вся энергия, которая раньше уходила на защиту эго, теперь доступна для действия.",
    p2_practice_text: "Когда чувствуешь обиду или раздражение — поймай момент и спроси: «Это реальная проблема или моё эго?» Потом: «Буду ли я помнить об этом через год? На смертном одре?» Скорее всего — нет.",
    p2_quote: "«Пока ты чувствуешь, что наиболее важное явление в мире — это твоя персона, ты никогда не сможешь по-настоящему ощутить окружающий мир»",

    // Practice 3
    p3_title: "Стирание личной истории",
    p3_psych: "Социальная психология называет это «освобождением от ролевых ожиданий». Когда окружающие знают твою историю, они держат тебя в рамках: «ты всегда был таким». Это создаёт self-fulfilling prophecy и мешает личностному росту. Меньше информации о себе = больше свободы меняться.",
    p3_warrior: "Личная история — это клетка. Каждый факт о тебе, который знают другие, становится якорем, удерживающим тебя в старом описании себя. Воин стирает историю не для того, чтобы врать — а чтобы быть свободным стать кем угодно в любой момент.",
    p3_practice_text: "Перестань рассказывать всем о своих планах и делах. Не объясняй свои решения. Когда спрашивают — отвечай уклончиво, но доброжелательно. Создай «туман» вокруг себя.",
    p3_quote: "«Когда никто не знает тебя определённо, ты обретаешь свободу меняться»",

    // Practice 4
    p4_title: "Недоступность",
    p4_psych: "Это про здоровые границы и профилактику выгорания. Постоянная доступность (24/7 онлайн, мгновенные ответы) истощает нервную систему и создаёт зависимость от внешней валидации. Boundary setting — базовый навык психогигиены, который защищает энергетический ресурс.",
    p4_warrior: "Воин не выжимает из людей и ситуаций всё до капли. Он бережно касается мира и уходит, пока не истощил ресурс — ни свой, ни чужой. Быть недоступным — значит сохранять силу для того, что действительно важно.",
    p4_practice_text: "Не будь 24/7 онлайн для всех. Установи «тихие часы». Не отвечай на каждое сообщение мгновенно. Выбирай, когда и кому быть доступным.",
    p4_quote: "«Быть недоступным — значит сознательно избегать истощения, бережно относясь и к себе, и к другим»",

    // Practice 5
    p5_title: "Разрушение распорядков",
    p5_psych: "Нейропластичность требует новизны. Привычные паттерны поведения укрепляют старые нейронные связи и делают мышление ригидным. Сознательное нарушение рутин — способ «встряхнуть» мозг, повысить когнитивную гибкость и выйти из автопилота.",
    p5_warrior: "Если ты предсказуем — ты добыча. Рутины делают тебя уязвимым для манипуляций и застревания в «описании мира». Воин без распорядков — охотник: текучий, адаптивный, неуловимый.",
    p5_practice_text: "Меняй маршруты на работу. Ешь в разное время. Переставь мебель. Общайся с новыми людьми. Не потому что это весело — а потому что это делает тебя живым.",
    p5_quote: "«Охотник свободен, текуч и непредсказуем»",

    // Practice 6
    p6_title: "Ходьба силы",
    p6_psych: "Расфокусированное зрение активирует парасимпатическую нервную систему и снижает тревожность. Периферическое зрение связано с «режимом сканирования» (в отличие от фокусного «режима угрозы»). Согнутые пальцы создают лёгкое напряжение, которое удерживает внимание в теле и останавливает руминацию.",
    p6_warrior: "Это техника остановки внутреннего диалога. Когда внимание распределено на всё вокруг, а не сфокусировано на мыслях — голос в голове замолкает. В этом состоянии воин накапливает силу и может идти часами без усталости.",
    p6_practice_text: "При следующей прогулке слегка подогни пальцы рук к ладони (не в кулак). Расфокусируй взгляд — смотри на всё сразу, не выделяя отдельных объектов. Воспринимай периферическим зрением.",
    p6_quote: "«Удерживать внимание на траве и окружающей обстановке легше, если при ходьбе слегка подогнуть пальцы рук»",

    // Practice 7
    p7_title: "Смерть как советчик",
    p7_psych: "Terror Management Theory показывает: осознание смертности может как парализовать, так и освобождать — зависит от того, как к ней относиться. Экзистенциальная терапия использует «confrontation with death» как мощный инструмент приоритизации. Вопрос «буду ли я жалеть об этом на смертном одре?» мгновенно отсекает мелочность.",
    p7_warrior: "Смерть — единственный мудрый советчик. Она всегда рядом, слева, на расстоянии вытянутой руки. Воин не боится её — он использует её присутствие, чтобы жить полностью. Перед лицом смерти нет места для жалости к себе, страха или мелочности.",
    p7_practice_text: "Когда накрывает тревога или драма — спроси себя: «Если бы я умер через час, стал бы я тратить последний час на это?» Используй смерть как фильтр для всего неважного.",
    p7_quote: "«Смерть — единственный мудрый советчик, который есть у воина»",

    // Practice 8
    p8_title: "Неделание",
    p8_psych: "Это разрыв автоматизма восприятия. Мозг экономит энергию, создавая «ярлыки» для всего: видишь дерево — мозг говорит «дерево» и перестаёт смотреть. Сознательное восприятие объектов «по-другому» тренирует внимание, увеличивает присутствие в моменте и ломает когнитивные автоматизмы.",
    p8_warrior: "«Делание» — это когда ты видишь камень как камень, потому что тебе так сказали. «Неделание» — видеть камень как набор теней, линий, энергии. Это ключ к остановке мира — когда старое описание реальности перестаёт работать.",
    p8_practice_text: "Выбери любой объект. Вместо того чтобы смотреть на него как обычно — найди другой способ. Смотри на тени вместо предмета. На пустоту между объектами. На текстуры вместо форм.",
    p8_quote: "«Делание делает вон тот камень камнем. Смотреть на него — это делание. Видеть его — неделание»",

    // Practice 9
    p9_title: "Созерцание теней",
    p9_psych: "Это упражнение на переключение внимания (attention shifting) — базовый навык mindfulness. Фокусировка на тенях вместо объектов требует сознательного усилия, что выводит из режима автопилота и тренирует способность управлять вниманием.",
    p9_warrior: "Тени — двери в неделание. Они не «реальны» с точки зрения обычного восприятия, но именно поэтому работа с ними расшатывает привычное описание мира. Воин использует тени как тренажёр для другого способа видеть.",
    p9_practice_text: "В солнечный день найди место с множеством теней. Смотри только на тени — не на листья, ветки или предметы. Попробуй воспринять тени как что-то более реальное, чем объекты, которые их отбрасывают.",
    p9_quote: "«Днём дверями в неделание являются тени»",

    // Practice 10
    p10_title: "Поиск места силы",
    p10_psych: "Это интероцепция — осознание телесных ощущений. Тело знает, где ему хорошо, до того как это осознаёт разум. Практика нахождения «своего места» развивает body awareness и создаёт safe space для регуляции нервной системы.",
    p10_warrior: "Место силы — это точка, где твоё тело восстанавливается и набирает силу. Не «красивое» место — а телесно правильное. Воин чувствует такие места телом, а не умом, и использует их для отдыха и накопления энергии.",
    p10_practice_text: "Расфокусируй взгляд и медленно перемещайся по пространству (комнате, парку). Слушай ощущения в теле — где-то будет притягивать, где-то отталкивать. Найди точку, где телу хорошо.",
    p10_quote: "«Весь фокус в том, чтобы научиться чувствовать глазами»",

    // Practice 11
    p11_title: "Сновидение",
    p11_psych: "Lucid dreaming — осознанные сны — изучается нейронаукой и используется в терапии (особенно для работы с кошмарами и ПТСР). Способность осознавать себя во сне развивает метакогнитивные навыки, которые переносятся в бодрствование: осознание автоматических реакций, паттернов мышления.",
    p11_warrior: "Сновидение — это искусство. Первый шаг — научиться находить свои руки во сне, чтобы стабилизировать внимание сновидения. Когда это получается — открывается целый мир для исследования и накопления силы.",
    p11_practice_text: "Перед сном поставь намерение: «Сегодня во сне я посмотрю на свои руки». Повторяй это как мантру, засыпая. В течение дня периодически смотри на свои руки и спрашивай: «Это сон?»",
    p11_quote: "«Сновидение становится реальностью тогда, когда человек обретает способность фокусировать глаза на любом объекте»",

    // Practice 12
    p12_title: "Остановка мира",
    p12_psych: "Это то, что Маслоу называл peak experience — моменты, когда обычное восприятие «проваливается» и ты видишь мир по-новому. Медитативные традиции описывают похожие состояния (kensho, satori). Это не галлюцинация — это временное отключение фильтров, через которые мы обычно воспринимаем реальность.",
    p12_warrior: "Остановка мира — кульминация всех практик. Момент, когда внутренний диалог замолкает, старое «описание» реальности рушится, и ты воспринимаешь мир напрямую. Это не техника — это результат всех остальных практик.",
    p12_practice_text: "Это не то, что можно «сделать». Когда ты практикуешь всё остальное — стираешь историю, убираешь ЧСВ, ходишь походкой силы, созерцаешь тени — в какой-то момент это случится само.",
    p12_quote: "«Остановить мир — это ввести в действие новое описание»",

    // Footer
    footer_based: "На основе книг Карлоса Кастанеды",
    footer_source: "Исходный код",
    back: "← Назад",

    // Glossary
    glossary_title: "Глоссарий",
    glossary_subtitle: "Ключевые термины учения на понятном языке"
  },

  uk: {
    // Header
    nav_home: "Головна",
    nav_practices: "Практики",
    nav_glossary: "Глосарій",

    // Hero
    hero_title: "Шлях <span>Воїна</span>",
    hero_subtitle: "Вчення дона Хуана для сучасного світу. Давня мудрість толтеків у практиках, що змінюють сприйняття і дають силу.",
    hero_cta: "До практик",

    // Manifesto
    manifesto_badge: "Шлях знання",
    manifesto_title: "Воїн бачить світ інакше",
    manifesto_p1: "Кожна практика тут працює на двох рівнях. Психологія пояснює, чому це допомагає справлятися з тривогою, стресом і автоматизмом мислення. Шлях воїна показує глибший сенс — як ці техніки змінюють саме сприйняття реальності.",
    manifesto_p2: "Можеш використовувати лише психологічний шар — і отримаєш робочі інструменти для ментального здоров'я. А можеш піти глибше — і відкрити те, про що говорив дон Хуан.",

    // Practices section
    practices_title: "Практики",
    practices_subtitle: "Від простого до глибокого. Починай зверху і рухайся вниз.",

    // Labels
    psych_label: "Психологія",
    warrior_label: "Шлях воїна",
    practice: "Практика",
    what: "Що це",

    // Practice 1
    p1_title: "Настрій воїна",
    p1_psych: "Це поєднання flow-стану та acceptance з ACT-терапії. Повна залученість у процес без прив'язки до результату знижує тривожність, прибирає параліч перфекціонізму і дозволяє діяти ефективніше.",
    p1_warrior: "Воїн діє бездоганно — вкладає всього себе в кожну дію, бо це може бути його остання битва. Але він не прив'язаний до результату, бо знає: результат у руках сили, не його.",
    p1_practice_text: "У будь-якій важливій ситуації — віддайся повністю, але заздалегідь прийми, що результат може бути будь-яким.",
    p1_quote: "«У настрої воїна повний самоконтроль і абсолютне самовладання поєднуються з відстороненістю»",

    // Practice 2
    p2_title: "Відмова від почуття власної важливості",
    p2_psych: "Це его-децентрація — ключова навичка в когнітивній терапії. Надмірна фокусування на собі — головне джерело тривоги і депресії. Зниження self-focus звільняє величезну кількість когнітивних ресурсів.",
    p2_warrior: "ПВВ — головний ворог воїна. Це постійний злив енергії на підтримання образу себе. Воїна не можна образити — у нього немає тієї частини, за яку можна зачепитися.",
    p2_practice_text: "Коли відчуваєш образу чи роздратування — спіймай момент і запитай: «Це реальна проблема чи моє его?»",
    p2_quote: "«Поки ти відчуваєш, що найважливіше явище у світі — це твоя персона, ти ніколи не зможеш по-справжньому відчути навколишній світ»",

    // Practice 3
    p3_title: "Стирання особистої історії",
    p3_psych: "Соціальна психологія називає це «звільненням від рольових очікувань». Коли оточуючі знають твою історію, вони тримають тебе в рамках. Менше інформації про себе = більше свободи змінюватися.",
    p3_warrior: "Особиста історія — це клітка. Кожен факт про тебе, який знають інші, стає якорем, що утримує тебе в старому описі себе.",
    p3_practice_text: "Перестань розповідати всім про свої плани та справи. Не пояснюй своїх рішень. Створи «туман» навколо себе.",
    p3_quote: "«Коли ніхто не знає тебе напевне, ти здобуваєш свободу змінюватися»",

    // Practice 4
    p4_title: "Недоступність",
    p4_psych: "Це про здорові кордони та профілактику вигорання. Постійна доступність виснажує нервову систему і створює залежність від зовнішньої валідації.",
    p4_warrior: "Воїн не вичавлює з людей і ситуацій все до краплі. Він бережно торкається світу і йде, поки не виснажив ресурс.",
    p4_practice_text: "Не будь 24/7 онлайн для всіх. Встанови «тихі години». Вибирай, коли і кому бути доступним.",
    p4_quote: "«Бути недоступним — значить свідомо уникати виснаження»",

    // Practice 5
    p5_title: "Руйнування розпорядків",
    p5_psych: "Нейропластичність потребує новизни. Звичні патерни поведінки укріплюють старі нейронні зв'язки і роблять мислення ригідним.",
    p5_warrior: "Якщо ти передбачуваний — ти здобич. Рутини роблять тебе вразливим. Воїн без розпорядків — мисливець.",
    p5_practice_text: "Міняй маршрути на роботу. Їж у різний час. Переставляй меблі. Спілкуйся з новими людьми.",
    p5_quote: "«Мисливець вільний, текучий і непередбачуваний»",

    // Practice 6
    p6_title: "Хода сили",
    p6_psych: "Розфокусований зір активує парасимпатичну нервову систему і знижує тривожність. Периферійний зір пов'язаний з «режимом сканування».",
    p6_warrior: "Це техніка зупинки внутрішнього діалогу. Коли увага розподілена на все навколо — голос у голові замовкає.",
    p6_practice_text: "Під час прогулянки злегка підігни пальці рук до долоні. Розфокусуй погляд — дивись на все одразу.",
    p6_quote: "«Утримувати увагу легше, якщо при ходьбі злегка підігнути пальці рук»",

    // Practice 7
    p7_title: "Смерть як порадник",
    p7_psych: "Екзистенціальна терапія використовує усвідомлення смерті як потужний інструмент пріоритизації. Питання «чи буду я шкодувати про це на смертному одрі?» миттєво відсікає дрібниці.",
    p7_warrior: "Смерть — єдиний мудрий порадник. Вона завжди поруч, зліва. Воїн використовує її присутність, щоб жити повністю.",
    p7_practice_text: "Коли накриває тривога — запитай себе: «Якби я помер через годину, чи став би я витрачати останню годину на це?»",
    p7_quote: "«Смерть — єдиний мудрий порадник, який є у воїна»",

    // Practice 8
    p8_title: "Неробення",
    p8_psych: "Це розрив автоматизму сприйняття. Мозок економить енергію, створюючи «ярлики» для всього. Свідоме сприйняття об'єктів «по-іншому» тренує увагу.",
    p8_warrior: "«Робення» — це коли ти бачиш камінь як камінь, бо тобі так сказали. «Неробення» — бачити камінь як набір тіней, ліній, енергії.",
    p8_practice_text: "Вибери будь-який об'єкт. Замість того щоб дивитися як зазвичай — знайди інший спосіб. Дивись на тіні замість предметів.",
    p8_quote: "«Робення робить камінь каменем. Дивитися — це робення. Бачити — неробення»",

    // Practice 9
    p9_title: "Споглядання тіней",
    p9_psych: "Це вправа на переключення уваги — базова навичка mindfulness. Фокусування на тінях виводить з режиму автопілота.",
    p9_warrior: "Тіні — двері в неробення. Вони не «реальні» з точки зору звичайного сприйняття, тому робота з ними розхитує звичний опис світу.",
    p9_practice_text: "В сонячний день знайди місце з багатьма тінями. Дивись тільки на тіні — не на листя чи гілки.",
    p9_quote: "«Вдень дверима в неробення є тіні»",

    // Practice 10
    p10_title: "Пошук місця сили",
    p10_psych: "Це інтероцепція — усвідомлення тілесних відчуттів. Тіло знає, де йому добре, до того як це усвідомлює розум.",
    p10_warrior: "Місце сили — це точка, де твоє тіло відновлюється і набирає силу. Не «красиве» місце — а тілесно правильне.",
    p10_practice_text: "Розфокусуй погляд і повільно переміщуйся простором. Слухай відчуття в тілі — десь буде притягувати.",
    p10_quote: "«Весь фокус у тому, щоб навчитися відчувати очима»",

    // Practice 11
    p11_title: "Сновидіння",
    p11_psych: "Lucid dreaming вивчається нейронаукою і використовується в терапії. Здатність усвідомлювати себе уві сні розвиває метакогнітивні навички.",
    p11_warrior: "Сновидіння — це мистецтво. Перший крок — навчитися знаходити свої руки уві сні, щоб стабілізувати увагу сновидіння.",
    p11_practice_text: "Перед сном постав намір: «Сьогодні уві сні я подивлюся на свої руки». Повторюй це як мантру, засинаючи.",
    p11_quote: "«Сновидіння стає реальністю, коли людина здобуває здатність фокусувати очі на будь-якому об'єкті»",

    // Practice 12
    p12_title: "Зупинка світу",
    p12_psych: "Це те, що Маслоу називав peak experience — моменти, коли звичайне сприйняття «провалюється» і ти бачиш світ по-новому.",
    p12_warrior: "Зупинка світу — кульмінація всіх практик. Момент, коли внутрішній діалог замовкає, старий «опис» реальності руйнується.",
    p12_practice_text: "Це не те, що можна «зробити». Коли ти практикуєш все інше — в якийсь момент це станеться само.",
    p12_quote: "«Зупинити світ — це ввести в дію новий опис»",

    // Footer
    footer_based: "На основі книг Карлоса Кастанеди",
    footer_source: "Вихідний код",
    back: "← Назад",

    // Glossary
    glossary_title: "Глосарій",
    glossary_subtitle: "Ключові терміни вчення зрозумілою мовою"
  },

  en: {
    // Header
    nav_home: "Home",
    nav_practices: "Practices",
    nav_glossary: "Glossary",

    // Hero
    hero_title: "The Warrior's <span>Path</span>",
    hero_subtitle: "Don Juan's teachings for the modern world. Ancient Toltec wisdom in practices that change perception and give power.",
    hero_cta: "To practices",

    // Manifesto
    manifesto_badge: "The path of knowledge",
    manifesto_title: "A warrior sees the world differently",
    manifesto_p1: "Each practice here works on two levels. Psychology explains why it helps with anxiety, stress, and automatic thinking. The warrior's path shows deeper meaning — how these techniques change perception itself.",
    manifesto_p2: "You can use just the psychological layer — and get working tools for mental health. Or you can go deeper — and discover what Don Juan was talking about.",

    // Practices section
    practices_title: "Practices",
    practices_subtitle: "From simple to deep. Start at the top and work your way down.",

    // Labels
    psych_label: "Psychology",
    warrior_label: "Warrior's path",
    practice: "Practice",
    what: "What is it",

    // Practice 1
    p1_title: "Warrior's mood",
    p1_psych: "This is a combination of flow state and acceptance from ACT therapy. Full engagement in the process without attachment to the outcome reduces anxiety, removes perfectionism paralysis, and allows you to act more effectively.",
    p1_warrior: "A warrior acts impeccably — putting all of himself into every action, because it may be his last battle. But he's not attached to the outcome, because he knows: the result is in the hands of power, not his.",
    p1_practice_text: "In any important situation — give it your all, but accept in advance that the result can be anything. Tell yourself: 'I'll do my best. The rest is not my concern.'",
    p1_quote: "'In the warrior's mood, complete self-control and absolute composure are combined with detachment'",

    // Practice 2
    p2_title: "Dropping self-importance",
    p2_psych: "This is ego-decentration — a key skill in cognitive therapy. Excessive self-focus ('what will they think of me', 'I was offended', 'I deserve better') is the main source of anxiety and depression.",
    p2_warrior: "Self-importance is the warrior's main enemy. It's not just ego — it's a constant drain of energy maintaining your self-image. A warrior cannot be offended — he has no part to hook onto.",
    p2_practice_text: "When you feel offended or irritated — catch the moment and ask: 'Is this a real problem or my ego?' Then: 'Will I remember this in a year?'",
    p2_quote: "'As long as you feel that you are the most important thing in the world, you cannot really appreciate the world around you'",

    // Practice 3
    p3_title: "Erasing personal history",
    p3_psych: "Social psychology calls this 'freedom from role expectations'. When others know your story, they keep you in a box: 'you've always been like this'. Less information about yourself = more freedom to change.",
    p3_warrior: "Personal history is a cage. Every fact about you that others know becomes an anchor holding you in an old description of yourself.",
    p3_practice_text: "Stop telling everyone about your plans and affairs. Don't explain your decisions. Create a 'fog' around yourself.",
    p3_quote: "'When no one knows you for sure, you gain the freedom to change'",

    // Practice 4
    p4_title: "Inaccessibility",
    p4_psych: "This is about healthy boundaries and burnout prevention. Constant availability exhausts the nervous system and creates dependence on external validation.",
    p4_warrior: "A warrior doesn't squeeze everything out of people and situations. He gently touches the world and leaves before exhausting the resource.",
    p4_practice_text: "Don't be online 24/7 for everyone. Set 'quiet hours'. Choose when and to whom to be available.",
    p4_quote: "'Being inaccessible means consciously avoiding exhaustion'",

    // Practice 5
    p5_title: "Breaking routines",
    p5_psych: "Neuroplasticity requires novelty. Habitual behavior patterns strengthen old neural connections and make thinking rigid. Consciously breaking routines is a way to 'shake up' the brain.",
    p5_warrior: "If you're predictable — you're prey. Routines make you vulnerable. A warrior without routines is a hunter: fluid, adaptive, elusive.",
    p5_practice_text: "Change your routes to work. Eat at different times. Rearrange furniture. Talk to new people. Not because it's fun — but because it makes you alive.",
    p5_quote: "'A hunter is free, fluid, and unpredictable'",

    // Practice 6
    p6_title: "Power walk",
    p6_psych: "Unfocused vision activates the parasympathetic nervous system and reduces anxiety. Peripheral vision is associated with 'scanning mode' (as opposed to focused 'threat mode').",
    p6_warrior: "This is a technique for stopping internal dialogue. When attention is distributed to everything around, rather than focused on thoughts — the voice in your head falls silent.",
    p6_practice_text: "On your next walk, slightly curl your fingers toward your palm (not into a fist). Unfocus your gaze — look at everything at once, without singling out individual objects.",
    p6_quote: "'It's easier to keep your attention on the grass and surroundings if you slightly curl your fingers while walking'",

    // Practice 7
    p7_title: "Death as an advisor",
    p7_psych: "Terror Management Theory shows: awareness of mortality can both paralyze and liberate — depending on how you relate to it. Existential therapy uses 'confrontation with death' as a powerful prioritization tool.",
    p7_warrior: "Death is the only wise advisor. It's always nearby, to your left. A warrior uses its presence to live fully. In the face of death, there's no room for self-pity or pettiness.",
    p7_practice_text: "When anxiety hits — ask yourself: 'If I died in an hour, would I spend the last hour on this?' Use death as a filter for everything unimportant.",
    p7_quote: "'Death is the only wise advisor a warrior has'",

    // Practice 8
    p8_title: "Not-doing",
    p8_psych: "This is breaking automatic perception. The brain saves energy by creating 'labels' for everything. Consciously perceiving objects 'differently' trains attention and breaks cognitive automatisms.",
    p8_warrior: "'Doing' is when you see a rock as a rock because you were told so. 'Not-doing' is seeing the rock as shadows, lines, energy. This is the key to stopping the world.",
    p8_practice_text: "Choose any object. Instead of looking at it as usual — find another way. Look at shadows instead of objects. At emptiness between objects. At textures instead of shapes.",
    p8_quote: "'Doing makes that rock a rock. Looking at it is doing. Seeing it is not-doing'",

    // Practice 9
    p9_title: "Shadow gazing",
    p9_psych: "This is an attention-shifting exercise — a basic mindfulness skill. Focusing on shadows instead of objects requires conscious effort, which takes you out of autopilot mode.",
    p9_warrior: "Shadows are doors to not-doing. They're not 'real' from the perspective of ordinary perception, which is why working with them shakes up the habitual description of the world.",
    p9_practice_text: "On a sunny day, find a place with many shadows. Look only at the shadows — not at the leaves or branches. Try to perceive shadows as more real than the objects casting them.",
    p9_quote: "'During the day, shadows are the doors to not-doing'",

    // Practice 10
    p10_title: "Finding a place of power",
    p10_psych: "This is interoception — awareness of bodily sensations. The body knows where it feels good before the mind realizes it. The practice develops body awareness and creates a safe space for nervous system regulation.",
    p10_warrior: "A place of power is a point where your body recovers and gains power. Not a 'beautiful' place — but a bodily correct one. A warrior feels such places with his body, not his mind.",
    p10_practice_text: "Unfocus your gaze and slowly move through the space. Listen to sensations in your body — somewhere will attract, somewhere will repel. Find the spot where your body feels good.",
    p10_quote: "'The whole trick is to learn to feel with your eyes'",

    // Practice 11
    p11_title: "Dreaming",
    p11_psych: "Lucid dreaming is studied by neuroscience and used in therapy (especially for nightmares and PTSD). The ability to be aware in dreams develops metacognitive skills that transfer to waking life.",
    p11_warrior: "Dreaming is an art. The first step is to learn to find your hands in a dream to stabilize the dreaming attention. When this works — a whole world opens up for exploration.",
    p11_practice_text: "Before sleep, set an intention: 'Tonight in my dream, I will look at my hands.' Repeat it like a mantra as you fall asleep. During the day, periodically look at your hands and ask: 'Is this a dream?'",
    p11_quote: "'Dreaming becomes reality when a person acquires the ability to focus their eyes on any object'",

    // Practice 12
    p12_title: "Stopping the world",
    p12_psych: "This is what Maslow called peak experience — moments when ordinary perception 'collapses' and you see the world anew. Meditative traditions describe similar states (kensho, satori).",
    p12_warrior: "Stopping the world is the culmination of all practices. The moment when internal dialogue falls silent, the old 'description' of reality collapses, and you perceive the world directly.",
    p12_practice_text: "This is not something you can 'do'. When you practice everything else — erase history, remove self-importance, walk the power walk, gaze at shadows — at some point it will happen on its own.",
    p12_quote: "'Stopping the world is putting a new description into action'",

    // Footer
    footer_based: "Based on books by Carlos Castaneda",
    footer_source: "Source code",
    back: "← Back",

    // Glossary
    glossary_title: "Glossary",
    glossary_subtitle: "Key terms of the teaching in plain language"
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateContent();
  updateLangButtons();
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function t(key) {
  return translations[currentLang][key] || translations['ru'][key] || key;
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else {
      el.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-tags]').forEach(el => {
    const key = el.dataset.i18nTags;
    const tags = t(key);
    if (Array.isArray(tags)) {
      el.innerHTML = tags.map(tag => `<span class="practice-tag">${tag}</span>`).join('');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  updateLangButtons();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
