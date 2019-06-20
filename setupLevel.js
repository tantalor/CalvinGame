var {cos, sin, tan, abs, pow, atan}=Math;
var pause=false;
var time=0;
var score=0;
var levelScores=new Array(levels.length).fill(0);


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
	var startClock=false;
	var gravity=1;
	document.getElementById("score").innerHTML=score;
	
	drawBackground(level,gravity);
	if(level>5){
		document.getElementById("levelMessage").innerText=(level-5)+". "+levels[level].levelText;
	}else{
		document.getElementById("levelMessage").innerText=levels[level].levelText;		
	}

	
	document.getElementById("backOne").onclick=function(){
		clearInterval(a);
		time=0;
		setup(level-1);
	}
	
	document.getElementById("forwardOne").onclick=function(){
		clearInterval(a);
		time=0;
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
	
	document.getElementById("timer").innerHTML=time;
	
	var a=setInterval(function(){
		if(startClock){
			time+=0.01;
			time=Math.round(time*100)/100
			document.getElementById("timer").innerHTML=time;
		}
		
		if(!pause){
			if(pressed!=N){startClock=true;}
			[___, upWait, flipWait,gravity]=move(level,guy,upWait,flipWait,gravity);
			if(gravity==0){
				alert("Oh no! You should probably try that again.");
				clearInterval(a);
				setup(level);
			}
			solved=checkFlag(guy,level,gravity);
			if(solved){
				var congrats="Good job! "
				var scoreAcheived=(Math.round(50-time+levels[level].score));
				if(scoreAcheived>50){scoreAcheived=50;}
				if(scoreAcheived<0){scoreAcheived=10;}
				if(levelScores[level]>scoreAcheived){
					score-=scoreAcheived;
				}else{
					score-=levelScores[level];
					levelScores[level]=scoreAcheived;
					congrats = "New Record! "
				}
				
				clearInterval(a);
				if(level==levels.length-1){
					score=score+scoreAcheived;
					time=0;
					alert("Congratulations! You won the game with "+score+" points!");
				}else if(level==5){
					score=score+scoreAcheived;
					alert("You've completed the tutorial and scored "+score+" points! Now on to the game.")
					clearInterval(a);
					time=0;
					score=0;
					level+=1;
					setup(level);
				}else{
					score = score+scoreAcheived;
					alert(congrats + "You scored "+scoreAcheived+" points! Try the next level.");
					clearInterval(a);
					time=0;
					level+=1;
					setup(level);	
				}
			}
		}
	}, 10)
	
}