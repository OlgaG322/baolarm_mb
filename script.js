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

// ... ваши массивы phrases, failButtonLabels и другие переменные ...

let spinnerHours = 23;
let spinnerMinutes = 0;
let alarmTime = null;
let sleepStart = null;
let isSleeping = false;

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initButtons();
    document.getElementById('comment').textContent = getRandomPhrase('general');
});

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

    // Открытие попапа и показ случайной фразы
    document.getElementById('setAlarm').addEventListener('click', () => {
        if (!alarmTime) {
            const phraseBanner = document.getElementById('randomPhraseBanner');
            phraseBanner.textContent = sarcasticButtonLabels[Math.floor(Math.random() * sarcasticButtonLabels.length)];
            phraseBanner.style.display = 'block';
            updateSpinnerDisplay();
            document.getElementById('timePopup').style.display = 'flex';
        }
    });

    // Подтверждение времени
    document.getElementById('popupOkBtn').addEventListener('click', () => {
        const hours = spinnerHours.toString().padStart(2, '0');
        const minutes = spinnerMinutes.toString().padStart(2, '0');
        alarmTime = `${hours}:${minutes}`;
        document.getElementById('alarmPhrase').textContent = `Дедлайн: ${alarmTime}`;
        document.getElementById('setAlarm').classList.remove('default');
        document.getElementById('setAlarm').style.background = 'var(--accent-color)';
        document.getElementById('timePopup').style.display = 'none';
        document.getElementById('randomPhraseBanner').style.display = 'none';
        document.getElementById('sleepBtn').disabled = false;
        document.getElementById('wakeBtn').disabled = true;
    });

    // ... остальные обработчики ("Иду спать!", "Я проснулся!", закрытие попапа и т.д.) ...
}

function updateSpinnerDisplay() {
    document.getElementById('hoursVal').textContent = spinnerHours.toString().padStart(2, '0');
    document.getElementById('minutesVal').textContent = spinnerMinutes.toString().padStart(2, '0');
}

function getRandomPhrase(type) {
    return phrases[type][Math.floor(Math.random() * phrases[type].length)];
}

// ... Остальные функции (initClock, playSound, setSleepStatus и т.д.) ...
