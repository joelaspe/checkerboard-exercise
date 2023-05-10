function makeSquare(color) {
    //const container = document.querySelector('#titleContainer');
    const container = document.body;
    container.style.height = "800px";
    container.style.width = "800px";
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    //div.style.border = "1px solid black";
    div.style.height = "12.5%";
    div.style.width = "12.5%";
 
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


// run the loop 64 times to get an 8x8 grid
for(let i = 0; i < 64; i++)
{
  makeSquare(getRandomColor());
}


