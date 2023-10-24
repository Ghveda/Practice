// ! Frequency algo
const frequency = (firstStr, secondStr) => {
    if (firstStr.length !== secondStr.length) {
        return false;
    }

    let objFirst = {};
    let objSecond = {};

    for (const letter of firstStr) {
        objFirst[letter] = (objFirst[letter] || 0) + 1;
    }

    for (const letter of secondStr) {
        objSecond[letter] = (objSecond[letter] || 0) + 1;
    }

    for (const letter in objFirst) {
        if (objFirst[letter] !== objSecond[letter]) {
            return false;
        }
    }
    return true;
};

const frequencyResult = frequency('azz', 'zar');

// ! Multiply algo
const findUniqeValue = (arr) => {
    if (!arr.length) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }

    let first = 0;
    let second = 1;
    const uniqueArr = [arr[first]];

    while (arr.length !== second) {
        if (arr[first] === arr[second]) {
            second++;
        } else if (arr[first] !== arr[second]) {
            uniqueArr.push(arr[second]);
            first = second;
        }
    }

    return uniqueArr.length;
}

const findUnique = findUniqeValue([1, 2, 3, 3, 10, 10]);

const sameFrequency = (numOne, numTwo) => {
    const strOne = numOne.toString();
    const strTwo = numTwo.toString();

    if (strOne.length !== strTwo.length) return false;

    let objFirst = {};
    let objSecond = {};

    for (const letter of strOne) {
        objFirst[letter] = (objFirst[letter] || 0) + 1;
    }

    for (const letter of strTwo) {
        objSecond[letter] = (objSecond[letter] || 0) + 1;
    }

    for (const letter in objFirst) {
        if (objFirst[letter] !== objSecond[letter]) {
            return false;
        }
    }
    return true;
};

const sameFrequencyVal = sameFrequency(1824, 2813);

const areThereDuplicates = (...rest) => {
    const obj = {};
    for (let letter of rest) {
        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }

        if (obj[letter] > 1) return true;
    }

    return false;
}

const duplicate = areThereDuplicates('b', 'c', 'a');

const averagePair = (arr, average) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const sum = arr[i] + (arr[j + 1] || 0) / 2;
            if (sum === average) return true;
        }
    }
    return false;
}

const average = averagePair([15, 3, 15, 7, 10], 15);

const isSubsequence = (strOne, strTwo) => {
    let indexOne = 0;

    for (let i = 0; i < strTwo.length; i++) {
        if (strOne[indexOne] === strTwo[i]) {
            indexOne++;
        }
        if (indexOne === strOne.length) return true;
    }

    return false;
};

const subsequence = isSubsequence('abc', 'acb');

const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;

    let firstSum = 0;
    let tempoSum = 0;
    let index = 0;

    for (let i = 0; i < num; i++) {
        firstSum += arr[i];
    }

    tempoSum = firstSum;

    for (let i = num; i < arr.length; i++) {
        tempoSum = tempoSum - arr[index] + arr[i];
        if (tempoSum > firstSum) {
            firstSum = tempoSum;
        }
        index++;
    }
    return firstSum;
};

const maxSum = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);

function power(pow, number) {
    const result = Math.pow(number, pow);

    if (pow === 2) return result || 1;
    power(pow - 1, result);
}

const result = power(2, 0) // 16

function factorial(num) {
    if (num === 0) return 1;

    return num * factorial(num - 1);
}

const factorialNum = factorial(7)

const productOfArray = (arr) => {
    const recursion = (arr) => {
        if (!arr.length) return 1;
        return arr[0] * recursion(arr.slice(1));
    }
    return recursion(arr);
}
const factorialRes = productOfArray([1, 2, 3, 10]) // 6

function recursiveRange(num) {
    if (!num) return 0;
    return num + (recursiveRange(num - 1));
}

const recursive = recursiveRange(10) // 21

function reverse(str) {
    let result = [];
    const recursionStr = (strCopy, response) => {
        if (!strCopy) return response.join("");
        response.unshift(strCopy[0]);

        return recursionStr(strCopy.slice(1), response)
    }

    return recursionStr(str, result);
}

const reverseRes = reverse('awesome')

function isPalindrome(str) {
    let reversedStr = '';
    const reverse = (strCopy, result) => {
        if (!strCopy) return result;

        result += strCopy[strCopy.length - 1];
        return reverse(strCopy.slice(0, -1), result);
    }

    if (reverse(str, reversedStr) !== str) return false

    return true;
}

const palindrome = isPalindrome('tacocat') // false

const isOdd = val => val % 2 !== 0;

const someRecursion = someRecursive([4, 6, 8, 9], isOdd); // false

function someRecursive(arr, callback) {
    if (!arr.length) return false;
    if (!callback(arr[0])) {
        return someRecursive(arr.slice(1), callback);
    }
    return true;
}

function flatten(arr) {
    let newArr = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatten(item));
        } else {
            newArr.push(item);
        }
    });

    return newArr;
}

const flattenArr = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);


function capitalizeFirst(arr) {
    const newArr = [];

    const capitalizeRecursion = (arr, copy) => {
        if (!arr.length) return copy;
        copy.push(arr[0][0].toUpperCase() + arr[0].slice(1));
        return capitalizeRecursion(arr.slice(1), copy);
    };

    return capitalizeRecursion(arr, newArr);
}

const capitalize = capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']



function nestedEvenSum(obj) {
    let num = 0;
    const sumRecursion = (obj) => {
        for (const [_, value] of Object.entries(obj)) {
            if (typeof value === 'number') {
                if (value % 2 === 0) {
                    console.log('teeest', num);
                    num += value;
                }
            } else if (typeof value === 'object') {
                sumRecursion(value, num);
            }
        }
        return num
    }

    return sumRecursion(obj, num);
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

const nestedSum = nestedEvenSum(obj2);


function capitalizeWords(arr) {
    const copy = [];
    const recursionArr = (arr) => {
        if (!arr.length) return copy;
        copy.push(arr[0].toUpperCase());
        return recursionArr(arr.slice(1));
    }

    return recursionArr(arr)
}

let words = ['i', 'am', 'learning', 'recursion'];
const capitalizeWordArr = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


const stringifyNumbers = (obj) => {
    const stringifyRecursion = (objItem) => {
        let bb = {};
        for (const [key, value] of Object.entries(objItem)) {
            if (typeof value === 'number') {
                bb[key] = value.toString();
            } else if (typeof value === "object" && !Array.isArray(value)) {
                bb[key] = stringifyRecursion(value);
            } else {
                bb[key] = value;
            }
        }

        return bb;
    }

    return stringifyRecursion(obj);
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const stringifyNum = stringifyNumbers(obj);


const collectStrings = (strObj) => {
    let bb = [];
    const stringifyRecursion = (objItem) => {
        for (const [key, value] of Object.entries(objItem)) {
            if (typeof value === "object") {
                stringifyRecursion(value);
            } else if (typeof value === 'string') {
                bb.push(value);
            }
        }
    }

    stringifyRecursion(strObj);
    return bb;
};

const strObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStr = collectStrings(strObj); // ["foo", "bar", "baz"])


function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;

    }
    return -1;
}

const linearSearchValue = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5

const binarySearch = (arr, value) => {
    const middle = Math.floor(arr.length / 2);

    const binarySearchRecursion = (index) => {
        if (index > arr.length - 1) return -1;

        if (arr[index] === value) {
            return index
        } else if (arr[index] > value) {
            const changedIndex = Math.floor(index / 2);
            return binarySearchRecursion(changedIndex);
        } else if (arr[index] < value) {
            const changedIndex = Math.floor((arr.length - index) / 2 + index) + 1;
            return binarySearchRecursion(changedIndex);
        }
    };

    return binarySearchRecursion(middle);
};

const binarySearchValue = binarySearch([1, 2, 3, 4, 5], 6)

const selectionSort = (arr) => {
    let sortedArr = [...arr];
    let tempoVal;

    for (let i = 0; i < arr.length; i++) {
        let lowest = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (lowest > arr[j]) {
                tempoVal = lowest;
                lowest = arr[j];
                arr[j] = tempoVal;
            }
        }
        sortedArr[i] = lowest;
    }
    return sortedArr;
};

const selectionSortFunc = selectionSort([9, 8, 30, 6, 70, 4, 3, 2, 1, 0]);

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let index = 0;

        while (index < arr.length) {
            let currentVal = arr[index];

            if (arr[index] > arr[index + 1]) {
                arr[index] = arr[index + 1];
                arr[index + 1] = currentVal
            }
            index++;
        }
    }

    return arr;
};

const insertionSortFunc = bubbleSort([9, 8, 30, 6, 70, 4, 3, 2, 1, 0]);