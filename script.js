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
// run the loop 64 times to get an 8x8 grid
var isOdd = true;
for(let i = 0; i < 8; i++)
{
    for(let j = 0; j < 8; j++)
    {
        if(isOdd) {
            makeSquare("red");
            isOdd = false;
        } else {
            makeSquare("black");
            isOdd = true;
        }
    }
    //making a new row, swap the isOdd variable because we need to 'repeat' a color
    if(isOdd) {
        isOdd = false;
    } else {
        isOdd = true;
    }
    
}


