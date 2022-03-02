/*
console.log('this is mohamed Amer');
console.table(["mohamed", "amer", "salma"]);
console.log('This is the %cstyling uaAmer', 'color:red;font-size:40px');
console.log('this the %csecond%c styling', 'color:blue;font-size:20px', 'color:red;font-size:20px');
*/
// What is the ES6 this is the ecma script
/*
// this is lesson 10 datatypes uaamer
now we need to see what are the types of variables that are avaiable
-string
-number
-array
-map => object {key:value,key:value,key:value}
-undefined
-null
-object
-boolean

console.log(typeof 'this is the String')
console.log(typeof 3000)
console.log(typeof ['print', 1245, 'mohamed'])
console.log(typeof { name: 'Amer', age: 17, country: 'Egypt'})
console.log(typeof { name: 'Amer', age: 7557, country: 'Potter'})
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof false)
//***************************
console.log(typeof 'amer')
console.log(typeof { name: 'amer', number: 10101 })
console.log(typeof ['Not found', 9595, 'Potter'])
console.log(typeof true)
console.log(typeof false)
*/

/*************************************
 * lesson 11 variables  ======
 *syntax (keyword | name | assignment operator | value)
 *Global ane id
 *loosely and strongly languages


var amer = 'mohamed';
var country = 'Egypt';
var age = 585;
title = 'this is not amer'; // this is the loosely variable
console.log(amer)
console.log(age)
console.log(country)
hello.innerHTML = "This is not amer";
*/

/***************lesson 11 variables *****
 *             var
 * Redeclare (no)
 * console output while accessing the this variables before declaring it(undefined)
 * variable scope drama
 * block of Function scope
 *             let
 * Redeclare (yes)
 * console output while accessing the this variables before declaring it(Error)
 * variable scope drama
 * block of Function scope
 *  *             const
 * Redeclare (no)
 * console output while accessing the this variables before declaring it(Error)
 * variable scope drama
 * block of Function scope


var mohamed = 'potter ';
var mohamed = 'potter ';
console.log(mohamed);

const amer = 'amerThis is the amer name';
console.log(amer)
*/
/** lesson 14 using escape characters uaAmer
 * escape \  used for line continue continue continue

console.log('this si mohamed "alaa" Amer');
console.log("mohamed alaa amer 'potter' ");
console.log('this \n is mohamed Amer ')
console.log('print \\ what is this is the escape character \print ')
console.log("What\pishere\gre\nat\ideas\tohere");
*/

/***************** lesson 15 concatenation uaAmer
let a = 'this is amer';
let b = 'mohamed is my name';
document.write(a + "    " + b)
console.log(a + "   " + b);
*/

/**lesson 15 concatenation uaAmer
 * using backtick for concatenation
 *
 
var country = 'Egypt'
var amer = 'mohamed';
let rename = 'Renaming our name'
var name = 'This is the name of mohamed alaa amer';
console.log(`${name} print ${amer}
${30*30}  ${country} \f \n amer \n potter ${name} ${amer}`);
console.log(`${rename}`);
// now we need to make some simple page using backtick
document.write(`
<div class="mohamed">This is the class inside div</div>
<h1>mohamed Alaa </h1>
<p>Print this is not the title</p>
<div>This is not the html page </div>
<P>this is from javascript file uaAmer</P>
<span style="color:red">Print this is the span from mohamedamer</span>
`);
let alaa = 'Amer is the name of my family';
let mohamed = 'This is my first name';
let htmlVar = `
<div>
  <p> the name of your family ${alaa}</p>
  <p>Your first name is ${mohamed}</p>
</div>
`;
document.write(`${htmlVar}`);
*/
/**
 * lesson 17 variables and concatenations simple challenge
 *

let theTitle = 'amer',
    theDescription = 'Mohamed Alaa amer',
    theDate = '25/10';
let Div = `
<div>
    <h3>This is the headingThree for the title ${theTitle}</h3>
    <p>this is the paragraph for description ${theDescription}</p>
    <span>This is the span for the date ${theDate}</span>
</div>
`;

// document.write(Div);
// document.write(Div);
// document.write(Div);
// document.write(Div);
document.write(Div.repeat(4));
 */

/**Addition 
 * subtraction
 * multiplication
 * Division
 * Exponentiation
 * Modulus
 * Increment
 * Decrement
 

console.log(10 + 12)
console.log(30 * 30)
console.log(10 / 10)
console.log(10 ** 10)
console.log(11 % 2)
let mo = 3;
let moh = 6;
console.log(mo++)
console.log(moh--)
console.log(mo)
console.log(moh)
*/

/**  ************lesson 19 **********
 * using unary operators negative and plus

console.log(+100)
console.log(+"100")
console.log(+"Amer")
console.log(+0xff)
console.log(+false)
console.log(+true)
console.log(+null)
console.log(+"-100")

console.log(-100)
console.log(-"100")
console.log(-"Amer")
console.log(-0xff)
console.log(-false)
console.log(-true)
console.log(-null)
console.log(-"-100")
 */

/**   *************lesson 20 ********
 * Coercion and impulsion


let a = "10";
let b = 20;
let c = true;
console.log(+false + true);
console.log(+a + b + c) //so we have to use the unary operator before TheString var
console.log("" - 2)
console.log(+"");
console.log('amer')
 */

/**   *************lesson 21 challenge uaAmer********
 */

/**
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - +a++ + a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


 * the explaination uaAmer
 * *******************First log statement
 * [++a] > this the preincrement operator
 * [+] adding operator
 * [+b++] unaery and postincrement operator
 * [+] >adding operator
 * [+c++] > unary and postincrement operator
 * [-] subtract operator
 * [+a++] > unary and postincrement
 * *************Second log statement*********
 * [++a] > preincrement operator
 * [+] adding operator
 * [-b] negation operator
 * [+] adding operator
 * [+c++] > unary and postincrement operator
 *  [-] subtract operator
 * [+a++] > unary and postincrement
 * [+] >adding operator
 * [a] > just variable

//****************************
//the second challenge
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * 10 + +e * +e + f * 20 + -(--g)); //2000
console.log(-(--d) + ++f + +e * 2 + ++g); //173
 */

/**
 * ************* lesson 23 ************
 * numbers in javaScript
 *Double precision
 syntacitc Sugar "_"
 e
 **
 With decimal
 Number + BigInt
 Number Min value
 Number Max value


console.log(1000000);
console.log(1e9);
console.log(10 ** 10);
console.log(22.345543);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1000);

 */
/**
 *  ************ lesson 24
 * Number methods uaamer


console.log((100).toString());
console.log(100..toString()); //That means we don't have any fractions
console.log(100.232.toString()); //output 100.232
console.log(500..toString());
console.log(200.444484.toFixed(4));
console.log(Number("100")); //takes the String to integer
console.log(parseInt("100 amer 100")); // will return 100
console.log(parseInt("amer 100 amer")); //output nan
console.log(parseInt("100") + "mohamed"); //string
console.log(parseInt("100.2555") + 100); //number ... 200عدد صحيح
console.log(parseFloat(300.4455));

console.log(Number.isInteger("1000"));
console.log(Number.isInteger(1000));
console.log(Number.isNaN("string" / 20));
 */
/**
 * lesson 25
 * What is the math object uaAmer
 * round()
 * ceil()
 * floor()
 * min()
 * pow()
 * random()
 * trunc()

console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.ceil(2.1));
console.log(Math.min(22.2, 10, -4));
console.log(Math.pow(10, 2));
console.log(Math.random());
console.log(Math.trunc(2.11111));

//lesson 26 Number Challenge
let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;
/**
 * questions
 * [1] Find the smalles number in these variable
 * [2] use  a + dont Tome to Get the needed output
 * [3] Get integer "2" From d variable with 4 methods
 * [4] use variables b+d to get this variables... 66.67 (String)..67(Number)


//************Anwsers uaMoAlaa*********

//The Answer of the first question
console.log(Math.round(Math.min(a, b, c, d)));
// this is the answer of the Second question
console.log(Math.pow(a, 2) + Math.floor(d / 3))
    //This is the Answer of the Third question
console.log(Math.round(d));
console.log(parseInt(d));
//this is the Answerof the fourth question
console.log(((Math.ceil(b) + parseInt(d)) / 3).toFixed(2).toString()); //String
console.log(Math.floor((parseInt(b) + parseInt(d)) / 3));



//The Answer of the first question
document.write(Math.round(Math.min(a, b, c, d)));
document.write('<br>');
// this is the answer of the Second question
document.write(Math.pow(a, 2) + Math.floor(d / 3))
document.write('<br>');
//This is the Answer of the Third question
document.write(Math.round(d));
document.write('<br>');
document.write(parseInt(d));
document.write('<br>');
//this is the Answerof the fourth question
document.write(((Math.ceil(b) + parseInt(d)) / 3).toFixed(2).toString()); //String
document.write('<br>');
document.write(Math.floor((parseInt(b) + parseInt(d)) / 3));
*/

//lesson 27,28 *********
/**
 * the String methods are
 * Access with Index
 * Access with charAt()
 * length
 * trim()
 * toUpperCase()
 * toLowerCase()
 * chain Methods
 * indexOf(value , position)
 * lastIndexOf()
 * slice(start [Mandatory],End [opt] Not include End)
 * repeat (Times)
 * split(Separator [opt], Limit[opt])


let theName = '    mohamed       ';
console.log(theName.trim().charAt(2).toUpperCase());
console.log(theName.length);
console.log(theName.toUpperCase().trim());


let a = 'Elzero web school';
let b = 'Elzero|web|school';


console.log(a.indexOf('w'));
console.log(a.lastIndexOf('c'));
console.log(a.slice(1, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(4));
console.log(a.split(""));
console.log(a.split(" "));
console.log(b.split("|", 2));
 */
//lesson 29 String methods
/**
 * substring  (start, end)
 *  if the start is greater than the end ...will swape
 *  if the start is less than zero it will start from zero
 * use length to the last character
 * --substr(Star,chars to Extract)
 * Start>=length=""
 * negative Start From end
 * Includes(value ,start,end )
 * startwith(value ,start ,end)
 * endswith(value ,start,end)
 * ..so we have substring(),substr() ,includes() ,startWith(), endWith()


let a = 'Mohamed alaa amer';

console.log(a.length);
console.log(a.substring(0, 5)); //not Encluding the end
console.log(a.substring(-5, 5)); //start is negative so start will be 0
console.log(a.substring(2, 8));
console.log(a.substring(8, 1)); //here will swap
console.log(a.substring(5, 4));
console.log(a.charAt(a.length - 1));
//-------------------
console.log(a.substr(2, 10));
console.log(a.substr(-4, 10));
console.log(a.substr(6, 4));
console.log(a.substr(a.length - 3, 2));
console.log(a.substr(a.length - 8, 5));
//---------------
console.log(a.includes('amer'));
console.log(a.includes('alaa', 2));
console.log(a.includes('er', -5));
console.log(a.includes('me', 1, 5));
//----------------
console.log(a.startsWith('M'));
console.log(a.startsWith('mohamed', 14, 8));
 *
// this is the String challenge uaamer focus with us
let a = "Elzero Web school";
//include This Methods in Your solution [slice, charAt]l
console.log(); //ouput is Zero ..first letter is capital
console.log(a.substring(2, 3).toUpperCase() + a.substring(0, 6).substring(3, 6));
document.write(a.substring(2, 3).toUpperCase() + a.substring(0, 6).substring(3, 6));

console.log(); //HHHHHHH 8
console.log(a.substr(-4, 1).toUpperCase().repeat(8));
document.write(a.substr(-4, 1).toUpperCase().repeat(8));

console.log(); //return Array  [Elzero]
console.log(a.split(" ", 1));
document.write(a.split(" ", 1));

console.log(); //substr Method Only output Elzero School
console.log(a.substr(0, 7) + a.substr(-6, 1).toUpperCase() + a.substr(-5));
document.write(a.substr(0, 7) + a.substr(-6, 1).toUpperCase() + a.substr(-5));

//solution Must be Dunamic And String May Change   //the output eLZERO WEB SCHOOl
document.write((a.charAt(0)).toLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1.).toUpperCase());
*/
/**
 * lesson 31 comparsion operators uaAmer
 * == Equal in the value not the type
 * != Not Equal in the value not the type
 * === identical in the type and value
 * !== not identical in the type and value

console.log(10 == '10'); //true in the value not the type
console.log(10 != '10 '); //false
console.log(10 === '10'); //false because this compares the type and the value

console.log(10 !== '10'); //true because they are not equal in the type
console.log("amer" === 'mohamed'); //false because they are not identical in the type
console.log(typeof 'amer' === typeof 'mohamed'); //true they are identical becaues they first will String and the second will be String
 */
/**
 * Logical operators uaAmer
 * ! Not
 * && operator
 * || operator

console.log(10 != 10); //false
console.log(!true);
console.log(true);

console.log(10 == '10' && 10 > 5 && 10 >= 10); //true. in this all conitions must be true
console.log(10 == '10' || 10 > 50 || 10 >= 10); //true only one of the three conditions could be true
 */
/**
 * if Conditions With amer
 * the Control flow

let price = 100;
let discount = false;
let country = 'Egypt';
let name = 'mohamed';
let discountAmount = 30;

if (discount === true) {
    price = price - discountAmount;
    console.log(price); //70
} else if (name === 'mohamed') {
    if (country === 'Egypt') {
        if (discount === false) {
            price = price - (discountAmount + 50);
            console.log(price);
            //this is the simple Example of using nested conditions
            //this is the three levels of nested conditions
        }
    }
} else {
    price = price - 10; //90
    console.log(price);
}
 */
/**
 * ternary operator lesson 35
 * if(Condition) ?true:false;
 * if(Condition)? true ? (condition)?true :(condition)?true:false;


let name = "amer";
let theGender = 'ame';
let Age = 10;


//this is the ternary operator of using if conditios
name === "potter" ?
    console.log('mona') :
    Age === 30 ?
    console.log('the age is 30') :
    theGender === 'Female' ?
    console.log('female') :
    console.log('Not Found');

Age === 30 ?
    console.log('outport') :
    name === 'amer' ?
    console.log('From') :
    console.log('Done');


// we need to test anohter one uaAmer let's do this
let nickname = "mohamed";
let output = nickname === 'mohamed' ? 'mohame is your name' : 'mohamed is not your name';

console.log(output);
 */
/**
 *lesson 36 this is Nullish coalescing operator
 * Nullish Coalescing operator ??
 * From this condition ${price || 200}
 * if the price is null or undefined or 0(false) //outupt=200
 * but this condition
 * ${price ?? 200}
 * if the price is null or undefined the ouput is 200
 * if the price is 0 (false) the output will be 0


//let price = 100;
// let price; //this is undefined value
// let price = false; //this is the falsy valur or 0
// let price = 0;
// console.log(`${price || 200}`);

// let price; //this is the undefined value
// let price = null; //this is the null value
let price = false; //this is the falsy value //output will false
console.log(`${price ?? 200}`);
 */
/**
 * lesson 37
 * if Condition challenge
 * the Challenge uaAmer

let a = 10;
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("40");
} else {
    console.log('Unknown');
}

//Write the ternary operator..First question uaAmer
a === 10 ?
    console.log(10) :
    (a > 10 && a <= 40) ?
    console.log("10 T0 40") :
    (a > 40) ?
    console.log('40') :
    console.log('Unknown');
document.write('Good');

//The Second question
let st = 'Elzero Web School';
if (typeof st === typeof "34") {
    console.log("Good one");
    document.write('Good');
    console.log(`${typeof "34"}` + ' is the type of 34');
}
//this is the Third question
//W position may be change
if (st.charAt(7).toUpperCase() === 'W') {
    console.log('Good Two');
    document.write('Good');
}


console.log(st.includes('W')); //output is true
if (st !== "string") {
    console.log("Good Three");
    document.write('Good');
}

//here we can use nullishment operator
if (!st || typeof 200 === 'number') {
    console.log('Good Four');
    document.write('Good');
}

let newst = st.split(' ', 1) + st.split(' ', 1); //toShow what is the output
console.log(newst);
if (st.split(' ', 1) + st.split(' ', 1) === 'ElzeroElzero') {
    console.log('Good Five');
    document.write('Good');
}

let wantedString = st.search('W');
console.log(wantedString);
console.log(st.charAt(st.search('W')));
if (st.charAt(st.search('W')) === 'W') {
    console.log('This is done by using the search method');
}
 */


/** lesson 38 *********
 * Switch statement uaAmer
 * simple example here


let name = ' ';

switch (name) {
    default: console.log('Default value here');
    break;
    case 'amer':
            console.log('your name is correct ');
        break;
    case 'mohamed':
            console.log('This is the first name');
        break; // we have to put break in order to not continue
    case 'potter':
            console.log('This is out');
        break;
    case 'not':
            console.log('Not found');
        break;

}
let day = 2;

switch (day) {
    case 2:
        console.log('2');
        console.log('Who is the leader now yaAmer');
        break;
    case 3:
        console.log('2');
        break; //so here we need to put break in order to not continue uaAmer
    case 4:
    case 5:
    case 6:
        console.log('4 or 5 or 6');
        break;
    default:
        console.log('Default');
        break;
}
 */
/**
 * lesson 39 *********
 * Switch and if challenge uaAmer

let job = 'Manager';
let salary = 0;

switch (job) {
    case 'Manager':
        salary = 8000;
        console.log(`${salary}`);
        break;
    case 'IT':
    case "Support":
        salary = 6000;
        console.log(`${salary}`);
        break;
    case 'Developer':
    case 'Designer':
        salary = 7000;
        console.log(`${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`${salary}`);
        break;
}

let holidays = 0;
let money = 0;

if (holidays === 0) {
    console.log(`my money is ${money=5000}`);
} else if (holidays === 1 || holidays === 2) {
    console.log(`my money is ${money=3000}`);
} else if (holidays === 3) {
    console.log(`my money is ${money=2000}`);
}
 */
/**
 *lesson 40 arrays
 * simple example
 * Array.isArray(Varible here) > This will return true or false

let myName = ['mohamed', 'alaa', 'amer', ['ali', 'Gamal', 'Rabei']];

console.log(`${myName[0]}`);
console.log(`${myName[2]}`);
console.log(`${myName[3][0][1]}`);
myName[3][0] = 'Ebrahim';
console.log(myName);
console.log(`${myName}`);
console.log(Array.isArray(myName));
let str = 'String';
console.log(Array.isArray(str));
 */
/**
 * lesson 41 *** complete the Array
 * -Length
 * -Start From zero

let myFriends = ['Ali', 'Mohamed', 'Ebrahim', 'Potter', 'Osama'];
console.log(myFriends.length);

myFriends[myFriends.length] = 'Gamal';
console.log(myFriends);
console.log('the new line here ');
myFriends[myFriends.length] = 'salma';
console.log(myFriends);
myFriends[myFriends.length] = 'salma';
myFriends[myFriends.length] = 'kkk';
myFriends[myFriends.length] = 'ddd';
myFriends[myFriends.length] = 'sss';
console.log('new line here ');
console.log(myFriends);
myFriends[myFriends.length - 2] = 'AmeramerAmer'
console.log(myFriends);
 */

/**
 * lesson 42 completing the array and see what are the funtions used here
 * Methods => unshift()First ,push()End ,shift()remove the first element of the array and return it
 * Methods => pop(),indexOf(),lastIndexOf(),includes(),sorting
 * Methods=>  reverse(),
 * Methods=>  slice() => not including the end
 * Methods=>  splice() => used for removing and adding elements ** so this the most important one here
 * Methods =>  join() ,concat()
 *

let friends = ['mohamed', 'potter', 'salma', 'Queen', 'harry', 'ali', "mahmoud"];
console.log(friends);
let output = friends.unshift('Ebrahim');
console.log(`the new length of the friends array is ${output}`);
friends.push(['jj', 'kkkkk', 'kjfdsl']);
console.log(friends);
let ameroutput = friends.pop();
console.log(`${ameroutput[2]}`);


let shiftOuput = friends.shift()
console.log(`${shiftOuput}`);

let friends = ['mohamed', 'harry', 'potter', 'salma', 'Queen', 'harry', 'ali', "mahmoud"];
console.log(friends.lastIndexOf('potter', 2));
console.log(friends.indexOf('Queen'));
console.log(friends.lastIndexOf('harry', -3));
console.log(friends.lastIndexOf('harry', -4));

// console.log(friends.includes('mohamed', 3));

if (friends.includes('mohamed', 3)) {
    console.log(' found');
} else {
    console.log('Not found');
}

// let friends = ['mohamed', 'harry', 'potter', 'salma', 'Queen', 'harry', 'ali', "mahmoud"];
// let numbers = [10, 20, 30, 45, 40, 80, 40, 50, -10]
// console.log(numbers.sort());
// console.log(numbers.reverse());

// console.log(numbers.sort().reverse());
// console.log(numbers.reverse().sort());
let friends = ['mohamed', 'harry', 'potter', 'salma', 'Queen', 'harry', 'ali', "mahmoud"];

console.log(friends.slice());
console.log(friends.slice(2, 5));
console.log(friends.slice(-8, -5)); //sp the start must be greater than the end
console.log(friends.slice(-5, 8));
console.log(friends.splice(2, 3, 'mohamed', 'ahamed', 'Ebrahim'));
console.log(friends);
//so this it very important to use the splice method uaAmer
console.log(friends.splice(0, 2, 'koko', 'Elbaharawy'));
console.log(friends);

let one = ['first', 'second', 'third', 'fourth'];
let two = ['five', 'six'];

let newArray = one.concat(two);
newArray = newArray.concat('amerString', ['ten', 'eleven', 'tewelve'], two);
console.log(newArray);
console.log(newArray.join(" @ "));
console.log(newArray.join('|').toUpperCase());
 */

/**this is the Array challenge uaAmer and we need you to focus with us
let zero = 0;
let counter = 3;
let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];


// ***********The solution  of  the first question solved potter
// let needed = my[counter];
// console.log(needed);
// // console.log(my); //['Osama','Elham','Mazero','Ahmed'] reversed
// let newOne = my.reverse().slice(counter, my.length);
// newOne.unshift(needed);
// console.log(newOne);
// *************** Solution of the second question
// console.log();
// my = my.slice(zero, counter).reverse();
// my.pop()
// console.log(my);
// ************* Solution of the Third question***********
let reversed = my.reverse();
console.log(reversed);
let firstPart = reversed[counter].slice(0, counter);
let modifiedFirstPart = Array.from(firstPart);
modifiedFirstPart.pop();
console.log(modifiedFirstPart);
console.log(modifiedFirstPart.join(''));
let partOne = modifiedFirstPart.join('');
// Trying to find the second one
my.reverse()
my.shift();
console.log(my); //this is the oupt ['Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer']
let firstIndex = my[zero];
console.log(firstIndex); //Mazero
let firstIndexToArray = Array.from(firstIndex); // will convert to string to array
firstIndexToArray.shift();
firstIndexToArray.shift();
console.log(firstIndexToArray);
let firstIndexToString = firstIndexToArray.join(''); //Mazero ..this is the output
let secondPart = firstIndexToString;
console.log(partOne + secondPart);

//The solution of the fourth question****************

console.log(firstIndexToArray);
let firstLetter = firstIndexToArray.pop();
firstLetter = firstLetter.toUpperCase();
let secondLetter = firstIndexToArray.pop();
console.log(secondLetter);
console.log(secondLetter + firstLetter); //rO
*/
/**
 * lesson 48 loop for and concept of Loop

// for (let mohamed = 0; mohamed < 5; mohamed++) {
//     console.log(mohamed);
// }
// //looping in sequences uaAmer
let myFriends = ['amer', 'mohamed', 'potter', 'omar'];
for (let index = 0; index <= myFriends.length - 1; index++) {
    for (let variable = 0; variable <= myFriends[index].length - 1; variable++) {
        console.log(myFriends[index][variable]);
    }
    console.log(myFriends[index]);
}

let all = [1, 2, 3, 'amer', 'mohamed', 'potter', 'omar'];
let numbers = [];
let strings = [];
for (let i = 0; i <= all.length - 1; i++) {
    if (typeof all[i] === "number") {
        numbers.push(all[i]);
    } else {
        strings.push(all[i]);
    }
}
console.log(`the Numbers Array is ${numbers.join('|')}numbers`);
console.log(`the String array is ${strings.join('|')}`);

//creating loop inside another loop
let products = ['productOne', 'productTwo', 'productThree'];
let colors = ['red', 'green', 'blue'];
let types = ['typeOne', 'typeTwo', 'typeThree'];
firstLoop: for (let i = 0; i < products.length; i++) {
    console.log('#################');
    console.log(`this is the ${products[i]}`);
    console.log('#################');
    secondLoop: for (let index = 0; index < colors.length; index++) {
        console.log(`--${colors[index]}`);
        fourthLoop: for (let index = 0; index < types.length; index++) {
            console.log(`   **${types[index]}`);
            if (types[index] === 'typeTwo') {
                break firstLoop;
            }
        }
    }
}
 */
/**
 *   **************** lesson 51 ****************
 * All what i need you to know is the continue used to skip the current and break used to stop the looping uaAmer
let products = [33, 22, 445, 10, 'productOne', 555, 20, 44, 144, 'productTwo', 44, 87, 'productThree'];
let colors = ['red', 'green', 'blue'];

mainLoop: for (let index = 0; index < products.length; index++) {
    // if (typeof products[index] === 'string') {
    //     continue;
    // }
    console.log(`This is the ${products[index]}`);
    childLoop: for (let index = 0; index < colors.length; index++) {
        if (colors[index] === 'green') {
            continue mainLoop;
        }
        console.log(colors[index]);
    }
}
*/

/**
 * lesson 51 ***********
 * some advanced thing here


// let products = [33, 22, 445, 10, 'productOne', 555, 20, 44, 144, 'productTwo', 44, 87, 'productThree'];

// let index = 0;
// for (;;) {
//     if (index == products.length) {
//         break;
//     }
//     //this is the main function of the loop
//     console.log(products[index]);
//     index = index + 2;
// }

for (let i = 0; i < products.length; i = i + 2) {
    console.log(products[i]);
}
let amerList = ['one', 'two', 'three', 'four'];
let amerIndex = 0;
for (;;) {
    if (amerIndex == amerList.length) break;
    console.log(amerList[amerIndex]);
    amerIndex = amerIndex + 1;
}
// }
//This is awesome uaAmer and we need you to be creative
 */
/**
 * lesson 53 ****
 * Practise and practiseWith for loop

let products = ['keyboard', 'Mouse', 'Pen', 'Monitor', 'Iphone', 'iBad'];
let colors = ['red', 'green', 'blue'];
let showCount = 3;

document.write(`
<h1>
We will show
${products.length}
Products
<h1></h1>`);
for (let index = 0; index < products.length; index++) {
    document.write(`<div>`);
    document.write(`<h3>Product ${index+1} is ${products[index]}</h3>`)
    document.write(`<div>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(' | ')}</p>`);

}
 */
/**
 * lesson 54 while looping uaamer*****
 *
 * let products = ['keyboard', 'Mouse', 'Pen', 'Monitor', 'Iphone', 'iBad'];
let index = 0;
while (index < products.length) {
    console.log(products[index]);
    index++; //so here you have to put the counter value uaAmer
}
 */

/**
 * lesson 55 Do while looping uaamer*****
 *

console.log(`This is Great #####################`);
let amer = products.length;
do {
    console.log(products[amer]);
    console.log('Do enters the loop just one time at least uaAmer');
    amer++;
} while (amer < products.length);
 */
/**
 * lesson 56 challenge of looping uaAmer

let Admins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmpolyees = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'Amany', 'Samia', 'Annar', 'Omenia', 'Salim'];
let counter = 0;
let i = 0;

let tempAdmins = [];
for (let i = 0; i < Admins.length; i++) {
    if (Admins[i] === "Stop") break;
    tempAdmins.push(Admins[i]);
    console.log(tempAdmins[i]);
}
document.write(`<div> we have X admins</div>`);
document.write(`<div>we have ${tempAdmins.length} Admins</div>`);

for (; i < tempAdmins.length; i++) {
    document.write(`<hr>`);
    document.write(`The Admin for team ${i+1} is ${tempAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    for (let j = 0; j < myEmpolyees.length; j++) {
        if (myEmpolyees[j].charAt(0) === tempAdmins[i].charAt(0)) {
            counter++;
            document.write(`<p>-${counter} ${myEmpolyees[j]}</p>`);
            console.log(tempAdmins[i]);
        }
    }
    counter = 0; //we have to reinitialize the variable before the next iteration uaAmer
}
 */
/**lesson 57 Functions uaAlaa
 * Don't repeat yourself uaAmer
 * Just type one time here
 * The return value of the function
 * the return will bring back from the execution of the function
 * and return keyword stop the execution... execution
 * What are the defualt params for the function => we have Three ways to do this
 * using if , || , equal with params
 * lesson 61 What are the rest parameters uaAmer
 * Rest parameters is unknow number of function's parameters
 * Rest parameter must be the last one of the function's parameters
 * Rest parameter used only for one time


function sayHello(userName) {
    console.log(`The hell is coming ${userName}`);
}

// sayHello('Mohamed Amer');
// sayHello('Harry Potter');
// sayHello('Salma gafaar');
// sayHello('Mohamed khaled');

function amerFunction(name, country, age, phoneNumber) {
    console.log(`your name is ${name}`);
    console.log(`your name is ${country}`);
    console.log(`your name is ${age}`);
    console.log(`your name is ${phoneNumber}`);
    console.log('App is not suitable for you');
}

function generateYears(start, end, exlcude) {
    for (let i = start; i <= end; i++) {
        if (i === 2020) { // so this was the runtime error.when we put the exclude instead of the i
            continue;
        }
        console.log(i);
    }

}

// generateYears(1982, 2021, 2020);

function sum(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
sum(20, 30);
sum(60, 34);
sum(20, 80);

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `interrupting`; //That means go back uaamer we need you here
        }
        console.log(i);
    }
}

generate(10, 20);

function info(name = 'name Unknown', age = 'age Uknown') { //this is the Third way
    if (age === undefined) { //this is the first one
        age = 'Unknown';
    }
    age = age || 'Unknown'; //this is the second one
    //you need to know that the default value of the parameter is undefined uaamer
    console.log(`your name is ${name} and your age is ${age}`);
}

info('Amer ', 50);
info('mohamed');
info();
info('Mohamed alaa amer is the name', 50);

function information(name = 'mohamed', age = '50') { //this is the Third way
    // if (name === undefined) { //this is the first way
    //     name = 'mohamed Alaa amer ';
    // }
    // if (age === undefined) {
    //     age = 20;
    // }
    // name = name || 'mohamed Amer'; //This is the second way yaAemr
    // age = age || '20'; //this is the second way yaAmer
    console.log(`your name if ${name}`);
    console.log(`your age is ${age}`);
}
information();
 
function sum(...numbers) { //..numbers is the dynamic numbers of the parameters
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        // result = result + numbers[i];
        result += numbers[i]
    }
    return result;
}

let summing = sum(20, 10, 30, 40, 50, 70, 40);
console.log(`The summing of the all numbers is ${summing}`);
*/
/**lesson 62 Functions Advanced practice
 * Function practise uaAmer


function showSkills(username = 'unknown', age = 'unknown', rate = 0, show = 'yes', ...skills) {
    document.write(`<div>`);
    document.write(`<p>your username is ${username}</p>`)
    document.write(`<p>your age is ${age}</p>`)
    document.write(`<p>yoru rate is ${rate}</p>`);
    if (show === 'yes') {
        console.log('this  is true');
        document.write(`<p>${skills.join("|")}</p>`);
        if (skills.length === 0) {
            document.write(`<p>There is no skills</p>`)
        }
    } else {
        document.write(`The Skills is hidden uaamer`);
    }
}

showSkills('mohamed Alaa amer', '35', 4.2, '11', 'Html', "css", "javaScript");


function showDetails(...params) {
    // typeof name === 'string' ? name = name : typeof name === 'boolean' ? status = name : typeof name === 'number' ? age = name : console.log(`no thing`);
    // typeof age === 'number' ? age = age : typeof age === 'boolean' ? status = age : typeof age === 'string' ? name = age : console.log(`no thing`);
    // typeof status === 'boolean' ? status = status : typeof status === 'number' ? age = status : typeof status === 'string' ? name = status : console.log(`no thing`);
    // typeof name !== 'string' ? typeof age === 'string' ? name = age : name = status : console.log();
    // typeof age !== 'number' ? typeof name === 'number' ? age = name : age = status : console.log();

    // typeof age !== 'number' ? typeof name !== 'number' : age = status;
    // typeof status !== 'boolean' ? typeof age !== 'boolean' : status = name;
    // typeof age !== 'boolean' ? age = name : age = status;
    // typeof status !== 'number' ? status = age : status = name;
    // status === true ? document.write(`Hello ${name},you Age is ${age}your are available to hire`) : document.write(`Hello ${name},you Age is ${age}your are not available to hire`);
    // console.log(`hello ${name} your age is ${age}`);

    // if (typeof name !== 'string') {
    //     if (typeof age === 'string') {
    //         name = age;
    //     } else if (typeof status === 'string') {
    //         name = status;
    //     } else {
    //         name = name;
    //     }
    // }
    // if (typeof age !== 'number') {
    //     if (typeof name === 'number') {
    //         age = name;
    //     } else if (typeof status === 'number') {
    //         age = status;
    //     } else {
    //         age = age;
    //     }
    // }
    // if (typeof status !== 'boolean') {
    //     if (typeof name === 'boolean') {
    //         status = name;
    //     } else if (typeof age === 'boolean') {
    //         status = age;
    //     } else {
    //         status = status;
    //     }
    // }
    //#####################
    //this is the third one uaAmer
    let name;
    let age;
    let status;
    name = name || '';
    age = age || 0;
    status = status || false;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'string') {
            name = params[i];
        }
        if (typeof params[i] === 'number') {
            age = params[i];
        }
        if (typeof params[i] === 'boolean') {
            status = params[i];
        }
    }
    document.write(`<div>`);
    if (status === true) {
        document.write(`your name is ${name} Your age is ${age} you are available to hire`)
    } else {
        document.write(`your name is ${name} Your age is ${age} you are not avaible to hire`)
    }
    document.write(`<div>`)
}


function details(a, b, c) {
    let amerArray = [];
    amerArray.push(c, b, a);
    console.log(amerArray[0]);
    for (let i = 0; i < amerArray.length; i++) {
        // typeof amerArray[i] === 'number' ? a = amerArray[i] : console.log();
        // typeof amerArray[i] === 'string' ? b = amerArray[i] : console.log();
        // typeof amerArray[i] === 'boolean' ? c = amerArray[i] : console.log();
        if (typeof amerArray[i] === 'string') {
            a = amerArray[i];
        } else if (typeof amerArray[i] === 'number') {
            b = amerArray[i];
        } else if (typeof amerArray[i] === 'boolean') {
            c = amerArray[i];
        }
    }

    // if (typeof a === 'number') {
    //     a = a;
    // }
    // if (typeof b === 'boolean') {
    //     b = b;
    // }
    // if (typeof c === 'string') {
    //     c = c;
    // }
    document.write(`<div>`);
    if (c === true) {
        document.write(`your name is ${a} Your age is ${b} you are available to hire`)
    } else {
        document.write(`your name is ${a} Your age is ${b} you are not avaible to hire`)
    }
    document.write(`<div>`)

}
// showDetails(false, 20, 'mohamed');
// showDetails('mohamed', true, 40)
// showDetails(50, 'Ebrahim', false);


// details(false, 20, 'mohamed');
// details('mohamed', true, 40)
// details(50, 'Ebrahim', false);

// details('Amer', true, 54)

function showDetails(...params) {
    let name;
    let age;
    let status;
    name = name || '';
    age = age || 0;
    status = status || false;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'string') {
            name = params[i];
        }
        if (typeof params[i] === 'number') {
            age = params[i];
        }
        if (typeof params[i] === 'boolean') {
            status = params[i];

        }
    }
    document.write(`<div>`);
    if (status === true) {
        document.write(`your name is ${name} Your age is ${age} you are available to hire`)
    } else {
        document.write(`your name is ${name} Your age is ${age} you are not avaible to hire`)
    }
    document.write(`<div>`)
}



function details(a, b, c) {
    let amerArray = [];
    amerArray.push(c, b, a);
    console.log(amerArray[0]);
    for (let i = 0; i < amerArray.length; i++) {
        if (typeof amerArray[i] === 'string') {
            a = amerArray[i];
        } else if (typeof amerArray[i] === 'number') {
            b = amerArray[i];
        } else if (typeof amerArray[i] === 'boolean') {
            c = amerArray[i];
        }
    }
    document.write(`<div>`);
    if (c === true) {
        document.write(`your name is ${a} Your age is ${b} you are available to hire`)
    } else {
        document.write(`your name is ${a} Your age is ${b} you are not avaible to hire`)
    }
    document.write(`<div>`)
}

function mohamedDetails(a, b, c) {
    let amerArray = [];
    amerArray.push(c, b, a);
    console.log(amerArray[0]);
    for (let i = 0; i < amerArray.length; i++) {
        typeof amerArray[i] === 'string' ?
            a = amerArray[i] :
            typeof amerArray[i] === 'number' ?
            b = amerArray[i] :
            typeof amerArray[i] === 'boolean' ?
            c = amerArray[i] :
            console.log();
    }
    document.write(`<div>`);
    if (c === true) {
        document.write(`your name is ${a} Your age is ${b} you are available to hire`)
    } else {
        document.write(`your name is ${a} Your age is ${b} you are not avaible to hire`)
    }
    document.write(`<div>`)
}

mohamedDetails(false, 20, 'mohamed');
mohamedDetails('mohamed', true, 40)
mohamedDetails(50, 'Ebrahim', false);
 */

/**
 * lesson 64 Anonymous function uaAmer
 * Anonymous function

let amer = function(numOne, numTwo) { // hint in this we haven't any name uaAmer
    console.log(numOne + numTwo);
}

amer(20, 30);

//This i the asynchronous programming
setTimeout(function(params) {
    console.log(`this is out`);
}, 2000);
// document.getElementById('show').onclick = function() {
//     setTimeout(function() {
//         console.log('This is not normal');
//     }, 2000);
// };

function sayHello(params) {
    console.log(`your are welcome here`);
}
document.getElementById('show').onclick = sayHello;
//small hint do not use the parentheses here because we are not going to call the function just we need to set the value to the onclick
 */

/**
 * lesson 65 return nested functions
 * nested functions Focus withus
 
// function concatName(first, second) {
//     let message = 'hello';

//     function firstLast() {
//         return `${message} ${first} ${second}`
//     }
//     return firstLast();
// }

// function concatName(first, second) {
//     let message = 'hello';

//     function firstLast() { //this is the second function
//         function secondOne() { //this is the Third function
//             return `${first} ${second}`;
//         }
//         return `${message} ${secondOne()} `
//     }
//     return firstLast();
// }

// console.log(concatName('Mohamed', 'Amer'));

function completeName(first, last) {
    let message = 'hello';

    function second() {
        function third() {
            return `${first} ${last}`;
        }
        return `${message} ${third()}`
    }
    return second();
}

console.log(completeName('mohamed', 'amer You are welcome here'));
*/
/**
 * lesson 66 Arrow function uaAmer


let print = () => console.log(`This is amer`);
print(); //so this is the call of the function

let summing = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(summing(20, 30));

let amer = _ => console.log(`Advanced use of the Arrow functionBut without Params `);
amer();

let mohamed = () => console.log(`Your are out of here`);
mohamed(); //so this is the calling while using the ()

let multiple = () => {
    let num = 10
    return num * num;
}
console.log(multiple());
 */
/** lesson 67 uaAmer sovled potter
 * scope Local and Global

var x = 10;
let y = 28;


function amer() {
    var z = 10;
    let w = 28;
    console.log(`From Function - ${z}`);
    console.log(`From Function - ${w}`);
}

amer(); //Function calling



console.log(`from outside ${x}`);
console.log(`from outside ${y}`);
 */
/**
 * lesson 68 Block scope
 * remember using var uaamer
 * and let this is the core about all this ideas
 *


// function moamer(params) {
//     first = 20; //so var here is glabal one here and the function can modify it but let isn't able to 
//     //be modified
//     console.log(`${first}`);
// }

// let second = 800;

// function potter(params) {
//     let second = 200;
//     console.log(`${ second }`);
// }
// potter();

// // moamer();

//var x = 10; //so var is not block scope uaAmer
let x = 10; //so var is  block scope uaAmer
//this is our block uaAmer
if (10 === 10) {
    let x = 50;
    console.log(x); // x will be 50
}
console.log(x); //x will be 10

if (10 === 10) {
    console.log(x); // this will be 10 From the global one uaAmer
}
 */
/**
 * Lexical scope



let x = 20;

function parent(params) {
    console.log(`This is from parent ${x}`);
    function child(params) {
        console.log(`This is from child ${x}`);
        function grand(params) {
            console.log(`This is from grand ${x}`);
        }
    }
}
parent();
 */
/**
 * lesson 70
 * this is the arrow function challenge

//this is the first question
let names = function(...params) {
    return console.log(`String [${params.join('],[')}] => Done!`);
}
names('Mohamed', 'Alaa', 'potter');

//this is the second question

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => (one + two + +nums);

console.log(calc(10, myNumbers[0], myNumbers[1]));
 */
/**
 * lesson 71 high order functions uaAmer

let amerArray = [10, 20, 30, 50, 40];
var emptyArray = [];

function addition(amerArray) {
    var emptyArray = [];
    for (let i = 0; i < amerArray.length; i++) {
        emptyArray.push(amerArray[i] + amerArray[i]);
    }
    return emptyArray;
}
let result = addition(amerArray);


// console.log(result);
// amerArray.forEach(function(element, index, arr) {
//     emptyArray.push(element);
//     console.log(index);
//     console.log(`This is our array ${arr}`);
// }, this);

// amerArray.map(function(element, index, arr) {
//     emptyArray.push(element);
//     console.log(index);
//     console.log(`'this is our array ${arr}`);
// }, this);
// amerArray.map((element, index, arr) =>
//     emptyArray.push(element), this);

// console.log(`This is the Array ${emptyArray.join('|')}`);

function addition(element) {

    return element + element;
}
let add = amerArray.map(
    addition, this,
);
console.log(add);
 */
/**
 * lesson 72 higher order function practise

let swapingCases = 'moHaMED ALAA mosTaFa';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = 'M1o546ham7881ed';

// let result = swapingCases.split('').map(
//     function(element) {
//         return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
//     }, this
// ).join("");
// console.log(result);

let result = swapingCases.split('').map(
    (element) => element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase(),
    this).join("");
console.log(result);






// let resultTwo = invertedNumbers.map(
//     function(element) {
//         return -element;
//     }, this
// );
// console.log(resultTwo);

let resultTwo = invertedNumbers.map((element) => -element, this);

console.log(resultTwo);

// let resultThree = ignoreNumbers.split('').map(
//     function(element) {
//         return isNaN(parseInt(element)) ? element : "";
//     }, this
// ).join("");
// console.log(resultThree);
let resultThree = ignoreNumbers.split('').map(
    (element) => isNaN(parseInt(element)) ? element : "", this
).join("");
console.log(resultThree);
 */
/**
 * lesson 73  -------------
 * Higher order functions Filters What is the yaAmer


//Get frends with name starts wiht a
let friends = ['Ahmed', 'Sameh', 'sayed', 'Asmaa', 'Amagad', 'Israa'];

//get Even numbers Only
let numbers = [11, 20, 2, 5, 17, 10, 80, 55, 22, 66, 44, 77];

let filteredFriends = friends.filter(function(e) {
    return e.startsWith('A');
})
console.log(filteredFriends);

let filteredNumbers = numbers.filter(function(element) {
    return element % 2 === 0; //اللي هيدفع)(هينطبق علي الشرط )عدي
}, this)
console.log(filteredNumbers);
 */

/**lesson 74 Filter practise amer
//filter words more than 4 characters
let sentence = " I love foood Code Too playing much";

let result = sentence.split(' ').filter(function(ele) {
    return (ele.length <= 4);
}, this).join(' ');
console.log(result);

let mix = "A12B28755ZX";

let resultTwo = mix.split('').filter(function(ele) {
    return !isNaN(ele)
}, this);

resultThree = resultTwo.map(
    function(e) {
        return e * e;
    }, this
);
console.log(resultTwo);
console.log(resultThree);

document.write(resultTwo);
document.write(`<hr>`);
document.write(resultThree);
 */
/**
 * lesson 75 reduce
 * so redcue function accpets Four things
 *( accumulator,currentValue,currentIndex, array)
 */

// let amer = [10, 20, 30, 40, 50];
// let result = amer.reduce(
//     function(accumulator, currentValue, currentIndex, array) {
//         console.log(`The acc => ${accumulator}`);
//         console.log(`The currentIndex => ${currentIndex}`);
//         console.log(`The valueOfcurrentIndex => ${amer[currentIndex]}`);
//         console.log(`The ourArray => ${array}`);
//         console.log(`The acc+currvalue => ${currentValue + accumulator}`);
//         console.log(`###############`);
//         return currentValue + accumulator;
//     }, 1000
// );

// let result = amer.reduce(
//     function(accumulator, currentValue, currentIndex, array) {
//         console.log(` acc ${accumulator +currentValue}`);
//         console.log(`currentValue${currentValue}`);
//         console.log(`currentIndex${currentIndex}`);
//         console.log(`Arr ${array}`);
//         return accumulator + currentValue; //so we need to return the accumulator here uaAmer solved potter
//     }, 50
// );

// let result = amer.reduce(
//     function(accumulator, currentValue, currentIndex, array) {
//         console.log(`Accumulator ${accumulator}`);
//         console.log(`current Index ${currentIndex}`);
//         console.log(`The current Value ${currentValue}`);
//         return accumulator + currentValue;
//     }
// );

// console.log(result);
/**
 * Higher order function reduce practice

let theBiggest = ['Mohamed', 'Alaa', 'amer', 'Battery', 'propaganda_Twoksdkf', 'Propaganda_one', 'Someting', 'Here'];

let removeChar = ['M', "o", '@', 'H', '@', 'M', '@', "e", 'D'];

let result = theBiggest.reduce(
    function(acc, currVal, currInedex, arr) {
        console.log(`The acc is ${acc}`);
        console.log(`the current value is ${currVal}`);
        console.log(`###################`);
        return acc.length > currVal.length ? acc : currVal;
    }
)
console.log(result);

let resultTwo = removeChar.filter(
    function(element, index, arr) {
        return !element.startsWith('@');
    }
).reduce(
    function(acc, currVal, currentIndex, arr) {
        return `${acc}${currVal}`
    }
)
console.log(resultTwo);
//This was simple mision uaAmer we need you again and again
 */

// let allList = document.querySelectorAll('ul li');

//this is the great example uaAmer
//This is the Advanced one here uaAmer
// allList.forEach(
//     function(element, index, array) {
//         element.onclick = function() {
//             //removing the class Active from this element
//             allList.forEach(
//                 function(secondElement) {
//                     secondElement.classList.remove('active');
//                 }, this
//             );
//             //adding class active to the element
//             this.classList.add('active');
//         }
//     }, this
// )

/**
 * lesson 78 challenge

let myStringOne = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z";
let myString = myStringOne.slice(0, myStringOne.length - true);

let result = myString.split(",").filter(
    function(element, array) {
        return isNaN(element); // EElzero_web_Schoolz
    }
).reduce(
    function(acc, ele, currIndex, arr) {
        // console.log(`${acc}${ele}`);
        return `${acc}${ele}`
    },
).split('').map(function(ele, index, arr) {
    if (ele === '_') ele = ' ';
    return ele;
}).reduce(
    function(acc, currentValue, currentIndex, arr) {
        return acc === currentValue ? acc : `${acc}${currentValue}`
    }
).split('').join("")

console.log(result);

let myStringOne = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z";
let zletter = myStringOne[myStringOne.length - true];
console.log(zletter);

// let result = myStringOne
//     .replace("_", " ")
//     .split('')
//     .filter((ele) => ele !== ',' && ele !== isNaN(parseInt(ele)) && ele !== zletter)
//     .reduce((acc, next) => acc !== next ? console.log(`${acc}${next}`) : console.log(`${acc}`));
 */