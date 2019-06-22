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
				if((gravity==1 && guy.y-2>f.a.y+1 && guy.y<f.b.y+2)
						||(gravity==-1 && guy.y-2>450-f.b.y+1 && guy.y<450-f.a.y+2)){
						if(guy.x-f.a.x<2 && 0<guy.x-f.a.x && pressed==L){
							wall=true;
						}else if(f.a.x-guy.x<8 && 0<f.a.x-guy.x && pressed==R){
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
		var tan=gravity*(f.b.y-f.a.y)/(f.b.x-f.a.x);
		if(f.type!="wall" && guy.x-5<f.b.x
			&& guy.x>f.a.x-8
			&&guy.y-225*(1-gravity)-gravity*f.a.y-abs(guy.x-5-f.a.x)*tan<3){
			if(guy.y-225*(1-gravity)-gravity*f.a.y-abs(guy.x-5-f.a.x)*tan>1
			 && !(tan<0 && pressed==L)
			 && !(tan>0 && pressed==R)){
				guy.y-=1;
				safe=true;
				if(pressed==R){guy.x-=1;}
				else if(pressed==L){guy.x+=1;}
				if(f.type=="flip" && !flipWait){
					guy.x=(f.b.x+f.a.x)/2;
					pressed=N;
					gravity = -gravity;
					drawFlip(level,gravity);
					guy.y=450-(guy.y-5)
					flipWait=true;
				}

				guy.fallingFrames=0;
				guy.theta=gravity*Math.atan((f.b.y-f.a.y)/(f.b.x-f.a.x));
			}
			else if(guy.y-225*(1-gravity)-gravity*f.a.y-abs(guy.x-5-f.a.x)*tan>0){
				safe=true;
				guy.theta=gravity*Math.atan((f.b.y-f.a.y)/(f.b.x-f.a.x));
				guy.fallingFrames=0;
				if(f.type=="flip" && !flipWait){
					guy.x=(f.b.x+f.a.x)/2
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
	sprite.draw(guy);
	sprite.update();
}

function checkFlag(guy,level,gravity){
	if(pow(guy.x-4-levels[level].flagX,2)+pow(guy.y-(225*(1-gravity)+gravity*levels[level].flagY),2)<100
		&& (abs(guy.theta-(Math.PI/2*(1-gravity)+gravity*levels[level].flagTheta))<2 )){
		
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

