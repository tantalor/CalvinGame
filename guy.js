document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var rightPressed=false;
var leftPressed=false;
var upPressed=false;


function keyDownHandler(e) {
    if(e.key == "ArrowRight") {
      rightPressed = true;
    }
    else if(e.key == "ArrowLeft") {
      leftPressed = true;
    }
		else if(e.key=="ArrowUp"){
			upPressed=true;
		}
}

function keyUpHandler(e) {
	if(e.key == "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key == "ArrowLeft") {
		leftPressed = false;
  }
	else if(e.key=="ArrowUp"){
		upPressed=false;
	}

}



function move(floor, x, y, theta,frames,ctx,canvas,portals,upWait){
	
	if(upPressed){
		if(!upWait){
			upWait=true;
			return checkPortal(x,y,portals,floor,theta,frames,ctx,canvas,upWait);
		}else{
			return [x,y,theta,frames,true];
		}
	}else{
		if(rightPressed) {
			x += 1;
		}
		else if(leftPressed) {
			x -= 1;
		}
		upWait=false;
		
		return makeMove(floor,x,y,theta,frames,ctx,canvas,upWait);
	}
	
	

}

function makeMove(floor,x,y,theta,frames,ctx,canvas,upWait){
	var safe=false;
	for(var i=0;i<floor.length;i++){
		if(x<floor[i].width*Math.cos(floor[i].theta)+floor[i].floorX-1 
			&& x>floor[i].floorX-1 
			&& y-floor[i].floorY-Math.abs(x-floor[i].floorX)*Math.tan(floor[i].theta)<2){
			if(y-floor[i].floorY-Math.abs(x-floor[i].floorX)*Math.tan(floor[i].theta)>1){
				y-=1;
				safe=true;
				if(rightPressed){
					x-=1;
				}else if(leftPressed){
					x+=1;
				}
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
	
	return([x,y,theta,frames,upWait])
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
		return true;
	}else{return false;}
}

function checkPortal(x,y,portals,floor,theta,frames,ctx,canvas,upWait){
	for(var i=0;i<portals.length;i++){
		if((x-portals[i].portalX[0])*(x-portals[i].portalX[0])+(y-portals[i].portalY[0])*(y-portals[i].portalY[0])<25){
			x=portals[i].portalX[1];
			y=portals[i].portalY[1];
			theta=portals[i].theta[1];
		}else if((x-portals[i].portalX[1])*(x-portals[i].portalX[1])+(y-portals[i].portalY[1])*(y-portals[i].portalY[1])<25){
				x=portals[i].portalX[0];
				y=portals[i].portalY[0];
				theta=portals[i].theta[0];
			}
			return makeMove(floor,x,y,theta,frames,ctx,canvas,upWait)
	}
}
