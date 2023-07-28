

function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

function format(array) {
    const infoMessage = array.join(' ');
    return infoMessage;
}

//object that stores arrays 
const mixedElements = {
    temperature: ['30', '24', '36', '20', '40', '29', '31'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

