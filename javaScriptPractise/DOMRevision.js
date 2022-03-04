/**
 *  * ------------------------BOM---------------------------
 * lesson 86
 * What is DOM = doucment object models uaAmer
 * the complete power of js here uaAmer find it here
 * ------------------------BOM----------------------------
 */
// var resultOne = document.getElementById('amerDiv');
// console.log(resultOne);
// var resultTwo = document.getElementById('amerLink');
// console.log(resultTwo.innerHTML);
// var resultThree = document.getElementsByTagName('a');
// console.log(resultThree);
// for (let amerIndex = 0; amerIndex < resultThree.length; amerIndex++) {
//     console.log(resultThree[amerIndex].innerText);
// }

// var resultFour = document.getElementsByClassName('amerParagraph');
// console.log(resultFour[0].innerHTML);
// console.log(resultFour[1].innerHTML);

// var resultFive = document.querySelector('.special'); //This will result the first item took this class
// var resultSix = document.querySelector('.amer-div-styling');
// console.log(resultFive);
// console.log(resultSix);
// var resultSeven = document.querySelector('#amerLink'); //The output will be one
// console.log(resultSeven);

// var resultEight = document.querySelectorAll('#amerLink');
// console.log(resultEight); // this will print the list // here

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value); // we will get the value of the input here

// var inputValue = document.forms[0].one.value;
// inputValue = 'This is the new value from mohamed alaa amer ';
// console.log(inputValue);

// console.log(document.links[0].insertBefore);

/**
 *  * ------------------------BOM---------------------------
 * lesson 87
 * What is DOM = doucment object models uaAmer
 * the complete power of js here uaAmer
 * innerHTML
 * textContent
 * change Attribute
 * Change Atttibutes With methods
 * --getAttribute
 * --setAttribute
 * ------------------------BOM----------------------------
 */

// var resOne = document.querySelector('div');
// console.log(resOne.innerHTML); // all what inside the tag // get
// console.log(`Just printing the ****** content of the elements`);
// console.log(resOne.textContent); //this is all what inside the tag except the html tags //get
// resOne.innerHTML = 'This is the new tags <span>NewSpan</span>'
// console.log(resOne.innerHTML);
// console.log(resOne.textContent);
// resOne.textContent = 'This is the new tags <span>NewSpan</span>';
// console.log(resOne.innerHTML);

// document.images[0].src = 'https://google.com';
// document.images[0].title = 'mahamedImageHere';

// document.images[0].className = 'amerImage';


// var myLink = document.querySelector('.amerImage');

// console.log(myLink.getAttribute('class'));
// console.log(myLink.getAttribute('src'));
// console.log(myLink.getAttribute('title'));

// myLink.setAttribute('href', 'http://twitter.com');
// myLink.setAttribute('title', 'Potter Was not here');
// console.log(myLink.getAttribute('href'));
// console.log(myLink.getAttribute('title'));

/**
 *  * ------------------------BOM---------------------------
 * lesson 88
 * Element.attributes
 * Element.hasAttribute
 * Element.hasAttributes
 * Element.removeAttribute
 * ------------------------BOM----------------------------
 */

console.log(document.getElementsByTagName('p')[0].attributes);

console.log(document.getElementsByTagName('p')[0].hasAttributes());
let amerParagraph = document.getElementsByTagName('p')[0];
console.log(amerParagraph);

if (amerParagraph.hasAttribute('data-src')) {
    // amerParagraph.setAttribute('class', 'amer-data-src');
    // amerParagraph.setAttribute('title', 'amer-title');
    if (amerParagraph.getAttribute('data-src') === '') {
        amerParagraph.removeAttribute('data-src')
    } else {
        amerParagraph.setAttribute('data-src', 'New Amer Testing');
    }
} else {
    console.log(`Not found here`);
}