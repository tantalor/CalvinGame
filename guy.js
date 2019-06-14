document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);
var N=0;
var R=1;
var L=2;
var U=3;

var pressed=N;

function keyDownHandler(e){
	if(e.key=="ArrowRight"){
		pressed=R;
	}else if(e.key=="ArrowLeft"){
		pressed=L;
	}else if(e.key=="ArrowUp"){
		pressed=U;
	}
}

function keyUpHandler(e){
	pressed=N;
}

function move(level, guy, upWait, gravity){
	if(pressed==U){
		if(!upWait){
			return checkPortal(level,guy,upWait,gravity);
		}else{
			return [guy, true, gravity];
		}
	}else{
		if(pressed==R){
			guy.x+=1;
		}else if(pressed==L){
			guy.x-=1;
		}
		
		upWait=false;
		return makeMove(level, guy, upWait, gravity)
	}
}




function makeMove(level, guy, upWait, gravity){
	var safe=false;
	
	for(f of levels[level].floor){
		if(guy.x<f.width*cos(f.theta)+f.x-1
			&& guy.x>f.x-1
			&&guy.y-f.y-abs(guy.x-f.x)*tan(f.theta)<2){
			if(guy.y-f.y-abs(guy.x-f.x)*tan(f.theta)>1){
				guy.y-=1;
				safe=true;
				if(pressed==R){guy.x-=1;}
				else if(pressed==L){guy.x+=1;}

				guy.fallingFrames=0;
				guy.theta=f.theta;
			}else if(guy.y-f.y-abs(guy.x-f.x)*tan(f.theta)>0){
				safe=true;
				guy.theta=f.theta;
				guy.fallingFrames=0;
			}
		}
	}
	
	if(!safe){
		guy.y+=1;
		if(pressed==R){guy.x-=1;}
		else if(pressed==L){guy.x+=1;}
		guy.fallingFrames +=1;
		if(guy.fallingFrames>3){
			guy.theta=0;
			guy.fallingFrames=0;
		}
	}
	
	guy.ctx.clearRect(0,0,guy.canvas.width,guy.canvas.height);
	drawGuy(guy);
	return([guy,upWait,gravity]);
}


function drawGuy(guy){
	guy.ctx.translate(guy.x,guy.y);
	guy.ctx.rotate(guy.theta);
	guy.ctx.font = "20px Arial";
	guy.ctx.strokeStyle="black";
	guy.ctx.strokeText('\u1330',0,0);
	guy.ctx.setTransform(1,0,0,1,0,0);
}

function checkFlag(guy,level){
	if(pow(guy.x-levels[level].flagX,2)+pow(guy.y-levels[level].flagY,2)<100
		&& abs(guy.theta-levels[level].flagTheta)<1){
		
		return true;
		}else{return false;}
}

function checkPortal(level, guy, upWait, gravity){
	for(p of levels[level].portals){
		if(pow(guy.x-p.x[0],2)+pow(guy.y-p.y[0],2)<20){
			guy.x=p.x[1];
			guy.y=p.y[1]-2*cos(p.theta[1]);
			guy.theta = p.theta[1];
		}else if(pow(guy.x-p.x[1],2)+pow(guy.y-p.y[1],2)<20){
			guy.x=p.x[0];
			guy.y=p.y[0]-2*cos(p.theta[0]);
			guy.theta = p.theta[0];
		}	
	}
	upWait=true;
	return makeMove(level, guy, upWait, gravity);
}

