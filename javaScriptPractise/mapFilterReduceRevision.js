let myNumbers = [1, 3, 2, 4, 5, 6];
// // what we need here is to print each number+itself
// var newArray = [];
// console.log(myNumbers.map((element) => element + element));
// newArray.push(myNumbers.map((element) => element + element));

// console.log(`This is not bad right now we are just trying someThing old`);
// for (let amerIndex = 0; amerIndex < newArray[0].length; amerIndex++) {
//     console.log(newArray[amerIndex]);
// }

// console.log(`This is done using addition named function here`);

// function addition(ele, index) {
//     console.log(`This is the number ${index} and the value is ${ele+ele}`);
//     return ele + ele;
// }
// let resutl = myNumbers.map(addition);
// console.log(resutl);
// console.log(`This is moAmer1468`);

let amerString = 'MoHamEd';
// our mission is to swap these cases here
let resultOfSplitting = amerString.split("").map(function(ele, index, arr) {
        // if (ele === ele.toUpperCase()) {
        //     return ele.toLowerCase();
        // } else {
        //     return ele.toUpperCase();
        // }
        return (ele === ele.toUpperCase()) ? ele.toLowerCase() : ele.toUpperCase();
    })
    // console.log(resultOfSplitting);
let finalResult = resultOfSplitting.join('');
console.log(finalResult); //result is mOhAMeD

//***********************next Mission here uaAmer we need to solve thiis one right now *** */
let amerNumber = [-1, 99, 933, -2, -4, 76, 438];
//now we need to invert these numbers uaAmer
function inverteFunction(ele) {
    return -ele;
}

let invResult = amerNumber.map(inverteFunction);
console.log(invResult);
/************Third mission here********** */
let ignoreNumbers = "Moh8374a34me7438d";


function ignoreAmerNumber(ele) {
    console.log(`${typeof ele}`);
    if (isNaN(ele)) {
        //if ele is a string output is true
        //else output is false
        return ele;
    }
}
let ignoreFinalResult = ignoreNumbers.split('').map(ignoreAmerNumber).join('');
console.log(ignoreFinalResult);

/****************  we need some new methods here uaAmer******* */
/**
 * use the Filter method to return friends whose name started with letter A
 * simple hint Filter function returns the ele as it is if the condition equals to true
 */

let names = ["Ahamed", 'Mohamed', "Asser", "Amin", "Ebrahim"];

let everySingleEle = names.filter(function(ele, index, arr) {
    // if (ele.charAt(0) === 'A') {
    //     return ele;
    // }
    return (ele.startsWith('A') ? true : false)
});

console.log(everySingleEle);
for (let index = 0; index < everySingleEle.length; index++) {
    console.log(everySingleEle[index]);
    // and this is used to solve one problem in the challege uaAmer

}

let sentence = "I love Fooood Code Too playing Much";
// we need to return the word which lenght is less four
// so here we can use the filter method uaAmer
let returnedWord = sentence.split(' ').filter(function(ele, index, arr) {
    return (ele.length <= 5);
}).join(' ');
console.log(returnedWord);

// ************so this is the second challenge here.. we need to filter the numbers only and 
//return  the number*number **************************
let mix = 'A4324B8y483ZSZ8437';

finalArryaNumbers = mix.split('').filter(function(ele, index, arr) {
    return (!isNaN(ele)) ? true : false;
}).map(function(ele, index, arr) {
    return ele * ele;
}).join(' | ');

console.log(finalArryaNumbers);

/**************** Reduce method here  */
let nums = [10, 20, 30, 40];
//use the reduce method yaAmer
let reduceResult = nums.reduce(
    function(accumulator, current, index, array) {
        console.log(`the acc => ${accumulator}`);
        console.log(`the current => ${current}`);
        console.log(`the index => ${index}`);
        console.log(`the Array => ${array}`);
        console.log(`################`);
        return accumulator + current;
        // all what you are caring about here is the accumulator uaAmer
    }, 90
);

console.log(reduceResult);

// use the reduce to return the longest word in this string uaAmer
let theBiggest = ['Mohamed', "Amer", 'Potter', "here", "salma"];

let bigResult = theBiggest.reduce(
    function(accumulator, current, index, array) {
        console.log(`This is the initial value acc => ${accumulator}`);
        if (accumulator.length <= current.length) {
            accumulator = current;
        }
        return accumulator;
    },
    //simple hint here the accumulator here will Mohamed Word
);

console.log(bigResult);

/*********************Foreach() Method needed here uaAmer ******/
let dummyData = [2, 3, 34, 3, 4];

dummyData.forEach(
    function(element, array, index) {
        // so this will implemented for all elements with single iteration uaAmer
        dummyData.forEach(
                function(element, index, arary) {
                    console.log(`For all elements ${element *5}`);
                }
            )
            //this will done for this element
        console.log(element + element);
    }
);