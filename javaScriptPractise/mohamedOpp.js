/**
 * What are the objects uaAmer
 *lesson 79-80
 */

// What are the dynamic property name 
// var myVar = 'country';
// let user = {
//     //variables
//     name: 'mohamed',
//     age: 38,
//     "country name": "Egypt",
//     'amer-name': 45,
//     'country': "syria",


//     //methods
//     sayHello: function() {
//         return `hello`;
//     },
// };
//this is the bracket notation uaAmer 
//this is the best one here
//bracket notation is better than the dot notation
//because it doesn't have any limitations
// console.log(user["country name"]);
// console.log(user['age']);
// console.log(user['name']);
// console.log(user['amer-name']);
// console.log(user[myVar]);

/**
 * What are the objects uaAmer
 *lesson 81

let available = false;
let user = {
    name: 'Mohamed',
    age: 55,
    country: 'Egypt',
    available: true,
    addresses: {
        usa: 'New york',
        egypt: {
            one: 'cario',
            two: 'Giza',
        }
    },
    checkAv: function() {
        if (available === true) {
            return `This person is available to hire`;
        } else {
            return `This person is not available to hire`;
        }
    }
}
console.log(user.age);
console.log(user.checkAv());
console.log(user.addresses['egypt']['one']);
console.log(`This is from global ${available}`);
console.log(`This is from user object ${user.available}`);
 */
/**
 * lesson 82  Create object with new keyword

let amer = {
    age: 22
}; //this is the old one here
let mohamed = new Object({
    age: 20,
}); //this is the new one here

console.log(amer.age);
console.log(amer.age);
//now we need to update the values inside the objects
mohamed.age = 55;
amer.age = 55;

console.log(amer.age); //55
console.log(mohamed.age); //55
//this is fine uaAmer

alaa = new Object({ name: 'Mohamed Alaa amer ', country: 'Egypt', title: 'جامد' })
console.log(alaa.country); //جامد
console.log(alaa.title);
 */


/**
 *  lesson 83 This keyword
 * This refers to the owner of the property
 * search about something called strict mode because this changes in the strick Mode


console.log(this); //this will bring the document
document.getElementById('cl').onclick = function(params) {
    console.log(this); //this will return the owner of the function uaAmers (button)
}

let user = {
    name: 'mohaemd',
    age: 55,
    ageIndays: function() {
        console.log(this); // you have to know what is the this keyword
        return this.age * 365;
    }
}
user.age = 22
console.log(user.ageIndays());
 */

/**lesson 84 create object with create method uaAmer
 * Create method  using some Prototyping objects uaAmer


let user = {
    name: 'mohaemd',
    age: 10,
    ageIndays: function() {
        // console.log(this); // you have to know what is the this keyword
        return this.age * 2;
    }
}

let amer = Object.create(user);
amer.age = 20;
amer.country = 'Egypt';
amer.age = 100;

console.log(amer.name);
console.log(amer.age);
console.log(amer.country);
//here we need to implement the function uaAmer
console.log('This is the fucntion');
console.log(`This is the amer Object function ${amer.ageIndays()}`);
console.log(amer.ageIndays());
console.log(`This is awesome uaAmer`);
 */
/**
 * lesson 85 create With assign method
 * This is used to create new object from anohter objects (one or more )
 * used to create new one from combining two or more objects together



let one = {
    name: 'mohaemd',
    age: 10,
}

let two = {
    country: 'usa',
    phone: '0101654200',
    title: 'Engineer',
}
let amertarget = {};

let targetOne = Object.assign(amertarget, one, two, { prop: '1', prop2: '2' });
console.log(targetOne);
console.log(`here is the power of using assign method to create new object from another ones`);
 */