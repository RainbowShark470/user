let username = prompt('введите имя: ');

if(username.length < 3) {
    prompt('Вы некорректно ввели имя, попробуйте еще раз')
}

alert('первый этап пройден!')

let age = +prompt('введите ваш возраст: ');

if (age < 60 || age > 14) {
    prompt('вы должны быть младше 60 и старше 14!')
} else if (age > 60 && age > 14) {
    alert('в точку!')
}

alert('второй этап пройден!')

let student = prompt('вы студент?')

if (student == 'yes' || student == 'да') {
    alert('разрешено в доступе')
} else {
    alert('отказано в доступе')
}
    document.getElementById('username').textContent = 'Имя: ' + username
    document.getElementById('age').textContent = 'Возраст: ' + age
    document.getElementById('student').textContent = 'Статус: ' + student