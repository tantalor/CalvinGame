document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);
var N=0, R=1, L=-1, U=3;

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

function move(level, guy, upWait, flipWait, gravity){
	var wall=false;
	if(pressed==U){
		flipWait=false;
		if(!upWait){
			return checkPortal(level,guy,upWait, flipWait, gravity);
		}else{
			return makeMove(level, guy, true, flipWait, gravity);
		}
	}else{
		for(f of levels[level].floor){
			if(f.type=="wall"){
				if((gravity==1 && guy.y>f.y+1 && guy.y<f.y+f.width+2)
						||(gravity==-1 && guy.y>480-f.y-f.width+1 && guy.y<480-f.y+2)){
						if(guy.x-f.x<2 && 0<guy.x-f.x && pressed==L){
							wall=true;
						}else if(f.x-guy.x<8 && 0<f.x-guy.x && pressed==R){
							wall=true;
						}
					}
			}
		}
		
		if(pressed==R && !wall){
			guy.x+=1;
			flipWait=false;
		}else if(pressed==L && !wall){
			guy.x-=1;
			flipWait=false;
		}
		
		upWait=false;
	
		return makeMove(level, guy, upWait, flipWait, gravity)
	}
}




function makeMove(level, guy, upWait, flipWait, gravity){
	var safe=false;
	for(f of levels[level].floor){
		if(f.type!="wall" && guy.x-5<f.width*cos(gravity*f.theta)+f.x
			&& guy.x>f.x-8
			&&guy.y-(240*(1-gravity)+gravity*f.y)-abs(guy.x-5-f.x)*tan(gravity*f.theta)<2){
			if(guy.y-(240*(1-gravity)+gravity*f.y)-abs(guy.x-5-f.x)*tan(gravity*f.theta)>1){
				guy.y-=1;
				if(gravity*f.theta<-Math.PI/4){guy.y-=1;}
				safe=true;
				if(pressed==R){guy.x-=1;}
				else if(pressed==L){guy.x+=1;}
				if(f.type=="flip" && !flipWait){
					guy.x=f.x+f.width/2;
					pressed=N;
					gravity = -gravity;
					drawBackground(level,gravity);
					guy.y=480-(guy.y-5)
					flipWait=true;
				}

				guy.fallingFrames=0;
				guy.theta=gravity*f.theta;
			}else if(f.type!="wall" && guy.y-(240*(1-gravity)+gravity*f.y)-abs(guy.x-5-f.x)*tan(gravity*f.theta)>0){
				safe=true;
				guy.theta=gravity*f.theta;
				guy.fallingFrames=0;
				if(f.type=="flip" && !flipWait){
					guy.x=f.x+f.width/2;
					pressed=N;
					gravity=-gravity;
					pause=true;
					drawFlip(level,gravity);
					guy.y=480-(guy.y-5);
					flipWait=true;
				}
			}
		}
	}
	
	if(!safe){
		guy.y+=1;
		if(pressed==R){guy.x-=1;}
		else if(pressed==L){guy.x+=1;}
		guy.fallingFrames +=1;
		if(guy.fallingFrames==2){
			if(pressed==R){guy.x+=3;}
			else if(pressed==L){guy.x-=1;}
			guy.theta=0;
		}
	}
	if(guy.y>500){
		gravity=0;
	}
	guy.ctx.clearRect(0,0,guy.canvas.width,guy.canvas.height);
	drawGuy(guy);
	return([guy,upWait, flipWait, gravity]);
}


function drawGuy(guy){
	guy.ctx.translate(guy.x-4,guy.y);
	guy.ctx.rotate(guy.theta);
	guy.ctx.font = "20px Arial";
	guy.ctx.strokeStyle="black";
	guy.ctx.strokeText('\u1330',0,0);
	guy.ctx.setTransform(1,0,0,1,0,0);
}

function checkFlag(guy,level,gravity){
	if(pow(guy.x-4-levels[level].flagX,2)+pow(guy.y-(240*(1-gravity)+gravity*levels[level].flagY),2)<100
		&& (abs(guy.theta-(Math.PI/2*(1-gravity)+gravity*levels[level].flagTheta))<2 )){
		
		return true;
		}else{return false;}
}

function checkPortal(level, guy, upWait, flipWait, gravity){
	for(p of levels[level].portals){
			if((guy.x+1-p.x[0])*(guy.x+1-(p.x[0]+10))<0
			&& (guy.y+2*gravity-(240*(1-gravity)+gravity*p.y[0]))*(guy.y+2*gravity-(20+240*(1-gravity)+gravity*p.y[0]))<0){
				guy.x=p.x[1]+1+20*gravity*sin(p.theta[1]);
				guy.y=240*(1-gravity)+gravity*p.y[1]-2*gravity*p.loc[1];
				guy.theta=gravity*p.theta[1];
				upWait=true;
				return makeMove(level, guy, upWait, flipWait, gravity)
			}else	if((guy.x+1-p.x[1])*(guy.x+1-(p.x[1]+10))<0
				&& (guy.y+2*gravity-(240*(1-gravity)+gravity*p.y[1]))*(guy.y+2*gravity-(20+240*(1-gravity)+gravity*p.y[1]))<0){
					guy.x=p.x[0]+1+20*gravity*sin(p.theta[0]);
					guy.y=240*(1-gravity)+gravity*p.y[0]-2*gravity*p.loc[0];;
					guy.theta=gravity*p.theta[0];
					upWait=true;
					return makeMove(level, guy, upWait, flipWait, gravity)
				}
	}
	return makeMove(level, guy, upWait, flipWait, gravity);
	
}



