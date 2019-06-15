var {cos, sin, tan, abs, pow, atan}=Math;
var level=0;

document.getElementById("goButton").onclick=function() {
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	setup(level);
}


function setup(level){
	pressed=N;
	var gravity=1;
	
	drawBackground(level,gravity);
	document.getElementById("levelMessage").innerText=levels[level].alertText;
	
	
	var guyCanvas=document.getElementById("guyCanvas");
	var guyctx=guyCanvas.getContext("2d");
	
	var guy={x:levels[level].x, 
		y: levels[level].y,
		theta:levels[level].theta,
		fallingFrames:0,
		canvas:guyCanvas,
		ctx:guyctx}
	
	var solved=false;
	var upWait=false;
	var flipWait=false;
			
	var a=setInterval(function(){
		[___, upWait, flipWait,gravity]=move(level,guy,upWait,flipWait,gravity);
		if(gravity==0){
			alert("Oh no! You should probably try that again.");
			clearInterval(a);
			setup(level);
		}
		solved=checkFlag(guy,level,gravity);
		if(solved){
			clearInterval(a);
			
			if(level==levels.length-1){
				alert("Congratulations! You won the game!!");
			}else{
				alert("Good job! Try the next level.");
				clearInterval(a);
				level+=1;
				setup(level);	
			}
		}		
	}, 10)
	
}