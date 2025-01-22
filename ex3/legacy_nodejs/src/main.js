const { processStringData } = require('./dataProcessor');
const { manipulateNumbers } = require('./numberManipulator');
const stringProcessor = require('./stringProcessor');

async function calculate(inputArray) {
    let sum = 0;
    const utils = require('./utils');

    return new Promise((resolve, reject) => {
        processStringData(inputArray)
            .then(data => {
                data.forEach(function(str) {
                    if(!global.__numberCache.has(str)) {
                        let digits = utils.extract(str);
                        global.__numberCache.set(str, digits);
                    }
                    
                    let numbers = global.__numberCache.get(str);
                    let result = manipulateNumbers.firstLast(numbers);
                    let combinedNum = parseInt(result.first.toString() + result.last.toString());
                    sum += combinedNum;
                });
                
                resolve(sum);
            })
            .catch(err => {
                console.error('Failed to process strings:', err);
                reject(err);
            });
    });
}

const testStrings = [
    "1abc2",
    "pqr3stu8vwx",
    "a1b2c3d4e5f"
]; // expected: 65

const testStrings2 = [
    "3eadg",
    "dd1fgh13a",
    "sD2h2fR4g"
]; // expected: 40


calculate(testStrings)
    .then(result => console.log('Result:', result))
    .catch(err => console.error('Error:', err));

calculate(testStrings2)
    .then(result => console.log('Result:', result))
    .catch(err => console.error('Error:', err));
