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
	if(pressed==U){
		flipWait=false;
		if(!upWait){
			return checkPortal(level,guy,upWait, flipWait, gravity);
		}else{
			return makeMove(level, guy, true, flipWait, gravity);
		}
	}else{
		var wall=false;
		wall=checkWall(level, guy, gravity,pressed);
		
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


function checkWall(level, guy, gravity,direction){
	for(w of levels[level].wall){
		if((gravity==1 && guy.y-2>w.top+1 && guy.y<w.bottom+2)
					||(gravity==-1 && guy.y-2>450-w.bottom+1 && guy.y<450-w.top+2)){
					if(guy.x-w.x<2 && 0<guy.x-w.x && direction==L){
						return true;
					}else if(w.x-guy.x<8 && 0<w.x-guy.x && direction==R){
						return true;
					}
				}
	}
	return false;
}


function makeMove(level, guy, upWait, flipWait, gravity){
	var safe=false;
	var frozen=false;

	for(f of levels[level].floor){
		var tan=gravity*(f.right.y-f.left.y)/(f.right.x-f.left.x);
		var checky = guy.y-225*(1-gravity)-gravity*f.left.y-abs(guy.x-5-f.left.x)*tan;
		if(guy.x-5<f.right.x && guy.x>f.left.x-8
			&&checky<3){
			if(checky>1
			 && !(tan<0 && pressed==L && guy.x-5-f.left.x<10)
			 && !(tan>0 && pressed==R && f.right.x-guy.x-5<10)){
				guy.y-=1;
				safe=true;
				frozen=checkFrozen(guy,f,level,gravity);
				if(!frozen){
					if(pressed==R){guy.x-=1;}
					else if(pressed==L){guy.x+=1;}
				}
				if(f.type=="move"){
					var [xupdate,yupdate]=f.guyChange(guy.time,guy.x,guy.y);
					var direction=N;
					if(xupdate<f.left.x){direction=L;}
					else{direction=R;}
					var wall=checkWall(level,guy, gravity,direction);
					if(!wall){
						guy.x=guy.x-f.left.x+xupdate;
						guy.y=guy.y-f.left.y+yupdate;
					}
				}
				
				if(f.type=="flip" && !flipWait){
					guy.x=(f.right.x+f.left.x)/2;
					pressed=N;
					gravity = -gravity;
					drawFlip(level,gravity);
					guy.y=450-(guy.y-5)
					flipWait=true;
				}

				guy.fallingFrames=0;
				guy.theta=gravity*Math.atan(gravity*tan);
			}
			else if(checky>-.1){
				safe=true;
				frozen=checkFrozen(guy,f,level,gravity);
				guy.theta=gravity*Math.atan((f.right.y-f.left.y)/(f.right.x-f.left.x));
				guy.fallingFrames=0;
				if(f.type=="move"){
					var [xupdate,yupdate]=f.guyChange(guy.time,guy.x,guy.y);
					var direction=N;
					if(xupdate<f.left.x){direction=L;}
					else{direction=R;}
					var wall=checkWall(level,guy, gravity,direction);
					if(!wall){
						guy.x=guy.x-f.left.x+xupdate;
						guy.y=guy.y-f.left.y+yupdate;
					}
				}
				if(f.type=="flip" && !flipWait){
					guy.x=(f.right.x+f.left.x)/2
					pressed=N;
					gravity=-gravity;
					pause=true;
					drawFlip(level,gravity);
					guy.y=450-(guy.y-5);
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
		if(guy.fallingFrames==4){
			if(pressed==R){guy.x+=3;}
			else if(pressed==L){guy.x-=1;}
			guy.theta=0;
		}
	}
	if(guy.y>500){
		gravity=0;
	}
	
	guy.ctx.clearRect(0,0,guy.canvas.width,guy.canvas.height);
	drawGuy(guy,level,gravity);
	
	return([guy,upWait, flipWait, gravity]);
}


function checkFrozen(guy,f,level,gravity){
	for(w of levels[level].floor){
		if(w!=f){
			var tan=gravity*(w.right.y-w.left.y)/(w.right.x-w.left.x);
			if(guy.x<w.right.x
				&& guy.x>w.left.x
				&& guy.y-225*(1-gravity)-gravity*w.left.y-abs(guy.x-5-w.left.x)*tan<20
				&& guy.y-225*(1-gravity)-gravity*w.left.y-abs(guy.x-5-w.left.x)*tan>18.5
				&& w.type!="bridge"){
					if(pressed==R){guy.x-=1;}
					else if(pressed==L){guy.x+=1;}
					return true;
				}
			}
		}
		return false;
}


function drawGuy(guy, level, gravity){
	for(f of levels[level].floor){
		if(f.type=="move"){
			f.update(guy.time);
		}
	}
	drawBackground(level, gravity);
	
	sprite.draw(guy);
	sprite.update();
}

function checkFlag(guy,level,gravity){
	if(pow(guy.x-4-levels[level].flag.x,2)+pow(guy.y-(225*(1-gravity)+gravity*levels[level].flag.y),2)<100
		&& (abs(guy.theta-(Math.PI/2*(1-gravity)+gravity*levels[level].flag.theta))<2 )){
		
		return true;
		}else{return false;}
}

function checkPortal(level, guy, upWait, flipWait, gravity){
	for(p of levels[level].portals){
			if((guy.x+3-p.a.x)*(guy.x-p.a.x-12)<0
			&& (guy.y+2*gravity-(225*(1-gravity)+gravity*p.a.y))*(guy.y+2*gravity-(20+225*(1-gravity)+gravity*p.a.y))<0){
				guy.x=p.b.x+1+20*gravity*sin(p.b.theta);
				guy.y=225*(1-gravity)+gravity*p.b.y-3*gravity*p.b.loc;
				guy.theta=gravity*p.b.theta;
				upWait=true;
				return makeMove(level, guy, upWait, flipWait, gravity)
			}else	if((guy.x+3-p.b.x)*(guy.x-p.b.x-12)<0
				&& (guy.y+2*gravity-(225*(1-gravity)+gravity*p.b.y))*(guy.y+2*gravity-(20+225*(1-gravity)+gravity*p.b.y))<0){
					guy.x=p.a.x+1+20*gravity*sin(p.a.theta);
					guy.y=225*(1-gravity)+gravity*p.a.y-3*gravity*p.a.loc;
					guy.theta=gravity*p.a.theta;
					upWait=true;
					return makeMove(level, guy, upWait, flipWait, gravity)
				}
	}
	return makeMove(level, guy, upWait, flipWait, gravity);
	
}



function spriteSheet(){
	var image = new Image();
	var framesPerRow = 8;
	image.src="walking.png";
	var frameWidth=1455/8;
	var frameHeight=318;
	var currentFrame = 4;
	var counter = 0;
	this.update = function(){
		if(counter == 4 ){
			currentFrame = (currentFrame+1)%framesPerRow;
		}
		if(abs(pressed)==1){counter = (counter+1)%5}
		else{currentFrame=4;
			counter=0;}
	};
	
	this.draw=function(guy){
		guy.ctx.translate(guy.x,guy.y);
		guy.ctx.rotate(guy.theta);
		if(pressed==L){guy.ctx.scale(-1,1);}
		guy.ctx.drawImage(image, 
			currentFrame*frameWidth,0,
			frameWidth,frameHeight,
			-5,-22,
			15,22);
		guy.ctx.setTransform(1,0,0,1,0,0);
	};
}

sprite=new spriteSheet();

