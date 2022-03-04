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

let myElement = document.querySelector("div");

// console.log(myElement.childNodes);
console.log(`This is break line`);
console.log(myElement.children[0]);

// let myParagraph = myElement.children[2].innerHTML;
// console.log(myParagraph); // so this is the old one here

console.log(myElement.lastElementChild);
console.log(myElement.firstElementChild); // so this is first element not

console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstChild);



/**
 * ***************lesson 92 ************

 */