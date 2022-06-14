//container for the divs W/ ID 
const container = document.createElement("div");
container.id = "Divs";


//append the container to the body
document.body.appendChild(container);

//ideclaring & initializing variables
  let squaresPS = 16;
  //let height = 16;
  
//function that creates div element and class for each one & adds it to container
function createDiv(text) {
    for(let i = 0; i < squaresPS; i++) {
        const divWidth = document.createElement("div");
        container.appendChild(divWidth);
        for(let j = 0; j < squaresPS; j++){
            const divHeight = document.createElement("div");
            divHeight.className = "box";
            divWidth.appendChild(divHeight);
        
            }
        }
    }
createDiv();

// adding eventlistener to .boxes 
const hover = document.getElementsByClassName("box");
for(const loop of hover) {
    loop.addEventListener("mouseover", ()=> {
        loop.setAttribute("style", "background-color:blue;");
    })
}


//same above except its a function for when the button is clicked
function clickMe () {
 const hover2 = document.getElementsByClassName("box");
    for(const loop of hover2) {   
        loop.addEventListener("mouseover", ()=> {
            loop.setAttribute("style", "background-color:blue;");
            });
     }
}

//button that changes grid size to user input and adds changing color to the divs bg
 const button = document.createElement("button");
 button.id = "bttn";
 button.textContent = "Grid Size";
 button.addEventListener("click", function () {
     squaresPS = prompt("Enter desired squares per side");
    if (squaresPS > 100) {
        alert("The max size is 100, please try again");
        return;
    } else if (squaresPS < 1){
        alert("Size has to be at least 1");
        return;
    } else {
        let div2 = document.getElementById("Divs"); //Removes all divs for new grid
        
        while (div2.firstChild) {
            div2.removeChild(div2.firstChild);
        }
         //making new divs for new grid
            createDiv();
            clickMe();
    }

 });
 document.body.appendChild(button);

 


