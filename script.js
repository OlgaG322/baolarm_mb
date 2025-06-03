const phrases = {
    general: [
        // ... ваш список общих фраз ...
    ],
    bad: [
        // ... ваш список плохих фраз ...
    ],
    good: [
        // ... ваш список хороших фраз ...
    ]
};

const sarcasticButtonLabels = [
    // ... ваш список саркастических фраз ...
];

const failButtonLabels = [
    "Дедлайн провален! Баобаб негодует!",
    "Сон ушёл, баобаб пришёл.",
    "Ты снова не лег вовремя — поздравляю!",
    "Баобаб: «Я разочарован!»",
    "Миссия «лечь вовремя» провалена."
];

// Переменные состояния
let sleepStart = null;
let alarmTime = null;
let spinnerHours = 23;
let spinnerMinutes = 0;
let isSleeping = false;
let failTimeout = null;

// Звуки
const generalSound = new Audio('notification.mp3');
const alarmSound = new Audio('alarm.mp3');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    setDefaultAlarmButton();
    setInterval(checkAlarmFail, 1000);
});

// Функции управления кнопкой
function setDefaultAlarmButton() {
    const btn = document.getElementById('setAlarm');
    btn.classList.add('default');
    btn.style.background = 'var(--primary-color)';
    document.getElementById('alarmPhrase').textContent = 
        "Когда спать собираешься?\nНажми и выбери время";
}

function setAlarmButtonDeadline(time) {
    const btn = document.getElementById('setAlarm');
    btn.classList.remove('default');
    btn.style.background = 'var(--accent-color)';
    document.getElementById('alarmPhrase').textContent = `Дедлайн: ${time}`;
}

function setAlarmButtonFail() {
    const btn = document.getElementById('setAlarm');
    btn.classList.remove('default');
    btn.style.background = 'var(--accent-color)';
    document.getElementById('alarmPhrase').textContent = 
        failButtonLabels[Math.floor(Math.random() * failButtonLabels.length)];
}

// Таймеры и проверки
function setFailTimeout() {
    if (failTimeout) clearTimeout(failTimeout);
    failTimeout = setTimeout(() => {
        setDefaultAlarmButton();
    }, 5 * 60 * 60 * 1000);
}

function checkAlarmFail() {
    if (!alarmTime || isSleeping) return;
    
    const now = new Date();
    const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date();
    alarmDate.setHours(alarmHours, alarmMinutes, 0, 0);

    if (now >= alarmDate) {
        setAlarmButtonFail();
        showFailBanner();
        alarmTime = null;
        setFailTimeout();
    }
}

// Баннер провала
function showFailBanner() {
    const banner = document.getElementById('failBanner');
    banner.textContent = failButtonLabels[Math.floor(Math.random() * failButtonLabels.length)];
    banner.classList.add('active');
    new Audio('notification.mp3').play();

    setTimeout(() => {
        banner.classList.remove('active');
    }, 10000);
}

function hideFailBanner() {
    const banner = document.getElementById('failBanner');
    banner.classList.remove('active');
}

// Основные функции
function initClock() {
    setInterval(() => {
        document.getElementById('currentTime').textContent = 
            new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
    }, 1000);
}

function initButtons() {
    // Спиннер времени
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

    // Попап выбора времени
    document.getElementById('setAlarm').addEventListener('click', () => {
        if (!alarmTime) {
            updateSpinnerDisplay();
            document.getElementById('timePopup').style.display = 'flex';
        }
    });

    // Подтверждение времени
    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = spinnerHours.toString().padStart(2, '0');
        const minutes = spinnerMinutes.toString().padStart(2, '0');
        alarmTime = `${hours}:${minutes}`;
        setAlarmButtonDeadline(alarmTime);
        document.getElementById('timePopup').style.display = 'none';
        hideFailBanner();
        resetWakeButton();
        playSound(generalSound);
    });

    // Кнопки сна/пробуждения
    document.getElementById('sleepBtn').addEventListener('click', () => {
        if (!alarmTime) return;
        sleepStart = new Date();
        isSleeping = true;
        setRandomButtonLabel();
        resetWakeButton();
        document.getElementById('comment').textContent = getRandomPhrase('general');
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
        btn.style.pointerEvents = "none";
        
        sleepStart = null;
        isSleeping = false;
        playSound(alarmSound);
        
        const commentType = (hours + minutes/60) >= 7 ? 'good' : 'bad';
        document.getElementById('comment').textContent = getRandomPhrase(commentType);
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
