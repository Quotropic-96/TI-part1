// Exercise 3
const isDivisor = (num, divisor) => {
    if (num%divisor === 0) {
        return true;
    }
    return false;
}

// Exercise 4
const capitalizeFirstLetterOfEachWord = (arrayOfWords) => {
    return arrayOfWords.map(word => word[0].toUpperCase());
}

// Exercise 5
const computeAverage = (arrayOfNums) => {
    acc = 0
    arrayOfNums.forEach(num => {
        acc += num/arrayOfNums.length;
    });
    return acc
}

// Exercise 6
const filterAges = (arrayOfPeople) => {
    const filteredArray = arrayOfPeople.filter(person => person.edad > 18);
    return filteredArray.map(elem => elem.nombre);
}

// Exercise 7
const sortNumbers = (arrayOfNums) => {
    const copyOfNums = JSON.parse(JSON.stringify(arrayOfNums));
    const defNums = [0];
    while (copyOfNums.length > 0) {

    }
}

// Exercice 8
const computeModalClass = (arrayOfNums) => {
    const count = new Object;
    arrayOfNums.forEach(num => {
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num] += 1;
        }
    });
    maxNum = 0;
    maxCount = 0;
    for (elem of Object.keys(count)) {
        if (count[elem] > maxCount) {
            maxCount = count[elem];
            maxNum = elem
        }
    }
    return maxNum
}

// Exercise 9
const countA = (string) => {
    arr =
}