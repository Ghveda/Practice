// ! Frequency algo
const frequency = (firstStr, secondStr) => {
    if(firstStr.length !== secondStr.length){
        return false;
    }

    let objFirst = {};
    let objSecond = {};

    for(const letter of firstStr) {
        objFirst[letter] = (objFirst[letter] || 0) + 1;
    }

    for(const letter of secondStr) {
        objSecond[letter] = (objSecond[letter] || 0) + 1;
    }

    for(const letter in objFirst){
        if(objFirst[letter] !== objSecond[letter]){
            return false;
        }
    }
    return true;
};

const frequencyResult = frequency('azz', 'zar');

// ! Multiply algo
const findUniqeValue = (arr) => {
    if(!arr.length){
        return 0;
    } else if(arr.length === 1) {
        return 1;
    }

    let first = 0;
    let second = 1;
    const uniqueArr = [arr[first]];

    while(arr.length !== second){
      if(arr[first] === arr[second]) {
        second ++;
      } else if(arr[first] !== arr[second]){
        uniqueArr.push(arr[second]);
        first = second;
      }
    }

    return uniqueArr.length;
}

const findUnique = findUniqeValue([1,2,3,3,10,10]);

const sameFrequency = (numOne, numTwo) => {
    const strOne = numOne.toString();
    const strTwo = numTwo.toString();

    if( strOne.length !== strTwo.length) return false;

    let objFirst = {};
    let objSecond = {};

    for(const letter of strOne) {
        objFirst[letter] = (objFirst[letter] || 0) + 1;
    }

    for(const letter of strTwo) {
        objSecond[letter] = (objSecond[letter] || 0) + 1;
    }

    for(const letter in objFirst){
        if(objFirst[letter] !== objSecond[letter]){
            return false;
        }
    }
    return true;
};

const sameFrequencyVal = sameFrequency(1824,2813);

const areThereDuplicates = (...rest) => {
    const obj = {};
    for(let letter of rest){
        if(obj[letter]){
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }

        if(obj[letter] > 1) return true;
    }

    return false;
}

const duplicate = areThereDuplicates( 'b', 'c', 'a');

const averagePair = (arr, average) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            const sum = arr[i] + (arr[j+1] || 0) / 2;
            if(sum === average) return true;
        }
    }
    return false;
}

const average = averagePair([15,3,15,7,10],15);

const isSubsequence = (strOne, strTwo) => {
    let indexOne = 0;

    for(let i = 0; i < strTwo.length; i ++) {
        if(strOne[indexOne] === strTwo[i]){
            indexOne ++;
        }
        if(indexOne === strOne.length) return true;
    }

    return false;
};

const subsequence = isSubsequence('abc', 'acb');

const maxSubarraySum = (arr, num) => {
    if(arr.length < num) return null;
    
    let firstSum = 0;
    let tempoSum = 0;
    let index = 0;

    for (let i = 0; i < num; i++) {
        firstSum += arr[i];
    }

    tempoSum = firstSum;

    for (let i = num; i < arr.length; i++) {
        tempoSum = tempoSum - arr[index] + arr[i];
        if(tempoSum > firstSum) {
            firstSum = tempoSum;
        }
        index ++;
    }
    return firstSum;
};

const maxSum = maxSubarraySum([-3,4,0,-2,6,-1], 2);

function power(pow, number){
    const result = Math.pow(number, pow);

    if(pow === 2) return result || 1;
    power(pow-1 , result);
}

const result = power(2,0) // 16

function factorial(num){
    if(num === 0) return 1;

    return num * factorial(num-1);
}

const factorialNum = factorial(7) 

const productOfArray = (arr) => {
    const recursion = (arr) => {
        if(!arr.length) return 1;
        return arr[0] * recursion(arr.slice(1));
    }
    return recursion(arr);
}
const factorialRes = productOfArray([1,2,3,10]) // 6

function recursiveRange(num){
    if(!num) return 0;
    return num + (recursiveRange(num-1));
}

const recursive = recursiveRange(10) // 21

function reverse(str){
    let result = [];
    const recursionStr = (strCopy, response) => {
        if(!strCopy) return response.join("");
        response.unshift(strCopy[0]);

        return recursionStr(strCopy.slice(1), response)
    }

    return recursionStr(str, result);
}

const reverseRes = reverse('awesome') 

function isPalindrome(str){
    let reversedStr = '';
    const reverse = (strCopy, result) => {
        if(!strCopy) return result;

        result += strCopy[strCopy.length-1];
        return reverse(strCopy.slice(0,-1), result);
    }

    if(reverse(str, reversedStr) !== str) return false

    return true;
}

const palindrome = isPalindrome('tacocat') // false

const isOdd = val => val % 2 !== 0;

const someRecursion = someRecursive([4,6,8,9], isOdd); // false

function someRecursive(arr, callback){
    if(!arr.length) return false;
    if(!callback(arr[0])){
        return someRecursive(arr.slice(1), callback);
    }
    return true;
  }

// function flatten(arr){
//     const flatArr = (arr) => {
//         if(typeof arr[0] === 'number') return arr;
//         console.log(arr, 'sss');
//         return flatArr(arr.flat());
//     };
//     return arr.map((item)=>flatArr(item).flat())[0];
//   }

//   const res = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

//   console.log(res);
  
//   flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
//   flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
//   flatten([[1],[2],[3]]) // [1,2,3]
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3