var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font = 'italic 20px Verdana';
var rightPressed=false;
var leftPressed=false;
var floor=[{floorX:10,floorY:35,width:100}, {floorX:50,floorY:100,width:200}];

var x=10;
var y=30;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function drawFloor(){
	for(var i=0;i<floor.length;i++){
		ctx.beginPath();
		ctx.rect(floor[i].floorX,floor[i].floorY,floor[i].width,2);
		ctx.fillStyle="black";
		ctx.fill();
		ctx.closePath();
	}
}


function keyDownHandler(e) {
    if(e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "ArrowLeft") {
        leftPressed = false;
    }
}



function move(){
	if(rightPressed) {
	    x += 1;
	}
	else if(leftPressed) {
	    x -= 1;
	}
	var safe=false;
	for(var i=0;i<floor.length;i++){
		if(x<floor[i].floorX+floor[i].width && x>floor[i].floorX-1 && y==floor[i].floorY-2){
			safe=true;
		}
	}
	if(safe==false){y+=1;}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawFloor();
	drawGuy(x,y)
}


function drawGuy(x,y) {
	ctx.strokeStyle = 'black';
	ctx.strokeText('\u1330',x,y);
}

setInterval(move, 10);


