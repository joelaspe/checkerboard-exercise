function makeSquare(color) {
    const container = document.body;
    container.style.height = "800px";
    container.style.width = "800px";
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    const div = document.createElement('div');
    //div.style.border = "1px solid black";
    div.style.height = "12.5%";
    div.style.width = "12.5%";
    div.style.backgroundColor = color;
    //div.style.opacity = 0.5;
 
    container.appendChild(div);
}

function getRandomColor() {
    //using the RGB model
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}

var isOdd = false;
  
for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        isOdd = !isOdd;
        if(isOdd) {
            makeSquare("red");
        } else {
            makeSquare("black");
        }
    }
    //making a new row, swap the isOdd variable because we need to 'repeat' a color
    isOdd = !isOdd;
}    
    
    
//makeSquare(getRandomColor());


const gradient = document.createElement('div');
gradient.style.height = "800px";
gradient.style.width = "800px";
gradient.style.opacity = 0.5;
gradient.style.background = "linear-gradient(45deg, rgb(2,0,36), rgb(44,44,74), rgb(0,212,255) 100%";
gradient.style.position = "relative";
gradient.style.bottom = "800px";
document.body.appendChild(gradient);


