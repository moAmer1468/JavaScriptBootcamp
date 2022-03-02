/**
 * ------------------------BOM---------------------------
 * lesson 86
 * What is DOM = doucment object models uaAmer
 * the complete power of js here uaAmer find it here
 * ------------------------BOM----------------------------


let amer = document.getElementById('my-div');
let byTag = document.getElementsByTagName('p');
let mohamed = document.getElementsByClassName('hello-class')
let querySelector = document.querySelector('.hello-class')
let querySelectorAll = document.querySelectorAll('.hello-class')



console.log(document.body);
console.log(document.title);
console.log(document.forms[0].one.value);
console.log(document.forms[0].two.value);


console.log(amer);
console.log(byTag);
// console.log(mohamed);
console.log(querySelector);
console.log(querySelectorAll);
 */
/** ----------------------### Important One here #####------------------------------
 * lesson 87
 * Get and set Elements contents and attributes


// let myElement = document.querySelector(".mohamed-class");


// console.log(myElement.innerHTML); // so this will return all the content inside the Element including html tags
// console.log(myElement.textContent); //this will ignore the html tags and returns the text only

// myElement.innerHTML = 'This is the new inner html uaAmer  <span>Mohamed amer</span>';
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.textContent = 'This is the new inner html uaAmer  <span> Mohamed amer </span>';
// console.log(`####################`);
// console.log(myElement.textContent);
document.images[0].title = 'This is image title';
document.images[0].src = 'https://facebook.com';
document.images[0].className = 'ImageClass';
document.images[0].id = 'imageId';

let amerLink = document.querySelector('.link')
console.log(amerLink);
amerLink.title = 'This link title'
console.log(amerLink.title);

amerLink.setAttribute('href', 'http://twitter.com');
amerLink.setAttribute('title', 'Twitter');
amerLink.setAttribute('name', 'amerLinkToTwitter');
// This is the power of js
 */
/**
 * lesson 88 chectk Attributs and examples
 * --Element.attributes
 * --Element.hasAttribute
 * --Element.hasAttributes
 * --Elemnt.removeAttribute
 */

console.log(document.getElementsByTagName('p')[0].attributes);

let amer = document.getElementsByTagName('p')[0];
console.log(amer);
console.log(amer.hasAttributes());