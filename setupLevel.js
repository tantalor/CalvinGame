var {cos, sin, tan, abs, pow}=Math;
var level=0;

document.getElementById("goButton").onclick=function() {
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	setup(level);
}


function setup(level){
	
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
			
	var a=setInterval(function(){
		[___, upWait, gravity]=move(level,guy,upWait,gravity);
		solved=checkFlag(guy,level);
		if(solved){
			clearInterval(a);
			
			if(level==levels.length-1){
				alert("Congratulations! You won the game!!");
			}else{
				alert("Good job! Try the next level.");
				clearInterval(a);
				pressed=N;
				level+=1;
				setup(level);	
			}
		}		
	}, 10)
	
}