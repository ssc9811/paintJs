const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 50;

let paingting = false;

function stopPainting(){
    paingting = false;
}

function startPainting(){
    paingting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!paingting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    paingting = true;
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting)
}