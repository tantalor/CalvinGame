function drawBackground(level,gravity){
	var backgroundCanvas=document.getElementById("floorCanvas");
	var bgctx = backgroundCanvas.getContext("2d");
	backgroundCanvas.style.letterSpacing = "-1px"
	bgctx.clearRect(0,0,backgroundCanvas.width,backgroundCanvas.height);
	drawPortals(bgctx,level,gravity);
	drawFloor(bgctx,level,gravity);

	bgctx.translate(levels[level].flagX,240*(1-gravity)+gravity*levels[level].flagY)
	bgctx.rotate(Math.PI/2*(1-gravity)+gravity*levels[level].flagTheta);
	bgctx.font="25px Arial";
	bgctx.strokeStyle = 'black';
	bgctx.strokeText('\u2690',0,0);
	bgctx.setTransform(1,0,0,1,0,0);
}


function drawFloor(ctx,level,gravity){
	for(f of levels[level].floor){
		ctx.translate(f.x,240*(1-gravity)+gravity*f.y);
		ctx.rotate(gravity*f.theta);
		
		if(f.type=="floor"){
			ctx.fillStyle="black";
			ctx.fillRect(0,0,f.width,2);
		}else if(f.type=="wall"){
			ctx.rotate(-gravity*f.theta);
			ctx.rotate(Math.sign(gravity)*f.theta);
			ctx.fillStyle="black";
			ctx.fillRect(0,0,abs(gravity)*f.width,2);
		}else if(f.type=="bridge"){
			ctx.beginPath();
			ctx.strokeStyle="#a0522d";
			var a=4;
			var Rad = pow(f.width,2)/8/a-a/2;
			var angle = Math.atan(f.width/(2*(Rad-a)));
			ctx.arc(f.width/2,-(Rad-a),Rad,Math.PI/2-angle,Math.PI/2+angle);
			ctx.stroke();
			ctx.closePath();

		}else if(f.type=="flip"){
			ctx.font="15px Arial";
			ctx.strokeStyle="blue";
			var Rad=2;
			for(var i=0;i<f.width/8;i++){
				ctx.beginPath();
				ctx.arc(Rad+8*i,0,Rad,Math.PI,2*Math.PI);					
				ctx.arc(3*Rad+8*i,0,Rad,0,Math.PI);
				ctx.stroke();
				ctx.closePath();
			}
		}
		ctx.setTransform(1,0,0,1,0,0)
	}
	
}

function drawPortals(ctx,level,gravity){
	for(p of levels[level].portals){
		ctx.translate(p.x[0]+20*sin(p.theta[0])+5*(1-gravity),240*(1-gravity)+gravity*(p.y[0]-20*cos(p.theta[0])));
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



function drawFlip(level, gravity){
	var step=0.08;
	var count=25;
	var c=setInterval(function(){
		drawBackground(level,gravity*(1-count*step));
		count-=1;
		if(count==-1){
			clearInterval(c);
			pause=false;
		}
	},15)
}