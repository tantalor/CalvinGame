function drawBackground(level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	bgctx.clearRect(0,0,backgroundCanvas.width,backgroundCanvas.height);
	drawFloor(bgctx,level);
	drawPortals(bgctx,level);
	
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.strokeText('\u2690',levels[level].flagX,levels[level].flagY);
}


function drawFloor(ctx,level){
	for(f of levels[level].floor){
		if(f.type=="floor"){
			ctx.translate(f.x,f.y);
			ctx.rotate(f.theta);
			ctx.fillStyle="black";
			ctx.fillRect(0,0,f.width,2);
			ctx.setTransform(1,0,0,1,0,0)
		}else if(f.type=="bridge"){
			ctx.translate(f.x,f.y);
			ctx.rotate(f.theta);
			ctx.strokeStyle="#a0522d";
			ctx.arc(f.width/2,-17/20*f.width,f.width,Math.PI/3,-4/3*Math.PI)
			ctx.stroke();
			ctx.setTransform(1,0,0,1,0,0)
		}
	}
	
}

function drawPortals(ctx,level){
	for(p of levels[level].portals){
		ctx.translate(p.x[0]+20*sin(p.theta[0]),p.y[0]-20*cos(p.theta[0]));
		ctx.rotate(p.theta[0]);
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(p.x[1]+20*sin(p.theta[1]),p.y[1]-20*cos(p.theta[1]));
		ctx.rotate(p.theta[1]);
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
	}
}