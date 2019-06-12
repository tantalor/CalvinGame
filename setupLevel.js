function setup(level){
	
	drawBackground(level);
		
	var guyX=levels[level].x;
	var guyY=levels[level].y;
	var guyTheta=levels[level].theta;
	var fallingFrames=levels[level].frames;
	var guyCanvas=document.getElementById("guyCanvas");
	var guyctx=guyCanvas.getContext("2d");
	var solved=false;
			
	var a=setInterval(function(){
		[guyX,guyY,guyTheta,fallingFrames]=move(levels[level].floor,guyX,guyY,guyTheta,fallingFrames,guyctx,guyCanvas);
		solved=checkFlag(guyX,guyY,levels[level].flagX,levels[level].flagY);
		if(solved){
			alert("You are the winner");
			clearInterval(a);
		}		
	}, 10)

	
	
}