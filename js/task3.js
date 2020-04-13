function bottleGame() {
    console.log("Завдання 3");
    console.log("Обманчиво простая и черезвычайно увлекательная");
    console.log("гра скільки лишилось пляшок");

    let count;
    do {
        let ans = prompt("Скільки бутилок на стіні ?");
        if(ans === null){
            return;
        }
        count = parseInt(ans,10);
        if(!Number.isInteger(count) || count < 0){
            alert("Неправильна кількість бутилок !");
            count = NaN;
        }
    } while (!Number.isInteger(count));
    game(count);
}
function game(count) {
    for(let i = count; i > 1; i--){
        console.log(i + ' ' + getBottleWordInCorrectForm(i) + " стоїть на стіні, одна упала і залишилось " + (i - 1));
    }
    console.log("1 пляшка стоїть на стіні, одна упала і залишилось жодної");
}

function getBottleWordInCorrectForm(bottleCount) {
    if(bottleCount === 1) {
        return "пляшка"
    } else if(bottleCount < 5){
        return "пляшки"
    } else {
        return "пляшок"
    }
}
