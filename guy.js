document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var rightPressed=false;
var leftPressed=false;


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



function move(floor, x, y, theta,frames,ctx,canvas){
	if(rightPressed) {
	    x += 1;
	}
	else if(leftPressed) {
	    x -= 1;
	}
	var safe=false;
	for(var i=0;i<floor.length;i++){
		if(x<floor[i].width*Math.cos(floor[i].theta)+floor[i].floorX-1 && x>floor[i].floorX-1 && y-floor[i].floorY-Math.abs(x-floor[i].floorX)*Math.tan(floor[i].theta)<2){
			if(y-floor[i].floorY-Math.abs(x-floor[i].floorX)*Math.tan(floor[i].theta)>1){
				y-=1;
				safe=true;
				frames=0;
				theta=floor[i].theta;
			}else if(y-floor[i].floorY-Math.abs(x-floor[i].floorX)*Math.tan(floor[i].theta)>0){
				safe=true;
				theta=floor[i].theta;
				frames=0;
			}
		}
	}
	if(safe==false){
		y+=1;
		if(rightPressed){
			x-=1;
		}else if(leftPressed){
			x+=1;
		}
		frames+=1;
		if(frames>3){
			theta=0;
			frames=0;
		}	
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawGuy(x,y,theta,ctx);
	
	return([x,y,theta,frames])
}


function drawGuy(x,y,theta,ctx) {
	ctx.translate(x,y);
	ctx.rotate(theta);
	ctx.font = "20px Arial"
	ctx.strokeStyle = 'black';
	ctx.strokeText('\u1330',0,0);
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	
}



function checkFlag(x,y,flagX,flagY){
	if((x-flagX)*(x-flagX)+(y-flagY)*(y-flagY)<100){
		console.log((x-flagX)*(x-flagX)+(y-flagY)*(y-flagY));
		return true;
	}else{return false;}
}
