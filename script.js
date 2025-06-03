const failButtonLabels = [
    "Дедлайн провален! Баобаб негодует!",
    "Сон ушёл, баобаб пришёл.",
    "Ты снова не лег вовремя — поздравляю!",
    "Баобаб: «Я разочарован!»",
    "Миссия «лечь вовремя» провалена.",
    "Баобаб смотрит на тебя с укором.",
    "Снова не успел — снова баобаб!",
    "Твоя кровать скучает. Баобаб — нет.",
    "Пора признать: ты — ночной прокрастинатор.",
    "Баобаб: «Ну ты и фрукт!»"
];

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
        "Потрясающе! Ты каждую ночь изобретаешь новые способы издеваться над единственным человеком, который тебе дорог — над собой",
        "Твой мозг: «Хочу спать». Ты: «Нет, давай листать мемы». Призрак логики плачет где-то в углу",
        "Великолепно! Ты снова доказал, что можешь быть злейшим врагом самому себе без всяких усилий",
        "Твоя логика: «Завтра важный день, поэтому лягу в 3 ночи». Премию Дарвина в студию!",
        "Поздравляю, ты превратил сон из удовольствия в квест «найди 4 часа между прокрастинацией и будильником»"
    ],
    bad: [
        "Доброе утро, зомби! Как спалось целых 4 часа?",
        "Удивительно, как ты каждый день удивляешься, что устал",
        "Кофе не поможет. Но можешь попробовать — мне весело смотреть",
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
    "Когда спать собираешься?\nНажми и выбери время"
];

let sleepStart = null;
let alarmTime = null;
let spinnerHours = 23;
let spinnerMinutes = 0;
let isSleeping = false;
let failTimeout = null;
let isBaobabShown = false;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    setDefaultAlarmButton();
    setInterval(checkAlarmFail, 1000);
    document.getElementById('comment').textContent = getRandomPhrase('general');
    // Скрыть баобаб при загрузке
    document.getElementById('baobabOverlay').style.top = '-100%';
    document.getElementById('baobabOverlay').style.display = 'flex';
});

// Кнопка по умолчанию
function setDefaultAlarmButton() {
    const btn = document.getElementById('setAlarm');
    btn.classList.add('default');
    btn.style.background = 'var(--primary-color)';
    document.getElementById('alarmPhrase').textContent =
        "Когда спать собираешься?\nНажми и выбери время";
    document.getElementById('sleepBtn').disabled = true;
    document.getElementById('wakeBtn').disabled = true;
}

// После выбора времени
function setAlarmButtonDeadline(time) {
    const btn = document.getElementById('setAlarm');
    btn.classList.remove('default');
    btn.style.background = 'var(--accent-color)';
    document.getElementById('alarmPhrase').textContent = `Дедлайн: ${time}`;
    document.getElementById('sleepBtn').disabled = false;
    document.getElementById('wakeBtn').disabled = true;
}

// После провала дедлайна
function setAlarmButtonFail() {
    const btn = document.getElementById('setAlarm');
    btn.classList.remove('default');
    btn.style.background = 'var(--accent-color)';
    document.getElementById('alarmPhrase').textContent =
        failButtonLabels[Math.floor(Math.random() * failButtonLabels.length)];
    document.getElementById('sleepBtn').disabled = true;
    document.getElementById('wakeBtn').disabled = true;
}

// Таймер на 5 часов
function setFailTimeout() {
    if (failTimeout) clearTimeout(failTimeout);
    failTimeout = setTimeout(() => {
        setDefaultAlarmButton();
    }, 5 * 60 * 60 * 1000);
}

// Показываем баннер
function showFailBanner() {
    const banner = document.getElementById('failBanner');
    banner.textContent = failButtonLabels[Math.floor(Math.random() * failButtonLabels.length)];
    banner.classList.add('active');
    new Audio('notification.mp3').play();
    if (banner._timeout) clearTimeout(banner._timeout);
    banner._timeout = setTimeout(() => {
        banner.classList.remove('active');
        banner._timeout = null;
    }, 10000);
}

// Скрываем баннер
function hideFailBanner() {
    const banner = document.getElementById('failBanner');
    if (banner._timeout) clearTimeout(banner._timeout);
    banner.classList.remove('active');
    banner.textContent = '';
}

// Проверка дедлайна
function checkAlarmFail() {
    if (!alarmTime || isSleeping) return;
    const now = new Date();
    const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date();
    alarmDate.setHours(alarmHours, alarmMinutes, 0, 0);

    if (now >= alarmDate && !isBaobabShown) {
        isBaobabShown = true;
        setAlarmButtonFail();
        showFailBanner();
        playBaobabAnimation();
        alarmTime = null;
        setFailTimeout();
    }
}

// Анимация баобаба
function playBaobabAnimation() {
    const baobabOverlay = document.getElementById('baobabOverlay');
    baobabOverlay.classList.add('active');
    setTimeout(() => {
        baobabOverlay.classList.remove('active');
        isBaobabShown = false;
    }, 3000);
}

// Кнопки и спиннер
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

    // Открыть попап выбора времени
    document.getElementById('setAlarm').addEventListener('click', () => {
        if (!alarmTime) {
            updateSpinnerDisplay();
            document.getElementById('timePopup').style.display = 'flex';
        }
    });

    // Подтвердить время
    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = spinnerHours.toString().padStart(2, '0');
        const minutes = spinnerMinutes.toString().padStart(2, '0');
        alarmTime = `${hours}:${minutes}`;
        setAlarmButtonDeadline(alarmTime);
        document.getElementById('timePopup').style.display = 'none';
        hideFailBanner();
        resetWakeButton();
        playSound(new Audio('notification.mp3'));
        document.getElementById('comment').textContent = getRandomPhrase('general');
    });

    // "Иду спать!"
    document.getElementById('sleepBtn').addEventListener('click', () => {
        if (!alarmTime) return;
        sleepStart = new Date();
        isSleeping = true;
        setRandomButtonLabel();
        resetWakeButton();
        document.getElementById('comment').textContent = getRandomPhrase('general');
        document.getElementById('sleepBtn').disabled = true;
        document.getElementById('wakeBtn').disabled = false;
    });

    // "Я проснулся!"
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
        btn.style.pointerEvents = "none";

        sleepStart = null;
        isSleeping = false;
        playSound(new Audio('alarm.mp3'));

        const commentType = (hours + minutes/60) >= 7 ? 'good' : 'bad';
        document.getElementById('comment').textContent = getRandomPhrase(commentType);
        setDefaultAlarmButton();
    });

    // Закрытие попапа
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('timePopup')) {
            document.getElementById('timePopup').style.display = 'none';
        }
    });
}

// Вспомогательные функции
function updateSpinnerDisplay() {
    document.getElementById('hoursVal').textContent =
        spinnerHours.toString().padStart(2, '0');
    document.getElementById('minutesVal').textContent =
        spinnerMinutes.toString().padStart(2, '0');
}

function setRandomButtonLabel() {
    const phrase = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
    document.getElementById('alarmPhrase').textContent = phrase;
}

function resetWakeButton() {
    const btn = document.getElementById('wakeBtn');
    btn.textContent = 'Я проснулся!';
    btn.classList.remove('awake');
    btn.style.background = "#fff";
    btn.style.color = "#1e3c72";
    btn.style.pointerEvents = "auto";
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

function initClock() {
    setInterval(() => {
        document.getElementById('currentTime').textContent =
            new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
    }, 1000);
}
