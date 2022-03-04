// let user = {
//     theName: "Mohamed alaa amer",
//     theAge: 23,
//     //Putting some Methods here uaAmer
//     sayHello: function() {
//         console.log(`Say hello to mohamed Alaa amer`);
//     }
// };

// console.log('the user name is ' + user.theName);
// /**
//  * Object Dig Deeper
//  * -Dot notation
//  * -Dynamic Property name .. like talent in the following example
//  */

// let talent = "programmer";
// let secondUser = {
//     // so here any valid String can be used as a property name uaAmer
//     theAge: 32,
//     theName: 'mohamed potter',
//     "country name": "Egypt",
//     "telephone number": "01016541800",
//     programmer: true,
// }

// console.log(secondUser["country name"]);
// console.log(secondUser["theAge"]);
// console.log(secondUser["telephone number"]);
// console.log(secondUser[talent]);
// console.log(secondUser.programmer);

// /**
//  * Nested Objects And Trainings
//  *
//  */

// // hint this called literal notation
// worker = {
//     name: 'mohamed alaa amer',
//     age: 74,
//     phoneNumber: {
//         firstNumber: "01016541800",
//         secondNumber: {
//             amer: "01016541800000",
//             potter: "456645"
//         },
//         thirdNumber: "010165418085",
//         fourthNumber: "010165418085",
//     },
//     place: {
//         placeOne: "Tanta",
//         placeTwo: "america",
//         placeThree: "Canda",
//     },
//     isAvailable: true,
//     hire: function() {
//         if (this.isAvailable) {
//             console.log(`This man is free right now `);
//         } else {
//             console.log(`This man is not free rigth now `);
//         }
//     }
// }

// worker.hire();
// worker.isAvailable = false;
// worker.hire();
// console.log(worker.phoneNumber.firstNumber);
// console.log(worker.phoneNumber);
// console.log(worker["phoneNumber"].secondNumber['amer']);
// //now we need to see how to use new operator in order to make
// // the object

// // let car = new Object();
// car = {};
// car.name = 'Mohamed car';
// car.age = '348';
// car['model'] = 1999;
// console.log(car.age);
// console.log(car['model']);
// console.log(car.model);

// car.model = 1880;
// console.log(car.model);
// console.log('This is so Good ');

// // mohamedNumber = 200; // why this is not working with let  keyword rightnow
// // console.log(window.mohamedNumber);
// // console.log(this);

// function sayHelloForWindow() {
//     console.log(this);
//     return this;
// }

// if (sayHelloForWindow() === window) {
//     // so don't forget to put the () of the function
//     console.log(`They are the same one here`);
// } else {
//     console.log(`They are not equal here`);
// }

// document.getElementById('amerbtn').onclick = function() {
//     console.log(this); // so this here will equal to the button
// }
// //  let's see how we could use the create method with objects and prototypes

let user = {
    name: 'Abo Alaa',
    age: 60,
    doubleAge: function() {
        return this.age * 2; //using this will make great difference here
    }
};
console.log(user);
console.log(user.age);
// now we need to use the create method here uaAmer

let copyObject = Object.create(user); //so user will be used as a prototype here
copyObject.age = 100;
console.log(`This is the second one`);
console.log(copyObject.doubleAge());
// create the object using the assign method here uaAmer
//so right now we have about Two methods for creating the objects
let obj1 = {
    prop1: 50000,
    method1: function() {
        console.log(`This is the obj1 Method`);
    }
};
let obj2 = {
    prop1: 3,
    method2: function() {
        console.log(`This is the obj2 Method`);
    }
}
let obj3 = {

    method3: function() {
        console.log(`This is the obj3 Method`);
    }
}

let targetObject = {
    method4: function() {
        console.log(`This is the target Object`);
    }
}
let finalObject = Object.assign(targetObject, obj1, obj2, obj3);

console.log(finalObject);
let newObject = Object.assign({}, obj1, { name: 'amer', age: 48 }, obj3);
console.log(newObject);
newObject["country name"] = 'Egypt';
console.log(newObject.name);
console.log(newObject['country name']);
// let's create some objects like head first js
function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

var amerDog = new Dog('AmerDogName', 'breed', 12);
console.log(amerDog.name);