// Инициализация телеграм
const tg = window.Telegram.WebApp;
// Инициализация кнопки отправки данных
const btn = document.getElementById("btn_link")

// Функция взаимодействие по клику
btn.addEventListener("click", ()=>{

    // Инициализация полей входных данных
    let age = document.getElementById("age").value;
    let sex = document.querySelector(".sex").value;
    let goal = document.querySelector(".goal").value;
    let preferences = document.querySelector(".preferences").value;

    // Инициализация поля ошибки
    const error = document.getElementById('error')

    // Условние проверки поля ввода возраста
    if (age > 120 || age <= 0 || age == null){
        error.innerText = 'Ошибка в возрасте'
        return;
    }

    // Отчищение поля ошибки при корректных входных данных
    error.innerText = ''

    // Создание объекта со данных
    let data = {
        age: age,
        sex: sex,
        goal: goal,
        preferences: preferences
    }
    
    // Отправка данных телеграм боту
    tg.sendData(JSON.stringify(data))

    // Закрытие веб-приложения на стороне бота
    tg.close();
});



