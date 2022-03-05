/**
 * DOM [create Elements in the page using js only]
 * -create Elements
 * - create Text
 * -create TextNode
 * create Attribute
 * Append Child
 */

// let myVar = document.createElement("div");
// let myAttribute = document.createAttribute('data-custom');
// let potterText = document.createTextNode("This is the product One");
// let mySecondText = document.createTextNode("This is not a usual text here");
// let myComment = document.createComment("This is Div");


// myVar.className = 'mohamedProduct'; //class name exists in the html
// myVar.setAttributeNode(myAttribute); // but data-custom doesn't so we need to use setAttributeNode()
// myVar.setAttribute('mohamed-data-tes', 'For-Testing');

// //append test to Element
// myVar.appendChild(mySecondText);
// myVar.appendChild(myComment);
// myVar.appendChild(potterText)



// //append Element to Body
// document.body.appendChild(mySecondText); //this for body of html
// myVar.appendChild(myComment)



// console.log(myVar);



// let amerVar = document.createElement("div");
// let amerText = document.createTextNode("This is just Text Node uaAmer");
// let amerComment = document.createComment("This is the comment done by amer");
// let myNewlyCreatedAttribute = document.createAttribute('amer-document-attribute');

// //so here we need to append some attributes to this variable here
// amerVar.className = "DivAmerClass";
// amerVar.setAttribute('data-src', 'Value of Data Source');
// amerVar.setAttributeNode(myNewlyCreatedAttribute);
// amerVar.appendChild(amerText);
// amerVar.setAttribute("amer-document-attribute", "ValueOfDocAttri");

// //now we need to append these variables to the console and the document
// console.log(amerVar);

// //now we need to write this to the html page uaAmer
// document.body.appendChild(amerVar)

/// our mission right now is to make simple div in the page
// let mohamedVar = document.createElement("div");
// let mohamedText = document.createTextNode("This is mohamed Text for this page");
// let mohamedComment = document.createComment("This is mohamed Comment for this page");


// mohamedVar.setAttribute('sourceData', "Where is you data");
// mohamedVar.append(mohamedComment)
// mohamedVar.appendChild(mohamedText);
// mohamedVar.className = "mohamedLastClass";


// //now we need to print this one to the console
// console.log(mohamedVar);

// // now we need to add this one  to the html page
// document.body.appendChild(mohamedVar)


/**
 * ***************lesson 90 ************
 * DOM [create Elements in the page using js only]
 * creating hundred elements in the page using For loop
 * the Power of js
 */

//first let's create our main element ua Amer
// for (let index = 0; index < 100; index++) {
//     let mainElement = document.createElement("div");
//     let myheading = document.createElement("h2");
//     let myParagraph = document.createElement("p");


//     let mytitle = document.createTextNode(`Product Title ${index}`)
//     let myProduct = document.createTextNode(`Product ${index}`)
//     let myText = document.createTextNode("description")

//     //now let add the class to the the mainElement
//     mainElement.className = "class-name-mohamed";

//     //adding some details here
//     myheading.appendChild(mytitle);
//     myParagraph.appendChild(myText);


//     //adding elements to each others
//     mainElement.appendChild(myheading);
//     mainElement.appendChild(myParagraph);

//     mainElement.appendChild(myProduct);


//     //now we need to display this to the body of html
//     document.body.appendChild(mainElement);
// }


/**
 * ***************lesson 91 ************
 * DOM [how to deal with the children in DOM ]
 * how to deal with children in the document
 * children //just html tags here
 * childNodes // all nodes in the wanted One
 * firstChild
 * lastChild
 * firstChild
 * firstElementChild
 * lastElementChild
 */

// let myElement = document.querySelector("div");

// // console.log(myElement.childNodes);
// console.log(`This is break line`);
// console.log(myElement.children[0]);

// // let myParagraph = myElement.children[2].innerHTML;
// // console.log(myParagraph); // so this is the old one here

// console.log(myElement.lastElementChild);
// console.log(myElement.firstElementChild); // so this is first element not

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstChild);



/**
 * ***************lesson 92 ************
 * --------------DOM[events]--------------
 * use Events on js
 * --onclick
 * --oncontectmenu
 * --onmouseenter
 * --onmouseleave
 * -
 * --onload
 * --onresize
 * -
 * onfocus
 * onblur
 * onsubmit
 */

// let mybtn = document.querySelector('#mybtn');
// console.log(mybtn);
// mybtn.onclick = function() {
//     console.log(`Clicked`);
// }

// mybtn.oncontextmenu = function() {
//     console.log('OurOwnmenu');
// }

// mybtn.onmouseenter = function() {
//     console.log('entered');
// }

// mybtn.onmouseleave = function() {
//     console.log('we leaved ');
// }
// window.onscroll = function() {
//     console.log('we just made a simple scroll uaAmer');
// }
// window.onresize = function() {
//     console.log('We have made simple resize of this window');
// }

/**
 * ***************lesson 93 ************
 * --------------DOM[events]--------------
 * Validate Form Practice
 * -prevent default
 */



// let amerusernameField = document.querySelector("[name='amer-username'");
// let amerageField = document.querySelector("[name='amer-age'");


// console.log(amerusernameField);

// document.forms[0].onsubmit = function(event) {
//     let userValid = false;
//     let ageValid = false;

//     if (amerusernameField.value !== "" && amerusernameField.value.length <= 10) {
//         userValid = true;
//         console.log(amerusernameField.value);
//         console.log('This is valid one here ');
//     }
//     if (amerageField.value !== "") {
//         console.log(amerageField.value);
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false) {
//         console.log('This is not good');
//         event.preventDefault();
//     }
// }


/**
 * ***************lesson 94 ************
 * --------------DOM[events Simulation]--------------
 * click
 * focus
 * blur
 */

// let two = document.querySelector('.two');
// let one = document.querySelector('.one');
// let amerFocus = false;
// window.onload = function() {
//     one.focus();
// }


// how to open the link after focus here
// one.onblur = function() {
//     document.links[0].click();
// }

/**
 * ***************lesson 94 ************
 * --------------DOM[Class List]--------------
 * list
 * contains
 * item(index)
 * add
 * remove
 * toggle
 */

// let myElement = document.getElementById('amer-div');

// // console.log(myElement);
// // console.log(myElement.classList);

// myElement.classList.add('PotterTwoClass');
// console.log(myElement.classList);
// console.log(typeof myElement.classList);
// console.log(myElement.classList.contains("show"));
// console.log(myElement.classList.contains("potter"));
// console.log(myElement.classList.contains("mohamed"));
// console.log(myElement.classList.item("2"));


// // myElement.onclick = function() {
// //     myElement.classList.remove("show", "test");
// // }

// // myElement.onclick = function() {
// //     myElement.classList.add("show", "test");
// // }

// myElement.onclick = function() {
//     myElement.classList.toggle("SomethingHere"); // this is so useful in alot of applications uaAmer
// }


/**
 * ***************lesson 96 ************
 * --------------DOM[CSS tyling and Stylesheets]--------------
 *
 */
// first we need to hold our element
// let myElement = document.getElementById("div-style");
// //second we need to put each property in a sinlge line of code
// myElement.style.color = "green";
// myElement.style.backgroundColor = "yellow";
// myElement.style.fontSize = "20px";
// myElement.style.border = "3px solid black";

// //now we need to put all the properties in one line of code
// myElement.style.cssText = `
// color: red;
// font-size: 20px;
// background-color: tomato;
// font-weight: 500;
// border: 3px dashed red;
// `;
// // so now we need to remove one property
// myElement.style.removeProperty("color");
// myElement.style.removeProperty("background-color");
// myElement.style.removeProperty("border");

// //we need to set property using setProperty method
// myElement.style.setProperty("background-color", "red", "important");
// myElement.style.setProperty("font-weight", "900", "important");

//so now how can you modify the styleSheet uaAmer using js
//using cssRules
// console.log(document.styleSheets[0]);
/**
 * ***************lesson 97 ************
 * --------------DOM[CSS tyling and Stylesheets]--------------
 * Before After Prepend Pppend Remove
 */