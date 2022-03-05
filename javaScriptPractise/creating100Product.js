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

//*******************making simple revision uaAmer here */
for (let index = 0; index < 100; index++) {
    let amerMainElement = document.createElement("div");
    let amerPara = document.createElement("p");
    let amerHeading = document.createElement("h2");


    let productTile = document.createTextNode("Product Title");
    let productText = document.createTextNode("our Product here");
    let productDescription = document.createTextNode("description");


    // now we need to add some texts to the elements here uaAmer

    amerHeading.appendChild(productTile);
    amerPara.appendChild(productText);

    amerMainElement.appendChild(amerHeading);
    amerMainElement.appendChild(amerPara);
    amerMainElement.append(productDescription);

    // now we need to add theses to our document

    document.body.appendChild(amerMainElement);

}