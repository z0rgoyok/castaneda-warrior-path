const translations = {
  ru: {
    // Header
    nav_home: "Главная",
    nav_practices: "Практики",
    nav_glossary: "Глоссарий",

    // Hero
    hero_title: "Путь <span>Воина</span>",
    hero_subtitle: "Практики из книг Карлоса Кастанеды — с психологическим объяснением, почему они работают.",
    hero_cta: "Читать",

    // Manifesto
    manifesto_badge: "Зачем это",
    manifesto_title: "База современной эзотерики",
    manifesto_p1: "Книги Кастанеды (1968–1998) — это фундамент, на котором стоит почти вся современная эзотерика. Тони Роббинс, Экхарт Толле, Джо Диспенза, нью-эйдж курсы — всё это пересказ тех же идей другими словами. После Кастанеды в этой области не появилось ничего принципиально нового.",
    manifesto_p2: "Сами практики не уникальны — они пересекаются с дзен-буддизмом (остановка внутреннего диалога), суфизмом (стирание эго), стоицизмом (смерть как советчик), шаманскими традициями Мексики. Кастанеда собрал это в единую систему и описал понятным языком.",
    manifesto_p3: "Здесь каждая практика объясняется на двух уровнях: психология (почему это работает с точки зрения науки) и путь воина (как это понимал дон Хуан). Можешь брать только первое — уже будет польза.",

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
    p1_psych: "Это сочетание состояния потока и принятия из терапии принятия и ответственности. Полная вовлечённость в процесс без привязки к результату снижает тревожность, убирает паралич перфекционизма и позволяет действовать эффективнее. Исследования показывают: отпускание контроля над исходом парадоксально улучшает результаты.",
    p1_warrior: "Воин действует безупречно — вкладывает всего себя в каждое действие, потому что это может быть его последняя битва. Но он не привязан к результату, потому что знает: исход в руках силы, не его. Это даёт парадоксальную свободу — делать максимум без страха провала.",
    p1_practice_text: "В любой важной ситуации — выложись полностью, но заранее прими, что результат может быть любым. Перед действием скажи себе: «Я сделаю лучшее, на что способен. Остальное — не моя забота».",
    p1_quote: "«В настроении воина полный самоконтроль и абсолютное самообладание соединяются с отрешенностью»",

    // Practice 2
    p2_title: "Отрешённость",
    p2_psych: "Это эмоциональное дистанцирование — навык из когнитивно-поведенческой терапии. Умение наблюдать за своими эмоциями, мыслями и ситуациями «со стороны», не сливаясь с ними. Снижает эмоциональную реактивность, помогает принимать решения без импульсивности и защищает от манипуляций.",
    p2_warrior: "Отрешённость — это не равнодушие. Это стратегическое неучастие в драмах, которые пожирают энергию. Воин отстраняется от исхода, от мнения других, от собственных эмоций — чтобы видеть ясно и действовать точно. Он в мире, но не от мира.",
    p2_practice_text: "Когда накрывает эмоция — представь, что смотришь на ситуацию с потолка. Ты наблюдатель, не участник. Спроси: «Что бы я посоветовал другу в этой ситуации?» Отстранённый взгляд даёт ясность.",
    p2_quote: "«Воин знает, что он только человек. Его единственное сожаление — что жизнь так коротка, что ничего не успеть. Но для него это не предмет переживаний. Для воина это предмет вызова»",

    // Practice 3
    p3_title: "Отказ от чувства собственной важности",
    p3_psych: "Это эго-децентрация — ключевой навык в когнитивной терапии. Чрезмерная зацикленность на себе («что обо мне подумают», «меня обидели», «я заслуживаю лучшего») — главный источник тревоги и депрессии. Снижение фокуса на себе освобождает огромное количество умственных ресурсов и снижает навязчивые мысли.",
    p3_warrior: "ЧСВ — главный враг воина. Это не просто эго, а постоянный слив энергии на поддержание образа себя. Воина нельзя обидеть — у него нет той части, за которую можно зацепиться. Вся энергия, которая раньше уходила на защиту эго, теперь доступна для действия.",
    p3_practice_text: "Когда чувствуешь обиду или раздражение — поймай момент и спроси: «Это реальная проблема или моё эго?» Потом: «Буду ли я помнить об этом через год? На смертном одре?» Скорее всего — нет.",
    p3_quote: "«Пока ты чувствуешь, что наиболее важное явление в мире — это твоя персона, ты никогда не сможешь по-настоящему ощутить окружающий мир»",

    // Practice 4
    p4_title: "Стирание личной истории",
    p4_psych: "Социальная психология называет это «освобождением от ролевых ожиданий». Когда окружающие знают твою историю, они держат тебя в рамках: «ты всегда был таким». Это создаёт самосбывающееся пророчество и мешает личностному росту. Меньше информации о себе — больше свободы меняться.",
    p4_warrior: "Личная история — это клетка. Каждый факт о тебе, который знают другие, становится якорем, удерживающим тебя в старом описании себя. Воин стирает историю не для того, чтобы врать — а чтобы быть свободным стать кем угодно в любой момент.",
    p4_practice_text: "Перестань рассказывать всем о своих планах и делах. Не объясняй свои решения. Когда спрашивают — отвечай уклончиво, но доброжелательно. Создай «туман» вокруг себя.",
    p4_quote: "«Когда никто не знает тебя определённо, ты обретаешь свободу меняться»",

    // Practice 5
    p5_title: "Недоступность",
    p5_psych: "Это про здоровые границы и профилактику выгорания. Постоянная доступность (24/7 онлайн, мгновенные ответы) истощает нервную систему и создаёт зависимость от внешнего одобрения. Установка границ — базовый навык психогигиены, который защищает энергетический ресурс.",
    p5_warrior: "Воин не выжимает из людей и ситуаций всё до капли. Он бережно касается мира и уходит, пока не истощил ресурс — ни свой, ни чужой. Быть недоступным — значит сохранять силу для того, что действительно важно.",
    p5_practice_text: "Не будь 24/7 онлайн для всех. Установи «тихие часы». Не отвечай на каждое сообщение мгновенно. Выбирай, когда и кому быть доступным.",
    p5_quote: "«Быть недоступным — значит сознательно избегать истощения, бережно относясь и к себе, и к другим»",

    // Practice 6
    p6_title: "Разрушение распорядков",
    p6_psych: "Нейропластичность требует новизны. Привычные паттерны поведения укрепляют старые нейронные связи и делают мышление ригидным. Сознательное нарушение рутин — способ «встряхнуть» мозг, повысить когнитивную гибкость и выйти из автопилота.",
    p6_warrior: "Если ты предсказуем — ты добыча. Рутины делают тебя уязвимым для манипуляций и застревания в «описании мира». Воин без распорядков — охотник: текучий, адаптивный, неуловимый.",
    p6_practice_text: "Меняй маршруты на работу. Ешь в разное время. Переставь мебель. Общайся с новыми людьми. Не потому что это весело — а потому что это делает тебя живым.",
    p6_quote: "«Охотник свободен, текуч и непредсказуем»",

    // Practice 7
    p7_title: "Ходьба силы",
    p7_psych: "Расфокусированное зрение активирует парасимпатическую нервную систему и снижает тревожность. Периферическое зрение связано с «режимом сканирования» (в отличие от фокусного «режима угрозы»). Согнутые пальцы создают лёгкое напряжение, которое удерживает внимание в теле и останавливает руминацию.",
    p7_warrior: "Это техника остановки внутреннего диалога. Когда внимание распределено на всё вокруг, а не сфокусировано на мыслях — голос в голове замолкает. В этом состоянии воин накапливает силу и может идти часами без усталости.",
    p7_practice_text: "При следующей прогулке слегка подогни пальцы рук к ладони (не в кулак). Расфокусируй взгляд — смотри на всё сразу, не выделяя отдельных объектов. Воспринимай периферическим зрением.",
    p7_quote: "«Удерживать внимание на траве и окружающей обстановке легче, если при ходьбе слегка подогнуть пальцы рук»",

    // Practice 8
    p8_title: "Смерть как советчик",
    p8_psych: "Теория управления страхом смерти показывает: осознание смертности может как парализовать, так и освобождать — зависит от того, как к ней относиться. Экзистенциальная терапия использует «столкновение со смертью» как мощный инструмент расстановки приоритетов. Вопрос «буду ли я жалеть об этом на смертном одре?» мгновенно отсекает мелочность.",
    p8_warrior: "Смерть — единственный мудрый советчик. Она всегда рядом, слева, на расстоянии вытянутой руки. Воин не боится её — он использует её присутствие, чтобы жить полностью. Перед лицом смерти нет места для жалости к себе, страха или мелочности.",
    p8_practice_text: "Когда накрывает тревога или драма — спроси себя: «Если бы я умер через час, стал бы я тратить последний час на это?» Используй смерть как фильтр для всего неважного.",
    p8_quote: "«Смерть — единственный мудрый советчик, который есть у воина»",

    // Practice 9
    p9_title: "Неделание",
    p9_psych: "Это разрыв автоматизма восприятия. Мозг экономит энергию, создавая «ярлыки» для всего: видишь дерево — мозг говорит «дерево» и перестаёт смотреть. Сознательное восприятие объектов «по-другому» тренирует внимание, увеличивает присутствие в моменте и ломает когнитивные автоматизмы.",
    p9_warrior: "«Делание» — это когда ты видишь камень как камень, потому что тебе так сказали. «Неделание» — видеть камень как набор теней, линий, энергии. Это ключ к остановке мира — когда старое описание реальности перестаёт работать.",
    p9_practice_text: "Выбери любой объект. Вместо того чтобы смотреть на него как обычно — найди другой способ. Смотри на тени вместо предмета. На пустоту между объектами. На текстуры вместо форм.",
    p9_quote: "«Делание делает вон тот камень камнем. Смотреть на него — это делание. Видеть его — неделание»",

    // Practice 10
    p10_title: "Созерцание теней",
    p10_psych: "Это упражнение на переключение внимания — базовый навык осознанности. Фокусировка на тенях вместо объектов требует сознательного усилия, что выводит из режима автопилота и тренирует способность управлять вниманием.",
    p10_warrior: "Тени — двери в неделание. Они не «реальны» с точки зрения обычного восприятия, но именно поэтому работа с ними расшатывает привычное описание мира. Воин использует тени как тренажёр для другого способа видеть.",
    p10_practice_text: "В солнечный день найди место с множеством теней. Смотри только на тени — не на листья, ветки или предметы. Попробуй воспринять тени как что-то более реальное, чем объекты, которые их отбрасывают.",
    p10_quote: "«Днём дверями в неделание являются тени»",

    // Practice 11
    p11_title: "Поиск места силы",
    p11_psych: "Это интероцепция — осознание телесных ощущений. Тело знает, где ему хорошо, до того как это осознаёт разум. Практика нахождения «своего места» развивает телесную осознанность и создаёт безопасное пространство для регуляции нервной системы.",
    p11_warrior: "Место силы — это точка, где твоё тело восстанавливается и набирает силу. Не «красивое» место — а телесно правильное. Воин чувствует такие места телом, а не умом, и использует их для отдыха и накопления энергии.",
    p11_practice_text: "Расфокусируй взгляд и медленно перемещайся по пространству (комнате, парку). Слушай ощущения в теле — где-то будет притягивать, где-то отталкивать. Найди точку, где телу хорошо.",
    p11_quote: "«Весь фокус в том, чтобы научиться чувствовать глазами»",

    // Practice 12
    p12_title: "Сновидение",
    p12_psych: "Осознанные сновидения изучаются нейронаукой и используются в терапии (особенно для работы с кошмарами и ПТСР). Способность осознавать себя во сне развивает навыки наблюдения за своим мышлением, которые переносятся в бодрствование: осознание автоматических реакций, привычных схем мышления.",
    p12_warrior: "Сновидение — это искусство. Первый шаг — научиться находить свои руки во сне, чтобы стабилизировать внимание сновидения. Когда это получается — открывается целый мир для исследования и накопления силы.",
    p12_practice_text: "Перед сном поставь намерение: «Сегодня во сне я посмотрю на свои руки». Повторяй это как мантру, засыпая. В течение дня периодически смотри на свои руки и спрашивай: «Это сон?»",
    p12_quote: "«Сновидение становится реальностью тогда, когда человек обретает способность фокусировать глаза на любом объекте»",

    // Practice 13
    p13_title: "Абстрактные ядра",
    p13_psych: "Это работа с архетипами и паттернами — структурами, которые повторяются в мифах, историях и жизненных ситуациях. Юнгианская психология называет это коллективным бессознательным. Распознавание этих паттернов помогает понять глубинные мотивы поведения и выйти за пределы личной истории.",
    p13_warrior: "Абстрактные ядра — это чистые истории духа, архетипы пути воина. Они существуют вне времени и повторяются в жизни каждого, кто идёт по пути знания. Воин учится распознавать эти ядра в своей жизни — и понимать, что его личная драма — лишь вариация вечного танца.",
    p13_practice_text: "Посмотри на свою жизненную ситуацию как на историю, которая уже рассказывалась миллионы раз. Какой это архетип? Герой в пути? Встреча с наставником? Испытание? Отстранись от личного и увидь структуру.",
    p13_quote: "«Абстрактное — это дух. Дух не имеет формы, но проявляется через бесконечные формы»",

    // Practice 14
    p14_title: "Остановка мира",
    p14_psych: "Это то, что Маслоу называл «пиковыми переживаниями» — моменты, когда обычное восприятие «проваливается» и ты видишь мир по-новому. Медитативные традиции описывают похожие состояния (кэнсё, сатори в дзен). Это не галлюцинация — это временное отключение фильтров, через которые мы обычно воспринимаем реальность.",
    p14_warrior: "Остановка мира — кульминация всех практик. Момент, когда внутренний диалог замолкает, старое «описание» реальности рушится, и ты воспринимаешь мир напрямую. Это не техника — это результат всех остальных практик.",
    p14_practice_text: "Это не то, что можно «сделать». Когда ты практикуешь всё остальное — стираешь историю, убираешь ЧСВ, ходишь походкой силы, созерцаешь тени — в какой-то момент это случится само.",
    p14_quote: "«Остановить мир — это ввести в действие новое описание»",

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
    hero_subtitle: "Практики з книг Карлоса Кастанеди — з психологічним поясненням, чому вони працюють.",
    hero_cta: "Читати",

    // Manifesto
    manifesto_badge: "Навіщо це",
    manifesto_title: "База сучасної езотерики",
    manifesto_p1: "Книги Кастанеди (1968–1998) — це фундамент, на якому стоїть майже вся сучасна езотерика. Тоні Роббінс, Екхарт Толле, Джо Діспенза, нью-ейдж курси — все це переказ тих самих ідей іншими словами. Після Кастанеди в цій галузі не з'явилося нічого принципово нового.",
    manifesto_p2: "Самі практики не унікальні — вони перетинаються з дзен-буддизмом (зупинка внутрішнього діалогу), суфізмом (стирання его), стоїцизмом (смерть як порадник), шаманськими традиціями Мексики. Кастанеда зібрав це в єдину систему і описав зрозумілою мовою.",
    manifesto_p3: "Тут кожна практика пояснюється на двох рівнях: психологія (чому це працює з точки зору науки) і шлях воїна (як це розумів дон Хуан). Можеш брати лише перше — вже буде користь.",

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
    p1_psych: "Це поєднання стану потоку та прийняття з терапії прийняття і відповідальності. Повна залученість у процес без прив'язки до результату знижує тривожність, прибирає параліч перфекціонізму і дозволяє діяти ефективніше.",
    p1_warrior: "Воїн діє бездоганно — вкладає всього себе в кожну дію, бо це може бути його остання битва. Але він не прив'язаний до результату, бо знає: результат у руках сили, не його.",
    p1_practice_text: "У будь-якій важливій ситуації — віддайся повністю, але заздалегідь прийми, що результат може бути будь-яким.",
    p1_quote: "«У настрої воїна повний самоконтроль і абсолютне самовладання поєднуються з відстороненістю»",

    // Practice 2
    p2_title: "Відстороненість",
    p2_psych: "Це емоційне дистанціювання — навичка з когнітивно-поведінкової терапії. Вміння спостерігати за своїми емоціями, думками і ситуаціями «збоку», не зливаючись з ними. Знижує емоційну реактивність і захищає від маніпуляцій.",
    p2_warrior: "Відстороненість — це не байдужість. Це стратегічна неучасть у драмах, які пожирають енергію. Воїн відсторонюється від результату, від думки інших, від власних емоцій — щоб бачити ясно і діяти точно.",
    p2_practice_text: "Коли накриває емоція — уяви, що дивишся на ситуацію зі стелі. Ти спостерігач, не учасник. Запитай: «Що б я порадив другу в цій ситуації?»",
    p2_quote: "«Воїн знає, що він лише людина. Його єдиний жаль — що життя таке коротке. Але для нього це не предмет переживань. Для воїна це предмет виклику»",

    // Practice 3
    p3_title: "Відмова від почуття власної важливості",
    p3_psych: "Це его-децентрація — ключова навичка в когнітивній терапії. Надмірне зосередження на собі — головне джерело тривоги і депресії. Зниження фокусу на собі звільняє величезну кількість розумових ресурсів.",
    p3_warrior: "ПВВ — головний ворог воїна. Це постійний злив енергії на підтримання образу себе. Воїна не можна образити — у нього немає тієї частини, за яку можна зачепитися.",
    p3_practice_text: "Коли відчуваєш образу чи роздратування — спіймай момент і запитай: «Це реальна проблема чи моє его?»",
    p3_quote: "«Поки ти відчуваєш, що найважливіше явище у світі — це твоя персона, ти ніколи не зможеш по-справжньому відчути навколишній світ»",

    // Practice 4
    p4_title: "Стирання особистої історії",
    p4_psych: "Соціальна психологія називає це «звільненням від рольових очікувань». Коли оточуючі знають твою історію, вони тримають тебе в рамках. Менше інформації про себе = більше свободи змінюватися.",
    p4_warrior: "Особиста історія — це клітка. Кожен факт про тебе, який знають інші, стає якорем, що утримує тебе в старому описі себе.",
    p4_practice_text: "Перестань розповідати всім про свої плани та справи. Не пояснюй своїх рішень. Створи «туман» навколо себе.",
    p4_quote: "«Коли ніхто не знає тебе напевне, ти здобуваєш свободу змінюватися»",

    // Practice 5
    p5_title: "Недоступність",
    p5_psych: "Це про здорові кордони та профілактику вигорання. Постійна доступність виснажує нервову систему і створює залежність від зовнішнього схвалення.",
    p5_warrior: "Воїн не вичавлює з людей і ситуацій все до краплі. Він бережно торкається світу і йде, поки не виснажив ресурс.",
    p5_practice_text: "Не будь 24/7 онлайн для всіх. Встанови «тихі години». Вибирай, коли і кому бути доступним.",
    p5_quote: "«Бути недоступним — значить свідомо уникати виснаження»",

    // Practice 6
    p6_title: "Руйнування розпорядків",
    p6_psych: "Нейропластичність потребує новизни. Звичні патерни поведінки укріплюють старі нейронні зв'язки і роблять мислення ригідним.",
    p6_warrior: "Якщо ти передбачуваний — ти здобич. Рутини роблять тебе вразливим. Воїн без розпорядків — мисливець.",
    p6_practice_text: "Міняй маршрути на роботу. Їж у різний час. Переставляй меблі. Спілкуйся з новими людьми.",
    p6_quote: "«Мисливець вільний, текучий і непередбачуваний»",

    // Practice 7
    p7_title: "Хода сили",
    p7_psych: "Розфокусований зір активує парасимпатичну нервову систему і знижує тривожність. Периферійний зір пов'язаний з «режимом сканування».",
    p7_warrior: "Це техніка зупинки внутрішнього діалогу. Коли увага розподілена на все навколо — голос у голові замовкає.",
    p7_practice_text: "Під час прогулянки злегка підігни пальці рук до долоні. Розфокусуй погляд — дивись на все одразу.",
    p7_quote: "«Утримувати увагу легше, якщо при ходьбі злегка підігнути пальці рук»",

    // Practice 8
    p8_title: "Смерть як порадник",
    p8_psych: "Екзистенціальна терапія використовує усвідомлення смерті як потужний інструмент пріоритизації. Питання «чи буду я шкодувати про це на смертному одрі?» миттєво відсікає дрібниці.",
    p8_warrior: "Смерть — єдиний мудрий порадник. Вона завжди поруч, зліва. Воїн використовує її присутність, щоб жити повністю.",
    p8_practice_text: "Коли накриває тривога — запитай себе: «Якби я помер через годину, чи став би я витрачати останню годину на це?»",
    p8_quote: "«Смерть — єдиний мудрий порадник, який є у воїна»",

    // Practice 9
    p9_title: "Неробення",
    p9_psych: "Це розрив автоматизму сприйняття. Мозок економить енергію, створюючи «ярлики» для всього. Свідоме сприйняття об'єктів «по-іншому» тренує увагу.",
    p9_warrior: "«Робення» — це коли ти бачиш камінь як камінь, бо тобі так сказали. «Неробення» — бачити камінь як набір тіней, ліній, енергії.",
    p9_practice_text: "Вибери будь-який об'єкт. Замість того щоб дивитися як зазвичай — знайди інший спосіб. Дивись на тіні замість предметів.",
    p9_quote: "«Робення робить камінь каменем. Дивитися — це робення. Бачити — неробення»",

    // Practice 10
    p10_title: "Споглядання тіней",
    p10_psych: "Це вправа на переключення уваги — базова навичка усвідомленості. Фокусування на тінях виводить з режиму автопілота.",
    p10_warrior: "Тіні — двері в неробення. Вони не «реальні» з точки зору звичайного сприйняття, тому робота з ними розхитує звичний опис світу.",
    p10_practice_text: "В сонячний день знайди місце з багатьма тінями. Дивись тільки на тіні — не на листя чи гілки.",
    p10_quote: "«Вдень дверима в неробення є тіні»",

    // Practice 11
    p11_title: "Пошук місця сили",
    p11_psych: "Це інтероцепція — усвідомлення тілесних відчуттів. Тіло знає, де йому добре, до того як це усвідомлює розум.",
    p11_warrior: "Місце сили — це точка, де твоє тіло відновлюється і набирає силу. Не «красиве» місце — а тілесно правильне.",
    p11_practice_text: "Розфокусуй погляд і повільно переміщуйся простором. Слухай відчуття в тілі — десь буде притягувати.",
    p11_quote: "«Весь фокус у тому, щоб навчитися відчувати очима»",

    // Practice 12
    p12_title: "Сновидіння",
    p12_psych: "Усвідомлені сновидіння вивчаються нейронаукою і використовуються в терапії. Здатність усвідомлювати себе уві сні розвиває навички спостереження за власним мисленням.",
    p12_warrior: "Сновидіння — це мистецтво. Перший крок — навчитися знаходити свої руки уві сні, щоб стабілізувати увагу сновидіння.",
    p12_practice_text: "Перед сном постав намір: «Сьогодні уві сні я подивлюся на свої руки». Повторюй це як мантру, засинаючи.",
    p12_quote: "«Сновидіння стає реальністю, коли людина здобуває здатність фокусувати очі на будь-якому об'єкті»",

    // Practice 13
    p13_title: "Абстрактні ядра",
    p13_psych: "Це робота з архетипами та патернами — структурами, що повторюються в міфах, історіях і життєвих ситуаціях. Юнгіанська психологія називає це колективним несвідомим.",
    p13_warrior: "Абстрактні ядра — це чисті історії духу, архетипи шляху воїна. Вони існують поза часом і повторюються в житті кожного, хто йде шляхом знання.",
    p13_practice_text: "Подивись на свою життєву ситуацію як на історію, яка вже розповідалася мільйони разів. Який це архетип? Герой у путі? Зустріч з наставником?",
    p13_quote: "«Абстрактне — це дух. Дух не має форми, але проявляється через безкінечні форми»",

    // Practice 14
    p14_title: "Зупинка світу",
    p14_psych: "Це те, що Маслоу називав «піковими переживаннями» — моменти, коли звичайне сприйняття «провалюється» і ти бачиш світ по-новому.",
    p14_warrior: "Зупинка світу — кульмінація всіх практик. Момент, коли внутрішній діалог замовкає, старий «опис» реальності руйнується.",
    p14_practice_text: "Це не те, що можна «зробити». Коли ти практикуєш все інше — в якийсь момент це станеться само.",
    p14_quote: "«Зупинити світ — це ввести в дію новий опис»",

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
    hero_subtitle: "Practices from Carlos Castaneda's books — with psychological explanation of why they work.",
    hero_cta: "Read",

    // Manifesto
    manifesto_badge: "Why this",
    manifesto_title: "The foundation of modern esotericism",
    manifesto_p1: "Castaneda's books (1968–1998) are the foundation of almost all modern esotericism. Tony Robbins, Eckhart Tolle, Joe Dispenza, new-age courses — all of this is a retelling of the same ideas in different words. Nothing fundamentally new has emerged in this field since Castaneda.",
    manifesto_p2: "The practices themselves aren't unique — they overlap with Zen Buddhism (stopping internal dialogue), Sufism (erasing ego), Stoicism (death as advisor), Mexican shamanic traditions. Castaneda assembled them into a unified system and described them in accessible language.",
    manifesto_p3: "Here each practice is explained on two levels: psychology (why it works from a scientific perspective) and the warrior's path (how Don Juan understood it). You can take just the first — it will already be useful.",

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
    p2_title: "Detachment",
    p2_psych: "This is emotional distancing — a skill from cognitive-behavioral therapy. The ability to observe your emotions, thoughts, and situations 'from outside', without merging with them. Reduces emotional reactivity and protects from manipulation.",
    p2_warrior: "Detachment is not indifference. It's strategic non-participation in dramas that devour energy. A warrior detaches from outcomes, from others' opinions, from his own emotions — to see clearly and act precisely. He's in the world, but not of the world.",
    p2_practice_text: "When an emotion overwhelms you — imagine looking at the situation from the ceiling. You're an observer, not a participant. Ask: 'What would I advise a friend in this situation?' The detached view brings clarity.",
    p2_quote: "'A warrior knows he is only a man. His only regret is that life is so short that nothing can be grasped. But for him this is not an issue. For a warrior it's a challenge'",

    // Practice 3
    p3_title: "Dropping self-importance",
    p3_psych: "This is ego-decentration — a key skill in cognitive therapy. Excessive self-focus ('what will they think of me', 'I was offended', 'I deserve better') is the main source of anxiety and depression.",
    p3_warrior: "Self-importance is the warrior's main enemy. It's not just ego — it's a constant drain of energy maintaining your self-image. A warrior cannot be offended — he has no part to hook onto.",
    p3_practice_text: "When you feel offended or irritated — catch the moment and ask: 'Is this a real problem or my ego?' Then: 'Will I remember this in a year?'",
    p3_quote: "'As long as you feel that you are the most important thing in the world, you cannot really appreciate the world around you'",

    // Practice 4
    p4_title: "Erasing personal history",
    p4_psych: "Social psychology calls this 'freedom from role expectations'. When others know your story, they keep you in a box: 'you've always been like this'. Less information about yourself = more freedom to change.",
    p4_warrior: "Personal history is a cage. Every fact about you that others know becomes an anchor holding you in an old description of yourself.",
    p4_practice_text: "Stop telling everyone about your plans and affairs. Don't explain your decisions. Create a 'fog' around yourself.",
    p4_quote: "'When no one knows you for sure, you gain the freedom to change'",

    // Practice 5
    p5_title: "Inaccessibility",
    p5_psych: "This is about healthy boundaries and burnout prevention. Constant availability exhausts the nervous system and creates dependence on external validation.",
    p5_warrior: "A warrior doesn't squeeze everything out of people and situations. He gently touches the world and leaves before exhausting the resource.",
    p5_practice_text: "Don't be online 24/7 for everyone. Set 'quiet hours'. Choose when and to whom to be available.",
    p5_quote: "'Being inaccessible means consciously avoiding exhaustion'",

    // Practice 6
    p6_title: "Breaking routines",
    p6_psych: "Neuroplasticity requires novelty. Habitual behavior patterns strengthen old neural connections and make thinking rigid. Consciously breaking routines is a way to 'shake up' the brain.",
    p6_warrior: "If you're predictable — you're prey. Routines make you vulnerable. A warrior without routines is a hunter: fluid, adaptive, elusive.",
    p6_practice_text: "Change your routes to work. Eat at different times. Rearrange furniture. Talk to new people. Not because it's fun — but because it makes you alive.",
    p6_quote: "'A hunter is free, fluid, and unpredictable'",

    // Practice 7
    p7_title: "Power walk",
    p7_psych: "Unfocused vision activates the parasympathetic nervous system and reduces anxiety. Peripheral vision is associated with 'scanning mode' (as opposed to focused 'threat mode').",
    p7_warrior: "This is a technique for stopping internal dialogue. When attention is distributed to everything around, rather than focused on thoughts — the voice in your head falls silent.",
    p7_practice_text: "On your next walk, slightly curl your fingers toward your palm (not into a fist). Unfocus your gaze — look at everything at once, without singling out individual objects.",
    p7_quote: "'It's easier to keep your attention on the grass and surroundings if you slightly curl your fingers while walking'",

    // Practice 8
    p8_title: "Death as an advisor",
    p8_psych: "Terror Management Theory shows: awareness of mortality can both paralyze and liberate — depending on how you relate to it. Existential therapy uses 'confrontation with death' as a powerful prioritization tool.",
    p8_warrior: "Death is the only wise advisor. It's always nearby, to your left. A warrior uses its presence to live fully. In the face of death, there's no room for self-pity or pettiness.",
    p8_practice_text: "When anxiety hits — ask yourself: 'If I died in an hour, would I spend the last hour on this?' Use death as a filter for everything unimportant.",
    p8_quote: "'Death is the only wise advisor a warrior has'",

    // Practice 9
    p9_title: "Not-doing",
    p9_psych: "This is breaking automatic perception. The brain saves energy by creating 'labels' for everything. Consciously perceiving objects 'differently' trains attention and breaks cognitive automatisms.",
    p9_warrior: "'Doing' is when you see a rock as a rock because you were told so. 'Not-doing' is seeing the rock as shadows, lines, energy. This is the key to stopping the world.",
    p9_practice_text: "Choose any object. Instead of looking at it as usual — find another way. Look at shadows instead of objects. At emptiness between objects. At textures instead of shapes.",
    p9_quote: "'Doing makes that rock a rock. Looking at it is doing. Seeing it is not-doing'",

    // Practice 10
    p10_title: "Shadow gazing",
    p10_psych: "This is an attention-shifting exercise — a basic mindfulness skill. Focusing on shadows instead of objects requires conscious effort, which takes you out of autopilot mode.",
    p10_warrior: "Shadows are doors to not-doing. They're not 'real' from the perspective of ordinary perception, which is why working with them shakes up the habitual description of the world.",
    p10_practice_text: "On a sunny day, find a place with many shadows. Look only at the shadows — not at the leaves or branches. Try to perceive shadows as more real than the objects casting them.",
    p10_quote: "'During the day, shadows are the doors to not-doing'",

    // Practice 11
    p11_title: "Finding a place of power",
    p11_psych: "This is interoception — awareness of bodily sensations. The body knows where it feels good before the mind realizes it. The practice develops body awareness and creates a safe space for nervous system regulation.",
    p11_warrior: "A place of power is a point where your body recovers and gains power. Not a 'beautiful' place — but a bodily correct one. A warrior feels such places with his body, not his mind.",
    p11_practice_text: "Unfocus your gaze and slowly move through the space. Listen to sensations in your body — somewhere will attract, somewhere will repel. Find the spot where your body feels good.",
    p11_quote: "'The whole trick is to learn to feel with your eyes'",

    // Practice 12
    p12_title: "Dreaming",
    p12_psych: "Lucid dreaming is studied by neuroscience and used in therapy (especially for nightmares and PTSD). The ability to be aware in dreams develops metacognitive skills that transfer to waking life.",
    p12_warrior: "Dreaming is an art. The first step is to learn to find your hands in a dream to stabilize the dreaming attention. When this works — a whole world opens up for exploration.",
    p12_practice_text: "Before sleep, set an intention: 'Tonight in my dream, I will look at my hands.' Repeat it like a mantra as you fall asleep. During the day, periodically look at your hands and ask: 'Is this a dream?'",
    p12_quote: "'Dreaming becomes reality when a person acquires the ability to focus their eyes on any object'",

    // Practice 13
    p13_title: "Abstract cores",
    p13_psych: "This is working with archetypes and patterns — structures that repeat in myths, stories, and life situations. Jungian psychology calls this the collective unconscious. Recognizing these patterns helps understand deep behavioral motives.",
    p13_warrior: "Abstract cores are pure stories of the spirit, archetypes of the warrior's path. They exist outside time and repeat in the life of everyone walking the path of knowledge. A warrior learns to recognize these cores in his life.",
    p13_practice_text: "Look at your life situation as a story that has been told millions of times. What archetype is it? The hero's journey? Meeting a mentor? A trial? Step back from the personal and see the structure.",
    p13_quote: "'The abstract is spirit. Spirit has no form but manifests through infinite forms'",

    // Practice 14
    p14_title: "Stopping the world",
    p14_psych: "This is what Maslow called peak experience — moments when ordinary perception 'collapses' and you see the world anew. Meditative traditions describe similar states (kensho, satori).",
    p14_warrior: "Stopping the world is the culmination of all practices. The moment when internal dialogue falls silent, the old 'description' of reality collapses, and you perceive the world directly.",
    p14_practice_text: "This is not something you can 'do'. When you practice everything else — erase history, remove self-importance, walk the power walk, gaze at shadows — at some point it will happen on its own.",
    p14_quote: "'Stopping the world is putting a new description into action'",

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
