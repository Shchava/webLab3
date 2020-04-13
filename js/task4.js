console.log("Завдання 4");
var arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];
console.log("1) сума всіх значень value у яких тип ‘USD’ та value менше за 100 : ");
console.log(sumAllUSDLessThan(arr,100));
console.log("2) масив всіх об’єктів з типом ‘EUR’ та подвоїним значенням value для кожного об’єкту : ");
console.log(getEUREntriesAndDoubleValue(arr));


function sumAllUSDLessThan(array, value) {
    return array
        .filter(entry => entry.type === 'USD' && entry.value < value)
        .map(entry => entry.value)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
}

function getEUREntriesAndDoubleValue(array) {
    return array
        .filter(entry => entry.type === 'EUR')
        .map(entry => {
            let doubled = Object.assign({}, entry);
            doubled.value *= 2;
            return doubled;
        })
}