var {cos, sin, tan, abs, pow, atan}=Math;
var pause=false;


document.getElementById("levelsButton").onclick=function(){
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	for(e of document.getElementsByName("playing")){
		e.style.display="block";
	}
	setup(6);
}



document.getElementById("tutorialButton").onclick=function() {
	for(e of document.getElementsByClassName("intro")){
		e.style.display="none";
	}
	for(e of document.getElementsByName("playing")){
		e.style.display="block";
	}
	setup(0);
}

function setup(level){
	pressed=N;
	var gravity=1;
	
	drawBackground(level,gravity);
	if(level>5){
		document.getElementById("levelMessage").innerText=(level-5)+". "+levels[level].levelText;
	}else{
		document.getElementById("levelMessage").innerText=levels[level].levelText;		
	}

	
	document.getElementById("backOne").onclick=function(){
		clearInterval(a);
		setup(level-1);
	}
	
	document.getElementById("forwardOne").onclick=function(){
		clearInterval(a);
		setup(level+1);
	}
	
	document.getElementById("startOver").onclick=function(){
		clearInterval(a);
		setup(level);
	}
	
	var guyCanvas=document.getElementById("guyCanvas");
	var guyctx=guyCanvas.getContext("2d");
	
	var guy={x:levels[level].x, 
		y: levels[level].y,
		theta:0,
		fallingFrames:0,
		canvas:guyCanvas,
		ctx:guyctx}
	
	var solved=false;
	var upWait=false;
	var flipWait=false;
			
	var a=setInterval(function(){
		if(!pause){
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
				}else if(level==5){
					alert("You've completed the tutorial! Now on to the game.")
					clearInterval(a);
					level+=1;
					setup(level);
				}else{
					alert("Good job! Try the next level.");
					clearInterval(a);
					level+=1;
					setup(level);	
				}
			}
		}
	}, 10)
	
}