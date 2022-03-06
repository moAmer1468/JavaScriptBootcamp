//now let's create elements of the header
let pageLogo = document.createElement("p");
let pageHeader = document.createElement("header");
let pageHeaderDiv = document.createElement("div");
let pageHeaderDivList = document.createElement("ul");
// let pageHeaderDivListItem = document.createElement("li"); // [via for loop]and we need to create about four items of the one
let listItemsNames = ["Home", "About", "Service", "Contact"];
/*********starting creating the body elemens */
let pageBody = document.createElement("div");
let singleProduct;
let pageFooter = document.createElement("div");
let pageFooterText = document.createElement("p");


/**  Adding some classes to the Elements of the page ******/
pageHeader.className = "website-head";
pageHeaderDiv.className = "website-head-div";
pageHeaderDivList.className = "website-head-div-list";
pageLogo.className = "website-head-logo";
pageBody.className = "content";
pageFooter.className = "footer";

// pageHeaderDivListItem.className = "website-head-div-list-item";

/**********Adding some text to the li items uaAmer **********/
///// using for loop to create some repeated items for ul
for (let index = 0; index < listItemsNames.length; index++) {
    pageHeaderDivListItem = document.createElement("li");
    pageHeaderDivListItem.id = "website-head-div-list-item";
    pageHeaderDivListItem.append(listItemsNames[index]);
    pageHeaderDivList.appendChild(pageHeaderDivListItem); // [via for loop]and we need to create about four items of the one
}

//creating all the produts item here
for (let index = 0; index < 15; index++) {
    let singleProduct = document.createElement("div");
    singleProduct.className = "product";
    singleProduct.append("description");
    singleProduct.append(`${index+1}`);
    console.log(singleProduct);
    pageBody.appendChild(singleProduct);
}

console.log(pageBody);



/************collecting items together For the header of the page********** */
//collecting items together
pageHeader.appendChild(pageHeaderDiv);
pageHeaderDiv.appendChild(pageHeaderDivList);
pageHeaderDivList.appendChild(pageHeaderDivListItem);
pageHeader.appendChild(pageLogo);
pageLogo.append("Logo");



/*****collecting items together For the Footer  of the page */
pageFooterText.append("CopyRights to mohamed amer");
pageFooter.appendChild(pageFooterText);
/************make [styling] for all the elements uaAmer*********** */
//just for styling the body of the page we failed here
document.body.style = ` margin: 0px;
background-color: rgb(236, 236, 236);
font-family: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif";`;





//************appending the main parts of the page to the body of document */
document.body.appendChild(pageHeader);
document.body.appendChild(pageBody);
document.body.appendChild(pageFooter);