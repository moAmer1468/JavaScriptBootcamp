let user = {
    theName: "Mohamed alaa amer",
    theAge: 23,
    //Putting some Methods here uaAmer
    sayHello: function() {
        console.log(`Say hello to mohamed Alaa amer`);
    }
};

console.log('the user name is ' + user.theName);
/**
 * Object Dig Deeper
 * -Dot notation
 * -Dynamic Property name .. like talent in the following example
 */

let talent = "programmer";
let secondUser = {
    // so here any valid String can be used as a property name uaAmer
    theAge: 32,
    theName: 'mohamed potter',
    "country name": "Egypt",
    "telephone number": "01016541800",
    programmer: true,
}

console.log(secondUser["country name"]);
console.log(secondUser["theAge"]);
console.log(secondUser["telephone number"]);
console.log(secondUser[talent]);
console.log(secondUser.programmer);

/**
 * Nested Objects And Trainings
 *
 */