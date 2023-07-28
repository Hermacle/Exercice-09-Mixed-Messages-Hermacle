

function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

function format(array) {
    const infoMessage = array.join(' ');
    return infoMessage;
}

//object that stores arrays 
const mixedElements = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    temperature: ['30', '24', '36', '20', '40', '29', '31']
};

//array that stores randomly choosed element
let mixedMessage = [];


for(let i in mixedElements) {
    let index = randomNumber(mixedElements[i].length);

    switch(i) {
        case 'days':
            mixedMessage.push(`Today is ${mixedElements[i][index]}`);
            break;
        case 'temperature':
            mixedMessage.push(`and the temperature is ${mixedElements[i][index]} ° Celsius`);
            break;
        default:
           console.log('Sorry! There is no Message today');
    }
}
console.log(format(mixedMessage));

