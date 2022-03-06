/**
 * here is the power of using the Event Listener uaAmer
 */


let myP = document.getElementById("p-clone");
// myP.onclick = one;
// myP.onclick = two;
//so here we can't add more than one function
//for the element
//and here is the power of the event listeners uaAmer
function one() {
    console.log(`This is the function one`);
}

function two(params) {
    console.log(`This is the function Two`);
}
myP.addEventListener("click", one);
myP.addEventListener("click", two);

myP.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(`This is the function one Event`);
})
myP.addEventListener("click", function(e) {
    console.log(e.target);
    console.log(`This is the function number Two uaAmer`);
})
myP.addEventListener("click", function(event) {
    console.log(event.target);
    let clone = event.target.cloneNode(true);
    // console.log(clone);
    clone.className = "amer-clone";
    //so we need to add this element to our document uaAmer
    document.body.appendChild(clone);
});

document.addEventListener("click", function(event) {
    if (event.target.className === "amer-clone") {
        console.log(`This is our new cloned element`);
    }
})