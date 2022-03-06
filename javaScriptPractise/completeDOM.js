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
 * before [elment | string]
 * after [element | string]
 * append [element |string]
 * prepend [element | String]
 * remove
 */

// let amerElement = document.getElementById("amer-append");
// let amerPara = document.createElement("p");
// let amerHead = document.createElement("h4");
// console.log(amerElement);

// //if you want to add someText to the paragraph
// //you can use this one here
// amerPara.append("This text is made for only the paragraph uaAmer");
// amerHead.append("This is text is made of the heading only")
//     // to add some elements inside this element at the first or at the end
// amerElement.append("This is the appending text befor the element");
// amerElement.append(amerPara);
// amerElement.prepend(amerHead);

// //for adding some elements after and before the This specific element
// amerElement.after(amerPara);
// amerElement.before(amerHead);
// //now we need to delete this element from the DOM completely
// amerElement.remove();

/**
 *  * ***************lesson 98 ************
 * -----------DOM Traversing-------------
 * next Sibling
 * previous Sibling
 * next ElementSibling
 * previousElementSibling
 * parentElement
 */
// let amerSpan = document.getElementById("span-one");

// console.log(amerSpan);
// console.log(amerSpan.nextElementSibling);
// console.log(amerSpan.nextSibling);
// console.log(amerSpan.parentElement);
// console.log(amerSpan.nextElementSibling);
// console.log(amerSpan.parentElement);
// amerSpan.remove();


// amerSpan.onclick = function() {
//     amerSpan.nextElementSibling.remove();
//     amerSpan.previousSibling.style = "opacity:0";
//     amerSpan.parentElement.style = "opacity:0"
// }

/**
 *  * ***************lesson 99 ************
 * -----------DOM cloning-------------
 * how to clone  elements
 */

// let myElement = document.getElementById("div-id");
// let paraElementCloned = document.getElementById("p-id").cloneNode(true); // so true or false will decide whether  the contents 
// //will be printed or not uaamer
// let pararElementClonedWithoutContent = document.getElementById("p-id").cloneNode(false);
// // changing the id of the element
// paraElementCloned.id = `${paraElementCloned.id}-clone`;

// // console.log(myElement);
// // console.log(paraElement);
// console.log(paraElementCloned);
// myElement.appendChild(paraElementCloned);
// // myElement.appendChild(pararElementClonedWithoutContent);

/**
 *  * ***************lesson 100 ************
 * ------------------addEventListener-------
 * ---------Top Important -------
 */

// let par = document.getElementById('p-clone');
// console.log(par);
// // par.onclick = one;
// // par.onclick = two;
// // // but hint the event is click not onclick
// function one() {
//     console.log(`This is the message One`);
// }

// function two() {
//     console.log("This is the messge Two");
// }

// // so here we have a problem that we can't add two methods for single event
// //here is the power of the eventListeners uaAmer... used to add more than one
// //function to the sinlge event

// par.addEventListener("click", two);
// par.addEventListener("click", one);
// // par.addEventListener("click", "String"); //Error
let para = document.getElementById('p-clone');


para.onclick = function() {
        let newpara = para.cloneNode(true);
        newpara.className = 'cloning'; //we will class for this one called cloning
        document.body.appendChild(newpara);
        // console.log(newpara);
    }
    //hint this is not exist here for the first time uaAmer
    // newpara.onclick = function() {
    //         console.log(`This is not here`);
    //     }
    //so here is the purpose of using Eventlisteners
    //to decide someActions for elements that are not created yet in
    //the page

//so here preparing the cloned element
let clonedElement = document.getElementsByClassName(".cloning");
//adding the click event on this one
clonedElement.onclick = function() {
        console.log('I am cloned ');
    }
    //adding the Eventlistener to be done in the future after generating the element in the page
document.addEventListener("click", function(event) {
    if (event.target.className === 'cloning') {
        console.log("I am cloned here");
    }
});