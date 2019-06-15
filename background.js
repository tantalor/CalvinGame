function drawBackground(level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	backgroundCanvas.style.letterSpacing = "-1px"
	bgctx.clearRect(0,0,backgroundCanvas.width,backgroundCanvas.height);
	drawFloor(bgctx,level,gravity);
	drawPortals(bgctx,level,gravity);

	bgctx.translate(levels[level].flagX,240*(1-gravity)+gravity*levels[level].flagY)
	bgctx.rotate(Math.PI/2*(1-gravity)+gravity*levels[level].flagTheta);
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.strokeText('\u2690',0,0);
	bgctx.setTransform(1,0,0,1,0,0);
}


function drawFloor(ctx,level,gravity){
	for(f of levels[level].floor){
		if(f.type=="floor"){
			ctx.translate(f.x,240*(1-gravity)+gravity*f.y);
			ctx.rotate(gravity*f.theta);
			ctx.fillStyle="black";
			ctx.fillRect(0,0,f.width,2);
			ctx.setTransform(1,0,0,1,0,0)
		}else if(f.type=="bridge"){
			ctx.translate(f.x,f.y);
			ctx.rotate(gravity*f.theta);
			ctx.strokeStyle="#a0522d";
			var a=4;
			var Rad = pow(f.width,2)/8/a-a/2;
			var theta = atan(f.width/(2*(Rad-a)));
			ctx.arc(f.width/2,-(240*(1-gravity)+gravity*(Rad-a)),Rad,Math.PI/2-theta,Math.PI/2+theta);
			ctx.stroke();
			ctx.setTransform(1,0,0,1,0,0)
		}else if(f.type=="flip"){
			ctx.translate(f.x,240*(1-gravity)+gravity*f.y);
			ctx.rotate(gravity*f.theta);
			ctx.font="15px Arial";
			ctx.strokeStyle="blue";
			var sine = '';
			for(var i=0;i<f.width/9;i++){
				sine = sine+'\u223F';
			}
			ctx.strokeText(sine,0,2);
			ctx.setTransform(1,0,0,1,0,0);
		}
	}
	
}

function drawPortals(ctx,level,gravity){
	for(p of levels[level].portals){
		ctx.translate(p.x[0]+20*sin(p.theta[0]),240*(1-gravity)+gravity*(p.y[0]-20*cos(p.theta[0])));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.theta[0]));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(p.x[1]+20*sin(p.theta[1]),240*(1-gravity)+gravity*(p.y[1]-20*cos(p.theta[1])));
		ctx.rotate(Math.PI/2*(1-gravity)+gravity*(p.theta[1]));
		ctx.fillStyle=p.color;
		ctx.fillRect(0,0,10,20);
		ctx.setTransform(1,0,0,1,0,0);
	}
}