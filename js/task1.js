let countries = ["Україна", "США", "Польша", "Росія", "Німеччина", "Австралія", "Канада"];
let childrenCount = [0, 1, 2, 3, 4, 5, 6, 20];
let names = ["Діана", "Ірина", "Катерина", "Юлія", "Галина", "Олександр", "Микола", "Тарас", "Станіслав"];
let professions = ["Програміст", "Вчитель", "Лікар", "Прибиральник", "Пожарник", "Музикант"];

let variantsPerTime = 3;

function predictionGame() {
    let selected = false;
    let result = {};
    do {
        result.couple = askVariant("З ким ви одружитесь ?", names, variantsPerTime);
        if(result.couple === undefined){
            return;
        }
        result.childrenCount = askVariant("Скільки дітей у вас буде ?", childrenCount, variantsPerTime);
        if(result.childrenCount === undefined){
            return;
        }
        selected = confirm("Ви укладите шлюб з " + result.couple + " та у вас буде " + result.childrenCount + " дітей ?");
    } while (!selected);
    do {
        result.country = askVariant("У яку країну ви переїдете ?", countries, variantsPerTime);
        if(result.country === undefined){
            return;
        }
        result.profession = askVariant("На яку посаду ?", professions, variantsPerTime);
        if(result.profession === undefined){
            return;
        }
        selected = confirm("Ви переїдете у " + result.country + " на посаду " + result.profession + " ?");
    } while (!selected);
    alert("Ви укладите шлюб з " + result.couple + " та у вас буде " + result.childrenCount + " дітей " +"Ви переїдете у " + result.country + " на посаду " + result.profession + " !" )
}

function askVariant(question, array, variantsCount) {
    let message = question + "\n";
    shuffle(array);
    for (let i = 0; i < variantsCount; i++) {
        message += (i + 1) + ") " + array[i] + "\n";
    }
    message += "введіть цифру яка відповідає вибраному варіанту:";
    let ans = prompt(message);
    if(ans === null){
        return;
    }
    ans = parseInt(ans,10);
    if (Number.isInteger(ans) && ans <= variantsCount && ans > 0) {
        return array[ans - 1];
    } else {
        alert("Неправильна відповідь");
        return askVariant(question, array, variantsCount);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}