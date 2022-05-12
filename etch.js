//get body element to add to it
//const body = document.body

//document fragment to add all the divs to add that to container and that to body
const fragment = document.createDocumentFragment();

//container for the divs W/ class 
const container = document.createElement("div");
container.setAttribute("class", "container");






//array with 16x16 divs
let divs = [
    createDiv("div1"),
    createDiv("div2"),
    createDiv("div3"),
    createDiv("div4"),
    createDiv("div5"),
    createDiv("div6"),
    createDiv("div7"),
    createDiv("div8"),
    createDiv("div9"),
    createDiv("div10"),
    createDiv("div11"),
    createDiv("div12"),
    createDiv("div13"),
    createDiv("div14"),
    createDiv("div15"),
    createDiv("div16"),
    createDiv("div17"),
    createDiv("div18"),
    createDiv("div19"),
    createDiv("div20"),
    createDiv("div21"),
    createDiv("div22"),
    createDiv("div23"),
    createDiv("div24"),
    createDiv("div25"),
    createDiv("div26"),
    createDiv("div27"),
    createDiv("div28"),
    createDiv("div29"),
    createDiv("div30"),
    createDiv("div31"),
    createDiv("div32"),
    createDiv("div33"),
    createDiv("div34"),
    createDiv("div35"),
    createDiv("div36"),
    createDiv("div37"),
    createDiv("div38"),
    createDiv("div39"),
    createDiv("div40"),
    createDiv("div41"),
    createDiv("div42"),
    createDiv("div43"),
    createDiv("div44"),
    createDiv("div45"),
    createDiv("div46"),
    createDiv("div47"),
    createDiv("div48"),
    createDiv("div49"),
    createDiv("div50"),
    createDiv("div51"),
    createDiv("div52"),
    createDiv("div53"),
    createDiv("div54"),
    createDiv("div55"),
    createDiv("div56"),
    createDiv("div57"),
    createDiv("div58"),
    createDiv("div59"),
    createDiv("div60"),
    createDiv("div61"),
    createDiv("div62")
    
];

//function that creates div element and class for each one
function createDiv(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "box");
    div.appendChild(document.createTextNode(text));
    return div;

}

//loop to add the 16x16 divs to the fragment & add to container
for(let i = 0; i < divs.length; i++){
    container.appendChild(divs[i]);
    //fragment.appendChild(divs[i]);     
}

//appending fragment with the divs to the body
//document.body.appendChild(fragment);

//appending the container to the body
document.body.appendChild(container);







