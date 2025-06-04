const phrases = {
    general: [
        "Конечно, ЭТОТ ролик точно будет последним. Как и предыдущие 47",
        "Да, давай досмотрим сезон. Сон переоценен, а мешки под глазами — это модно",
        "«Высплюсь на выходных» — план человека, который не понимает, как работает организм",
        "Ага, завтра точно ляжешь раньше. Как и позавчера обещал, и позапозавчера...",
        "Ты экономишь время ночью, чтобы потратить его на зевоту днем. Эффективно!",
        "Зачем спать 8 часов, если можно спать 4 и чувствовать себя на все 100... процентов отвратительно",
        "Поздравляю! Ты снова доказал, что можешь превратить простую задачу «лечь спать» в квест на выживание",
        "Твоя способность находить «важные» дела в 2 ночи достойна Нобелевки по самосаботажу",
        "Не сдавайся! У тебя получится наладить режим. Может быть. Когда-нибудь.",
        "Тебе кажется, что ты обманываешь время. Спойлер: время побеждает",
        "Попробуй удивить меня — засни раньше полуночи. Я уже 200 лет таких чудес не видел",
        "Попробуем сегодня лечь до полуночи? Я знаю, звучит безумно...",
        "Твой баобаб верит в тебя! Ну... почти верит. Иногда.",
        "Браво! Ты мастерски превратил базовую потребность человека в олимпийский вид спорта по самоистязанию",
        "Твоя суперсила — делать из 8-часового сна 4-часовую пытку. Впечатляюще бесполезно!",
        "Потрясающе! Ты каждую ночь изобретаешь новые способы издеваться над собой",
        "Твой мозг: «Хочу спать». Ты: «Нет, давай листать мемы». Призрак логики плачет где-то в углу",
        "Великолепно! Ты снова доказал, что можешь быть злейшим врагом самому себе без всяких усилий",
        "Твоя логика: «Завтра важный день, поэтому лягу в 3 ночи». Премию Дарвина в студию!",
        "Поздравляю, ты превратил сон из удовольствия в квест «найди 4 часа между прокрастинацией и будильником»",
        "Твоя кровать думает, что ты съехал с квартиры. Может, пора познакомиться заново?",
        "Я выживаю в пустыне без воды лучше, чем ты — без нормального сна",
        "Мои корни уходят глубже в землю, чем твои отговорки — в реальность",
        "Ты живешь так, будто у тебя запасная жизнь в шкафу на случай, если эту испортишь недосыпом",
        "Твоя стратегия «проживу на кофеине» работает примерно как зонтик в торнадо",
        "Ты копишь усталость как другие финансовую подушку. Так себе стратегия",
        "Ты живешь как персонаж экшена — будто каждая ночь может стать последней, поэтому спать нельзя",
        "Ты поступаешь с режимом сна как камикадзе — красиво, но с предсказуемым финалом",
        "Ты относишься к своему здоровью как к бесконечному ресурсу в видеоигре. Новость: читы не работают",
        "Твоя жизненная философия: «Зачем спать сегодня, если можно страдать завтра?»",
        "Ты словно пытаешься доказать вселенной, что человек может эволюционировать в ночное существо. Эксперимент провален",
        "Похоже, твоя жизненная миссия — превратить каждое утро в экзистенциальный кризис. Удачного недосыпа!",
        "Ты коллекционируешь бессонные ночи как философ — ищешь смысл там, где его нет",
        "Твоя стратегия выживания: «Сон для слабых, кофе — для сильных». Крепкая позиция... до первого нервного срыва",
        "Только в параллельной реальности, где время течет по-другому, 2 часа ночи равны «еще рано»",
        "Твоя душа вечна, а вот нервная система — нет",
        "Наблюдаю философский парадокс: ты хочешь жить полной жизнью, но методично сливаешь свою энергию",
        "Твое тело — храм. Жаль, что ты его используешь как дешевую круглосуточную забегаловку",
        "Говорят, что безвыходных ситуаций не бывает, но твой режим сна создает новые проблемы быстрее, чем решаются старые",
        "Ты живешь так, будто планируешь стать совой в следующей жизни",
        "Анонс блокбастера «завтра начну жить правильно» слышен от тебя уже который год. Когда премьера?",
        "Твоя жизнь как постмодернистское искусство: никто не понимает, что происходит, но как-то неприятно на это смотреть",
        "Твой режим сна — это перформанс в стиле дадаизма: бессмысленно, хаотично, но ты называешь это искусством",
        "Ты создаешь авангардную инсталляцию под названием «Человек против подушки». Зрители в ужасе",
        "Твоя жизнь снова как сюрреалистическая картина: время течет странно, реальность искажена, жизненные цели почти растаяли",
        "Поздравляю! Ты мастер абстрактного экспрессионизма в области саморазрушения",
        "Твой график сна — чистый кубизм: все разломано на части и собрано неправильно",
        "Ты практикуешь минимализм в сне и максимализм в прокрастинации. Противоречивая концепция",
        "И снова утро в стиле импрессионистов: размытые контуры, неясные очертания, все в тумане",
        "Абстрактная композиция «Мой режим дня» — провокационная работа о саморазрушении через недосып. Критики в растерянности",
        "Твоя концептуальная инсталляция «Зомби на работе» получает премию за реализм",
        "Перед вами автопортрет в состоянии хронического недосыпа. Масло, кофе, отчаяние",
        "Серия работ «Недоспанные будни» — исследование границ человеческой глупости",
        "Инсталляция «Кровать как декорация» — ироничная работа о предметах, потерявших свое назначение",
        "Ты создал неоклассическую трагедию в трех актах: «Не хочу спать», «Хочу спать», «Поздно спать»",
        "Ты практикуешь конструктивизм наоборот: разрушаешь структуру сна для создания хаоса"
    ],
    bad: [
        "Доброе утро, зомби! Как спалось?",
        "Удивительно, как ты каждый день удивляешься, что устал",
        "Кофе не поможет. Но можешь попробовать — мне до сих пор весело на это смотреть",
        "Посмотри на себя — ты почти справился! Всего-то проспал 3 будильника",
        "Твоя энергия в течение дня достойна кисти абстракциониста: никто не понимает, что это должно означать"
    ],
    good: [
        "Ого! Целых 8 часов сна? Ты случайно не перепутал себя с нормальным человеком?",
        "Невероятно! Твои глаза не похожи на два кратера от метеоритов. Чудеса случаются!",
        "Ты выглядишь почти как человек, который выспался. Почти.",
        "Поздравляю! Ты снова доказал, что можешь спать как нормальный человек. Почти.",
        "Ты сегодня выглядишь почти как человек, а не как зомби. Почти."
    ]
};

const sarcasticButtonLabels = [
    "В это время я притворюсь, что ложусь спать",
    "Мой план: уснуть хотя бы к этому часу",
    "Мечтаю заснуть к этому времени",
    "Я обещаю себе лечь спать в это время (ха-ха)",
    "Поставить несбыточный дедлайн для сна",
    "Установить время для очередной неудачной попытки уснуть",
    "Моя очередная попытка лечь пораньше",
    "Буду в кровати... ну, типа",
    "Я укажу время, а организм всё равно проигнорирует",
    "Планирую заснуть к этому времени (но это не точно)",
    "В это время я, возможно, уже буду считать овец",
    "Попробую удивить себя и лечь спать вовремя",
    "Установить время для вечерних самообманов",
    "Поставить время, когда я должен был бы спать",
    "Установить время для очередного провала сна"
];

let sleepStart = null;
let alarmTime = null;
let spinnerHours = 23;
let spinnerMinutes = 0;
let isSleeping = false;
let failTimeout = null;
let isBaobabShown = false;

const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');

function updateSpinnerDisplay() {
    document.getElementById('hoursVal').textContent = spinnerHours.toString().padStart(2, '0');
    document.getElementById('minutesVal').textContent = spinnerMinutes.toString().padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    requestNotifications();
    setInterval(sendTestPush, 5 * 60 * 1000);
    document.getElementById('comment').textContent = getRandomPhrase('general');
});

function initClock() {
    setInterval(() => {
        document.getElementById('currentTime').textContent =
            new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'});
    }, 1000);
}

function initButtons() {
    document.getElementById('hoursUp').onclick = () => {
        spinnerHours = (spinnerHours + 1) % 24;
        updateSpinnerDisplay();
    };
    document.getElementById('hoursDown').onclick = () => {
        spinnerHours = (spinnerHours + 23) % 24;
        updateSpinnerDisplay();
    };
    document.getElementById('minutesUp').onclick = () => {
        spinnerMinutes = (spinnerMinutes + 5) % 60;
        updateSpinnerDisplay();
    };
    document.getElementById('minutesDown').onclick = () => {
        spinnerMinutes = (spinnerMinutes + 55) % 60;
        updateSpinnerDisplay();
    };

    document.getElementById('setAlarm').addEventListener('click', () => {
        if (!alarmTime) {
            // Показываем случайную фразу сверху
            const phraseBanner = document.getElementById('randomPhraseBanner');
            phraseBanner.textContent = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
            phraseBanner.style.display = 'block';

            updateSpinnerDisplay();
            document.getElementById('timePopup').style.display = 'flex';
        }
    });

    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = spinnerHours.toString().padStart(2, '0');
        const minutes = spinnerMinutes.toString().padStart(2, '0');
        alarmTime = `${hours}:${minutes}`;
        document.getElementById('alarmPhrase').textContent = `Дедлайн: ${alarmTime}`;
        document.getElementById('alarmPhrase').style.textAlign = 'center';
        document.getElementById('setAlarm').classList.remove('default');
        document.getElementById('setAlarm').style.background = 'var(--accent-color)';
        document.getElementById('timePopup').style.display = 'none';
        document.getElementById('randomPhraseBanner').style.display = 'none';
        document.getElementById('sleepBtn').disabled = false;
        document.getElementById('wakeBtn').disabled = true;
        resetWakeButton();
        playSound(generalSound);
        sendPush('Время установлено!', `Вы поставили цель лечь в ${alarmTime}`);
    });

    document.getElementById('sleepBtn').addEventListener('click', () => {
        if (!alarmTime) return;
        sleepStart = new Date();
        setRandomButtonLabel();
        resetWakeButton();
        setSleepStatus(true);
        document.getElementById('comment').textContent = getRandomPhrase('general');
        document.getElementById('sleepBtn').disabled = true;
        document.getElementById('wakeBtn').disabled = false;
    });

    document.getElementById('wakeBtn').addEventListener('click', () => {
        if (!sleepStart) return;
        const sleepDuration = new Date() - sleepStart;
        const hours = Math.floor(sleepDuration / 3600000);
        const minutes = Math.floor((sleepDuration % 3600000) / 60000);
        const btn = document.getElementById('wakeBtn');
        btn.textContent = `Спал: ${hours}ч ${minutes}м`;
        btn.classList.add('awake');
        btn.style.background = "var(--secondary-color)";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.cursor = "default";
        btn.style.pointerEvents = "none";
        btn.onmouseenter = function() { btn.style.background = "#1a2c54"; };
        btn.onmouseleave = function() { btn.style.background = "var(--secondary-color)"; };
        sleepStart = null;
        playSound(alarmSound);
        sendPush('Проснулся!', `Ты спал ${hours}ч ${minutes}м`);
        setSleepStatus(false);
        const commentType = (hours + minutes/60) >= 7 ? 'good' : 'bad';
        document.getElementById('comment').textContent = getRandomPhrase(commentType);
    });

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('timePopup')) {
            document.getElementById('timePopup').style.display = 'none';
            document.getElementById('randomPhraseBanner').style.display = 'none';
        }
    });
}

function setRandomButtonLabel() {
    const phraseSpan = document.getElementById('alarmPhrase');
    phraseSpan.textContent = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
    phraseSpan.style.textAlign = 'center';
}

function resetWakeButton() {
    const btn = document.getElementById('wakeBtn');
    btn.textContent = 'Я проснулся!';
    btn.classList.remove('awake');
    btn.style.background = "#fff";
    btn.style.color = "#1e3c72";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.pointerEvents = "auto";
    btn.onmouseenter = null;
    btn.onmouseleave = null;
}

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

function playSound(audio) {
    try {
        audio.currentTime = 0;
        audio.play();
    } catch(e) {}
}

function requestNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function sendPush(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon: 'icon-512.png' });
    }
}

function sendTestPush() {
    sendPush('Тестовый push', 'Это тестовое уведомление от Баоларма');
}

function setSleepStatus(isSleeping) {
    const el = document.getElementById('sleepStatus');
    if (isSleeping) {
        el.textContent = 'Сплю';
        el.classList.remove('awake');
    } else {
        el.textContent = 'Не сплю';
        el.classList.add('awake');
    }
}
