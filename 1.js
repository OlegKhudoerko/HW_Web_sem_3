function calc(number) {

    result = ((9 / 5) * number + 32).toFixed(1);
    alert(`Цельсий = ${number}°C, Фаренгейт = ${result}°F`);
    return result;
}

const number = Number.parseInt(prompt('Введите значение температуры!'));
calc(number);
