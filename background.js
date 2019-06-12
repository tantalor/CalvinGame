function drawBackground(level){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	drawFloor(bgctx,level);
	
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.strokeText('\u2690',levels[level].flagX,levels[level].flagY);
}


function drawFloor(ctx,level){
	for(var i=0;i<levels[level].floor.length;i++){
		ctx.translate(levels[level].floor[i].floorX,levels[level].floor[i].floorY);
		ctx.rotate(levels[level].floor[i].theta);
		ctx.fillstyle="black";
		ctx.fillRect(0,0,levels[level].floor[i].width,2);
		ctx.setTransform(1,0,0,1,0,0)
	}
	
}