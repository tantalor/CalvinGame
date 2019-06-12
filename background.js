function drawBackground(level){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	drawFloor(bgctx,level);
	drawPortals(bgctx,level);
	
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

function drawPortals(ctx,level){
	for(var i=0;i<levels[level].portals.length;i++){
		ctx.translate(levels[level].portals[i].portalX[0]+20*Math.sin(levels[level].portals[i].theta[0]),levels[level].portals[i].portalY[0]-20*Math.cos(levels[level].portals[i].theta[0]));
		ctx.rotate(levels[level].portals[i].theta[0]);
		ctx.fillStyle=levels[level].portals[i].color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(levels[level].portals[i].portalX[1]+20*Math.sin(levels[level].portals[i].theta[1]),levels[level].portals[i].portalY[1]-20*Math.cos(levels[level].portals[i].theta[1]));
		ctx.rotate(levels[level].portals[i].theta[1]);
		ctx.fillStyle=levels[level].portals[i].color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
	}
}