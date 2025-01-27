tutorial = [
 { levelText: "Move to the goal. No jumping. The faster you complete the level, the more points you get!",
   score: 2,
  	 floor: [{left:{x: 200, y: 225}, right: {x: 400, y: 225}, type: floor}
	    ],
	    wall: [],
	    flag: {x: 285, y: 225, theta: 0},
	    buttons: [], portals: [],
	    startx: 255,
	    starty: 205},

 { levelText: "You can go up an incline.",
   score: 2,
   floor: [{left:{x: 195, y: 250}, right: {x: 295, y: 250}, type: floor},
     {left:{x: 294, y: 250}, right: {x: 345, y: 200}, type: floor},
     {left:{x: 345, y: 200}, right: {x: 405, y: 200}, type: floor}
   ],
   wall: [],
   flag: {x: 370, y: 200, theta: 0},
   buttons: [], portals: [],
   startx: 211,
   starty: 232},
 { levelText: "You can travel through a bridge.",
   score: 3,
   floor: [{left:{x: 210, y: 250}, right: {x: 310, y: 250}, type: floor},
     {left:{x: 309, y: 250}, right: {x: 360, y: 200}, type: floor},
     {left:{x: 360, y: 200}, right: {x: 390, y: 200}, type: floor},
     {left:{x: 300, y: 200}, right: {x: 360, y: 200}, type: bridge},
     {left:{x: 235, y: 200}, right: {x: 300, y: 200}, type: floor}
   ],
   wall: [],
   flag: {x: 245, y: 200, theta: 0},
   buttons: [], portals: [],
   startx: 220,
   starty: 230},
 { levelText: "You can go through portals by pressing the up button.",
   score: 3,
   floor: [{left:{x: 205, y: 225}, right: {x: 285, y: 225}, type: floor},
     {left:{x: 315, y: 225}, right: {x: 395, y: 225}, type: floor}
   ],
   wall: [],
   flag: {x: 355, y: 225, theta: 0},
   buttons: [], portals: [{color: "red", a:{x: 255, y: 225, theta: 0, loc: 1}, b: {x: 325, y: 225, theta: 0, loc: 1}}
   ],
   startx: 215,
   starty: 205},
 { levelText: "You can flip the world upside down.",
   score: 4,
   floor: [{left:{x: 293, y: 275}, right: {x: 333, y: 275}, type: floor},
     {left:{x: 333, y: 275}, right: {x: 363, y: 275}, type: flip},
     {left:{x: 363, y: 275}, right: {x: 383, y: 275}, type: floor},
     {left:{x: 252, y: 175}, right: {x: 377, y: 175}, type: floor},
     {left:{x: 232, y: 175}, right: {x: 252, y: 175}, type: flip},
     {left:{x: 217, y: 275}, right: {x: 267, y: 275}, type: floor}
   ],
   wall: [],
   flag: {x: 243, y: 275, theta: 0},
   buttons: [], portals: [],
   startx: 298,
   starty: 265},
 { levelText: "Now you're ready for your first real level!",
   score: 8,
   floor: [{left:{x: 180, y: 295.5}, right: {x: 220, y: 295.5}, type: floor},
     {left:{x: 210, y: 275.5}, right: {x: 245, y: 275.5}, type: floor},
     {left:{x: 260, y: 275.5}, right: {x: 310, y: 275.5}, type: floor},
     {left:{x: 310, y: 275.5}, right: {x: 343, y: 275.5}, type: flip},
     {left:{x: 220, y: 175.5}, right: {x: 245, y: 154.5}, type: floor},
     {left:{x: 350, y: 275.5}, right: {x: 400, y: 275.5}, type: floor},
     {left:{x: 180, y: 175.5}, right: {x: 220, y: 175.5}, type: floor},
     {left:{x: 244, y: 155.5}, right: {x: 420, y: 155.5}, type: floor},
     {left:{x: 335, y: 155.5}, right: {x: 360, y: 175.5}, type: floor},
     {left:{x: 360, y: 175.5}, right: {x: 390, y: 175.5}, type: flip},
     {left:{x: 245, y: 225.5}, right: {x: 350, y: 225.5}, type: floor}
   ],
   wall: [{top: 225.5, bottom: 275.5, x: 245},
     {top: 225.5, bottom: 275.5, x: 350}
   ],
   flag: {x: 380, y: 275.5, theta: 0},
   buttons: [], portals: [{color: "orange", a:{x: 195, y: 295.5, theta: 0, loc: 1}, b: {x: 265, y: 245.5, theta: 0, loc: -1}}
   ],
   startx: 210,
   starty: 273.5}]