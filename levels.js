levels=[
	{levelText:"TUTORIAL 1. Move to the goal. No jumping.",
		floor: [{x:195,y:200,width:100,theta:0,type:"floor"}],
		x:200,
		y:180,
		flagX:280,
		flagY:200,
		flagTheta:0,
		portals:[]},
		
		{levelText:"TUTORIAL 2. You can go up an incline.",
		floor:[{x:140,y:200,width:101,theta:0,type:"floor"},
			{x:238,y:201,width:50,theta:-Math.PI/4,type:"floor"},
			{x:270,y:167,width:50,theta:0,type:"floor"}],
		x:156,
		y:182,
		flagX:301,
		flagY:164,
		flagTheta:0,
		portals:[]},
			
		{levelText:"TUTORIAL 3. You can travel through a bridge.",
		floor:[{x:160,y:200,width:101,theta:0,type:"floor"},
			{x:258,y:201,width:50,theta:-Math.PI/4,type:"floor"},
			{x:290,y:167,width:50,theta:0,type:"floor"},
			{x:252,y:167,width:45,theta:0,type:"bridge"},
			{x:185,y:167,width:70,theta:0,type:"floor"}],
		x:170,
		y:180,
		flagX:190,
		flagY:167,
		flagTheta:0,
		portals:[]},
		
		{levelText:"TUTORIAL 4. You can go through portals by pressing the up button.",
		floor:[{x:160,y:200,width:80,theta:0,type:"floor"},
			{x:270,y:200,width:80,theta:0,type:"floor"}],
		x:170,
		y:180,
		flagX:310,
		flagY:200,
		flagTheta:0,
		portals:[{color:"red",x:[210,280],y:[200,200],theta:[0,0],loc:[1,1]}]},
		
		{levelText:"TUTORIAL 5. You can flip the world upside down.",
			floor: [{x:226,y:290,width:40,theta:0,type:"floor"},
				{x:264,y:290,width:30,theta:0,type:"flip"},
				{x:294,y:290,width:20,theta:0,type:"floor"},
				{x:209,y:190,width:105,theta:0,type:"floor"},
				{x:166,y:190,width:20,theta:0,type:"floor"},
				{x:186,y:190,width:20,theta:0,type:"flip"},
				{x:166,y:290,width:50,theta:0,type:"floor"}],
			x:231,
			y:280,
			flagX:176,
			flagY:290,
			flagTheta:0,
			portals:[]},
			
		{levelText: "TUTORIAL 6. Now you're ready for your first real level!",
		floor: [{x:185,y:229,width:52,theta:Math.PI/2,type:"wall"},
			{x:290,y:229,width:52,theta:Math.PI/2,type:"wall"},
			{x:120,y:300,width:40,theta:0,type:"floor"},
			{x:148,y:280,width:39,theta:0,type:"floor"},
			{x:200,y:280,width:50,theta:0,type:"floor"},
			{x:249,y:280,width:33,theta:0,type:"flip"},
			{x:158,y:181,width:35,theta:-Math.PI/4,type:"floor"},
			{x:290,y:280,width:50,theta:0,type:"floor"},
			{x:120,y:180,width:40,theta:0,type:"floor"},
			{x:180,y:158,width:181,theta:0,type:"floor"},
			{x:276,y:157,width:32,theta:Math.PI/4,type:"floor"},
			{x:297,y:177,width:30,theta:0,type:"flip"},
			{x:184,y:230,width:106,theta:0,type:"floor"}],
		x:150,
		y:278,
		flagX:320,
		flagY:280,
		flagTheta:0,
		portals:[{color:"orange",x:[135,205],y:[300,250],theta:[0,0],loc:[1,-1]}]},
	
		{levelText:"TAUNT",
		floor:[{x:100,y:214,width:25,theta:0,type:"floor"},
			{x:125,y:215,width:71,theta:-Math.PI/4,type:"floor"},
			{x:175,y:165,width:105,theta:0,type:"floor"},
			{x:280,y:165,width:40,theta:0,type:"flip"},
			{x:320,y:165,width:40,theta:0,type:"floor"},
			{x:175,y:215,width:105,theta:0,type:"floor"},
			{x:150,y:315,width:150,theta:0,type:"floor"},
			{x:201,y:316,width:73,theta:-Math.PI/4,type:"floor"},
			{x:250,y:265,width:20,theta:0,type:"floor"},
			{x:300,y:315,width:40,theta:0,type:"flip"},
			{x:290,y:265,width:50,theta:0,type:"floor"},
			{x:340,y:265,width:2,theta:0,type:"wall"},
			{x:340,y:265,width:65,theta:Math.atan(5/4),type:"floor"},
			{x:340,y:315,width:40,theta:0,type:"floor"}],
		x:165,
		y:310,
		flagX:300,
		flagY:265,
		flagTheta:0,
		portals:[]
		},
		
		{levelText:"GOLDEN SECTION",
		floor:[{x:115,y:315,width:105,theta:0,type:"floor"},
			{x:220,y:315,width:40,theta:0,type:"flip"},
			{x:260,y:315,width:55,theta:0,type:"floor"},
			{x:115,y:115,width:201,theta:Math.PI/2,type:"wall"},
			{x:315,y:115,width:201,theta:Math.PI/2,type:"wall"},
			{x:115,y:215,width:100,theta:0,type:"floor"},
			{x:215,y:215,width:102,theta:Math.PI/2,type:"wall"},
			{x:260,y:215,width:55,theta:0,type:"floor"},
			{x:165,y:195,width:20,theta:Math.PI/2,type:"wall"},
			{x:215,y:115,width:20,theta:Math.PI/2,type:"wall"},
			{x:265,y:115,width:20,theta:Math.PI/2,type:"wall"},
			{x:115,y:115,width:200,theta:0,type:"floor"}],
		x:120,
		y:310,
		flagX:300,
		flagY:215,
		flagTheta:Math.PI,
		portals:[{color:"red",x:[160,130],y:[315,135],theta:[0,0],loc:[1,-1]},
			{color:"orange",x:[130,180],y:[215,215],theta:[0,0],loc:[1,1]},
			{color:"green",x:[230,280],y:[135,215],theta:[0,0],loc:[-1,1]},
			{color:"cyan",x:[276,300],y:[235,135],theta:[0,0],loc:[-1,-1]}]},

			{levelText:"REFLECTION",
			floor:[{x:130,y:130,width:101,theta:0,type:"floor"},
				{x:130,y:130,width:240,theta:Math.PI/2,type:"wall"},
				{x:130,y:190,width:30,theta:0,type:"floor"},
				{x:130,y:310,width:30,theta:0,type:"floor"},
				{x:130,y:250,width:200,theta:0,type:"floor"},
				{x:130,y:370,width:101,theta:0,type:"floor"},
				{x:230,y:130,width:20,theta:0,type:"flip"},
				{x:230,y:370,width:20,theta:0,type:"flip"},
				{x:250,y:130,width:121,theta:0,type:"floor"},
				{x:250,y:370,width:121,theta:0,type:"floor"},
				{x:370,y:130,width:240,theta:Math.PI/2,type:"wall"},
				{x:228,y:159,width:52,theta:-Math.atan(30/42),type:"floor"},
				{x:228,y:341,width:52,theta:Math.atan(30/42),type:"floor"},
				{x:159,y:309,width:88,theta:Math.PI/4,type:"floor"},
				{x:159,y:191,width:88,theta:-Math.PI/4,type:"floor"}],
			x:140,
			y:248,
			flagX:150,
			flagY:190,
			flagTheta:Math.PI,
			portals:[]},

		{levelText:"FLOATING ISLANDS",
		floor:[{x:60, y:180, width:60, theta:0, type:"floor"},
			{x:60, y:120, width:61, theta:Math.PI/2, type:"wall"},
			{x:60, y:120, width:220, theta:0, type:"floor"},
			{x:240, y:120, width:21, theta:Math.PI/2, type:"wall"},
			{x:280, y:120, width:21, theta:Math.PI/2, type:"wall"},
			{x:240, y:140, width:40, theta:0, type:"flip"},
			{x:238, y:200, width:20, theta:Math.PI/2, type:"wall"},
			{x:100, y:220, width:138, theta:0, type:"floor"},
			{x:120, y:220, width:20, theta:Math.PI/2, type:"wall"},
			{x:60, y:240, width:60, theta:0, type:"floor"},
			{x:60, y:240, width:22, theta:Math.PI/2, type:"wall"},
			{x:20, y:270, width:30, theta:Math.PI/2, type:"wall"},
			{x:20, y:300, width:60, theta:0, type:"floor"},
			{x:79, y:300, width:40, theta:0, type:"flip"},
			{x:235, y:300, width:150, theta:0, type:"floor"},
			{x:280, y:301, width:74, theta:-Math.PI/4, type:"floor"},
			{x:300,y:299,width:1,theta:Math.PI/2,type:"wall"},
			{x:330, y:250, width:30, theta:0, type:"floor"},
			{x:340, y:350, width:120, theta:0, type:"floor"},
			{x:340, y:321, width:30, theta:Math.PI/2, type:"wall"},
			{x:460, y:321, width:30, theta:Math.PI/2, type:"wall"}],
		x:80,
		y:178,
		flagX:360,
		flagY:350,
		flagTheta:0,
		portals:[]},
		
		{levelText:"HALL OF DOORS",
		floor:[{x:10,y:80,width:393,theta:0,type:"floor"},
			{x:10,y:80,width:260,theta:Math.PI/2,type:"wall"},
			{x:10,y:140,width:420,theta:0,type:"floor"},
			{x:10,y:340,width:463,theta:0,type:"floor"},
			{x:300,y:140,width:200,theta:Math.PI/2,type:"wall"},
			{x:473,y:140,width:200,theta:Math.PI/2,type:"wall"},
			{x:430,y:140,width:40,theta:0,type:"bridge"},
			{x:399,y:80,width:100,theta:Math.atan(6/7),type:"floor"},
			{x:100,y:80,width:60,theta:Math.PI/2,type:"wall"},
			{x:280,y:80,width:60,theta:Math.PI/2,type:"wall"},
			{x:380,y:140,width:127,theta:Math.PI/2,type:"wall"},
			{x:379,y:183,width:68,theta:-Math.atan(43/49),type:"floor"},
			{x:380,y:182,width:41,theta:0,type:"bridge"},
			{x:420,y:182,width:51,theta:0,type:"floor"},
			{x:420,y:182,width:53,theta:Math.atan(43/55),type:"floor"},
			{x:379,y:269,width:78,theta:-Math.atan(43/45),type:"floor"},
			{x:380,y:215,width:56,theta:0,type:"floor"},
			{x:459,y:215,width:14,theta:0,type:"floor"},
			{x:430,y:215,width:30,theta:0,type:"bridge"},
			{x:300,y:268,width:30,theta:0,type:"floor"},
			{x:330,y:268,width:30,theta:0,type:"flip"},
			{x:360,y:268,width:20,theta:0,type:"floor"},
			{x:130,y:300,width:40,theta:Math.PI/2,type:"wall"}],
		x:20,
		y:138,
		flagX:250,
		flagY:340,
		flagTheta:0,
		portals:[{color:"red", x:[80,333],y:[140,160],theta:[0,0],loc:[1,-1]},
			{color:"yellow", x:[30,115],y:[100,140],theta:[0,0],loc:[-1,1]},
			{color:"cyan", x:[300,260],y:[100,100],theta:[0,0],loc:[-1,-1]},
			{color:"magenta", x:[200,240],y:[100,140],theta:[0,0],loc:[-1,1]},
			{color:"orange",x:[450,10],y:[340,180],theta:[0,Math.PI/2],loc:[1,1]},
			{color:"purple",x:[100,150],y:[340,340],theta:[0,0],loc:[1,1]}
			]},
		
		{levelText:"CRAZY SHADOWS",
		floor:[{x:30,y:10,width:260,theta:0,type:"floor"},
			{x:30,y:125,width:100,theta:0,type:"floor"},
			{x:130,y:125,width:30,theta:0,type:"flip"},
			{x:29,y:239,width:53,theta:0,type:"bridge"},
			{x:80,y:239,width:170,theta:0,type:"floor"},
			{x:250,y:239,width:30,theta:0,type:"flip"},
			{x:280,y:239,width:170,theta:0,type:"floor"},
			{x:30,y:355,width:240,theta:0,type:"floor"},
			{x:270,y:355,width:30,theta:0,type:"flip"},
			{x:300,y:355,width:150,theta:0,type:"floor"},
			{x:30,y:470,width:300,theta:0,type:"floor"},
			{x:330,y:470,width:30,theta:0,type:"flip"},
			{x:360,y:470,width:90,theta:0,type:"floor"},
			{x:30,y:10,width:460,theta:Math.PI/2,type:"wall"},
			{x:450,y:10,width:460,theta:Math.PI/2,type:"wall"},
			{x:98,y:126,width:50,theta:-Math.PI/8,type:"floor"},
			{x:127,y:140,width:113,theta:0,type:"floor"},
			{x:240,y:10,width:150,theta:Math.PI/2,type:"wall"},
			{x:29,y:240,width:143,theta:-Math.PI/4,type:"floor"},
			{x:240,y:270,width:50,theta:0,type:"floor"},
			{x:290,y:270,width:20,theta:0,type:"flip"},
			{x:310,y:270,width:20,theta:0,type:"floor"},
			{x:310,y:34,width:62,theta:-Math.PI/8,type:"floor"},
			{x:290,y:10,width:30,theta:0,type:"flip"},
			{x:320,y:10,width:130,theta:0,type:"floor"},
			{x:230,y:355,width:50,theta:Math.PI/8,type:"floor"}
			],
		x:40,
		y:125,
		flagX:420,
		flagY:355,
		flagTheta:Math.PI,
		portals:[{color:"red",x:[200,200],y:[30,160],theta:[0,0],loc:[-1,-1]},
			{color:"cyan",x:[420,420],y:[30,258],theta:[0,0],loc:[-1,-1]},
			{color:"yellow",x:[260,120],y:[30,375],theta:[0,0],loc:[-1,-1]}]},
			
		{levelText:"HOUSE",
		floor:[{x:20,y:430,width:440,theta:0,type:"floor"},
			{x:80,y:198,width:230,theta:Math.PI/2,type:"wall"},
			{x:400,y:206,width:225,theta:Math.PI/2,type:"wall"},
			{x:79,y:200,width:186,theta:-Math.PI/6,type:"floor"},
			{x:240,y:107,width:146,theta:Math.PI/6,type:"floor"},
			{x:80,y:275,width:109,theta:Math.PI/4,type:"floor"},
			{x:155,y:350,width:100,theta:0,type:"floor"},
			{x:253,y:349,width:115,theta:Math.PI/4,type:"floor"},
			{x:80,y:276,width:40,theta:0,type:"bridge"},
			{x:119,y:276,width:40,theta:0,type:"floor"},
			{x:159,y:276,width:40,theta:0,type:"flip"},
			{x:199,y:276,width:61,theta:0,type:"floor"},
			{x:260,y:276,width:160,theta:-Math.atan(76/140),type:"floor"},
			{x:360,y:200,width:40,theta:0,type:"bridge"},
			{x:250,y:200,width:110,theta:0,type:"floor"},
			{x:210,y:200,width:40,theta:0,type:"flip"},
			{x:80,y:200,width:130,theta:0,type:"floor"},
			{x:400,y:200,width:26,theta:0,type:"floor"},
			{x:424,y:201,width:25,theta:-Math.PI/4,type:"floor"},
			{x:330,y:163,width:37,theta:Math.PI/2,type:"wall"},
			{x:220,y:120,width:40,theta:0,type:"floor"}],
		x:380,
		y:425,
		flagX:240,
		flagY:120,
		flagTheta:Math.PI,
		portals:[{color:"green",x:[150,405],y:[200,200],theta:[0,0],loc:[1,1]},
			{color:"pink",x:[50,430],y:[430,430],theta:[0,0],loc:[1,1]}]},
			
		{levelText:"MYSTERY",
		floor:[{x:100,y:265,width:240,theta:0,type:"floor"},
			{x:340,y:265,width:40,theta:0,type:"flip"},
			{x:210,y:235,width:30,theta:Math.PI/2,type:"wall"},
			{x:100,y:165,width:240,theta:0,type:"floor"},
			{x:340,y:165,width:40,theta:0,type:"flip"},
			{x:240,y:165,width:30,theta:Math.PI/2,type:"wall"},
			{x:100,y:165,width:130,theta:Math.PI/2,type:"wall"},
			{x:380,y:165,width:100,theta:Math.PI/2,type:"wall"},
			{x:300,y:315,width:100,theta:0,type:"floor"},
			{x:330,y:215,width:50,theta:0,type:"floor"}],
		x:130,
		y:263,
		flagX:380,
		flagY:315,
		flagTheta:0,
		portals:[{color:"red",x:[130,170],y:[285,185],theta:[0,0],loc:[-1,-1]},
			{color:"red",x:[170,265],y:[265,185],theta:[0,0],loc:[1,-1]},
			{color:"red",x:[230,215],y:[265,185],theta:[0,0],loc:[1,-1]},
			{color:"red",x:[265,130],y:[265,185],theta:[0,0],loc:[1,-1]},
			{color:"red",x:[300,100],y:[265,215],theta:[0,Math.PI/2],loc:[1,1]},
			{color:"red",x:[110,300],y:[165,185],theta:[0,0],loc:[1,-1]}]},
			
			
	{levelText:"DOUBLE DOORS",
	floor:[{x:50,y:50,width:400,theta:0,type:"floor"},
		{x:50,y:50,width:400,theta:Math.PI/2,type:"wall"},
		{x:450,y:50,width:400,theta:Math.PI/2,type:"wall"},
		{x:50,y:450,width:30,theta:0,type:"floor"},
		{x:120,y:450,width:60,theta:0,type:"floor"},
		{x:220,y:450,width:60,theta:0,type:"floor"},
		{x:280,y:450,width:40,theta:0,type:"flip"},
		{x:320,y:450,width:100,theta:0,type:"floor"},
		{x:250,y:187,width:10,theta:Math.PI/2,type:"floor"},
		{x:250,y:50,width:138,theta:Math.PI/2,type:"wall"},
		{x:250,y:195,width:255,theta:Math.PI/2,type:"wall"},
		{x:50,y:250,width:150,theta:0,type:"floor"},
		{x:200,y:250,width:20,theta:0,type:"flip"},
		{x:220,y:250,width:180,theta:0,type:"floor"},
		{x:400,y:250,width:30,theta:0,type:"flip"},
		{x:430,y:250,width:20,theta:0,type:"floor"},
		{x:150,y:250,width:200,theta:Math.PI/2,type:"wall"},
		{x:55,y:185,width:91,theta:Math.PI/4,type:"floor"},
		{x:180,y:251,width:93,theta:-Math.PI/4,type:"floor"},
		{x:150,y:110,width:80,theta:Math.PI/2,type:"wall"},
		{x:50,y:188,width:41,theta:0,type:"bridge"},
		{x:210,y:188,width:41,theta:0,type:"bridge"},
		{x:90,y:188,width:120,theta:0,type:"floor"},
		{x:50,y:110,width:200,theta:0,type:"floor"},
		{x:350,y:50,width:150,theta:Math.PI/2,type:"wall"},
		{x:350,y:251,width:71,theta:-Math.PI/4,type:"floor"},
		{x:375,y:201,width:25,theta:0,type:"bridge"},
		{x:399,y:201,width:20,theta:0,type:"floor"},
		{x:350,y:201,width:25,theta:0,type:"flip"},
		{x:300,y:300,width:125,theta:0,type:"floor"},
		{x:250,y:350,width:100,theta:0,type:"floor"},
		{x:250,y:400,width:50,theta:0,type:"floor"},
		{x:400,y:400,width:50,theta:0,type:"floor"},
		{x:300,y:375,width:100,theta:0,type:"floor"},
		{x:350,y:375,width:75,theta:Math.PI/2,type:"wall"}
		],
	x:150,
	y:248,
	flagX:400,
	flagY:301,
	flagTheta:Math.PI,
	portals:[{color:"red",x:[115,100],y:[188,270],theta:[0,0],loc:[1,-1]},
		{color:"red",x:[170,75],y:[188,110],theta:[0,0],loc:[1,1]},
		{color:"blue",x:[200,300],y:[110,70],theta:[0,0],loc:[1,-1]},
		{color:"green",x:[375,275],y:[70,270],theta:[0,0],loc:[-1,-1]},
		{color:"green",x:[425,210],y:[70,270],theta:[0,0],loc:[-1,-1]}]},
		
		
	{levelText:"DECISIONS, DECISIONS",
	floor:[{x:90,y:30,width:20,theta:0,type:"flip"},
		{x:110,y:30,width:280,theta:0,type:"floor"},
		{x:390,y:30,width:20,theta:0,type:"flip"},
		{x:80,y:70,width:20,theta:0,type:"floor"},
		{x:140,y:70,width:60,theta:0,type:"floor"},
		{x:200,y:70,width:40,theta:0,type:"flip"},
		{x:200,y:100,width:50,theta:0,type:"floor"},
		{x:80,y:140,width:50,theta:0,type:"floor"},
		{x:130,y:140,width:20,theta:0,type:"flip"},
		{x:220,y:140,width:30,theta:0,type:"flip"},
		{x:250,y:140,width:90,theta:0,type:"floor"},
		{x:340,y:140,width:40,theta:0,type:"flip"},
		{x:120,y:180,width:20,theta:0,type:"floor"},
		{x:110,y:220,width:60,theta:0,type:"floor"},
		{x:170,y:220,width:20,theta:0,type:"flip"},
		{x:190,y:220,width:130,theta:0,type:"floor"},
		{x:90,y:270,width:210,theta:0,type:"floor"},
		{x:340,y:270,width:40,theta:0,type:"floor"},
		{x:30,y:340,width:110,theta:0,type:"floor"},
		{x:140,y:340,width:20,theta:0,type:"flip"},
		{x:225,y:340,width:125,theta:0,type:"floor"},
		{x:350,y:340,width:20,theta:0,type:"flip"},
		{x:370,y:340,width:50,theta:0,type:"floor"},
		{x:200,y:425,width:250,theta:0,type:"floor"},
		{x:80,y:50,width:21,theta:Math.PI/2,type:"wall"},
		{x:140,y:70,width:20,theta:Math.PI/2,type:"wall"},
		{x:90,y:250,width:21,theta:Math.PI/2,type:"wall"},
		{x:30,y:320,width:21,theta:Math.PI/2,type:"wall"},
		{x:420,y:320,width:21,theta:Math.PI/2,type:"wall"},
		{x:200,y:405,width:20,theta:Math.PI/2,type:"wall"},
		{x:450,y:405,width:20,theta:Math.PI/2,type:"wall"}		],
	x:130,
	y:218,
	flagX:200,
	flagY:220,
	flagTheta:Math.PI,
	portals:[{color:"blue",x:[125,410],y:[180,425],theta:[0,0],loc:[1,1]}]},
	
	{levelText:"THE TRIAL",
	floor:[{x:50,y:50,width:151,theta:Math.PI/2,type:"wall"},
		{x:50,y:200,width:Math.sqrt(2)*51,theta:Math.PI/4,type:"floor"},
		{x:50,y:201,width:31,theta:0,type:"bridge"},
		{x:100,y:250,width:50,theta:0,type:"floor"},
		{x:80,y:201,width:70,theta:0,type:"floor"},
		{x:148,y:202,width:73,theta:-Math.PI/4,type:"floor"},
		{x:168,y:154,width:32,theta:0,type:"bridge"},
		{x:201,y:100,width:54,theta:Math.PI/2,type:"wall"},
		{x:50,y:154,width:119,theta:0,type:"floor"},
		{x:50,y:100,width:151,theta:0,type:"floor"},
		{x:149,y:251,width:Math.sqrt(2)*25,theta:-Math.PI/4,type:"floor"},
		{x:175,y:215,width:12,theta:Math.PI/2,type:"wall"},
		{x:150,y:250,width:200,theta:Math.PI/2,type:"wall"},
		{x:175,y:225,width:25,theta:0,type:"floor"},
		{x:199,y:224,width:Math.sqrt(2)*27,theta:Math.PI/4,type:"floor"},
		{x:225,y:250,width:75,theta:0,type:"floor"},
		{x:250,y:225,width:25,theta:Math.PI/2,type:"wall"},
		{x:200,y:154,width:30,theta:0,type:"bridge"},
		{x:229,y:154,width:30,theta:0,type:"floor"},
		{x:250,y:225,width:30,theta:0,type:"floor"},
		{x:280,y:210,width:15,theta:Math.PI/2,type:"wall"},
		{x:299,y:251,width:Math.sqrt(2)*127,theta:-Math.PI/4,type:"floor"},
		{x:280,y:210,width:60,theta:0,type:"bridge"},
		{x:425,y:125,width:20,theta:0,type:"floor"},
		{x:445,y:110,width:30,theta:Math.PI/2,type:"wall"},
		{x:385,y:125,width:40,theta:0,type:"bridge"},
		{x:335,y:125,width:50,theta:0,type:"floor"},
		{x:50,y:50,width:320,theta:0,type:"floor"},
		{x:415,y:50,width:30,theta:0,type:"floor"},
		{x:150,y:351,width:20,theta:0,type:"flip"},
		{x:170,y:351,width:20,theta:0,type:"floor"},
		{x:189,y:350,width:Math.sqrt(2)*41,theta:Math.PI/4,type:"floor"},
		{x:229,y:389,width:30,theta:0,type:"floor"},
		{x:258,y:390,width:Math.sqrt(2)*20,theta:-Math.PI/4,type:"floor"},
		{x:278,y:371,width:180,theta:0,type:"floor"},
		{x:458,y:365,width:85,theta:Math.PI/2,type:"wall"},
		{x:150,y:450,width:75,theta:0,type:"floor"},
		{x:275,y:450,width:183,theta:0,type:"floor"},
		{x:460,y:450,width:20,theta:0,type:"flip"},
		{x:350,y:475,width:150,theta:0,type:"floor"},
		{x:320,y:475,width:30,theta:0,type:"flip"},
		{x:250,y:475,width:70,theta:0,type:"floor"},
		{x:223,y:451,width:Math.sqrt(2)*21,theta:-Math.PI/4,type:"floor"},
		{x:244,y:431,width:31,theta:0,type:"floor"},
		{x:275,y:431,width:19,theta:Math.PI/2,type:"wall"}],
	x:140,
	y:248,
	flagX:450,
	flagY:475,
	flagTheta:0,
	portals:[{color:"red",x:[60,60],y:[154,70],theta:[0,0],loc:[1,-1]},
		{color:"cyan",x:[260,230],y:[250,250],theta:[0,0],loc:[1,1]},
		{color:"lime",x:[255,290],y:[451,450],theta:[0,0],loc:[-1,1]},
		{color:"lime",x:[320,425],y:[450,70],theta:[0,0],loc:[1,-1]},
		{color:"lime",x:[350,185],y:[450,120],theta:[0,0],loc:[1,-1]},
		{color:"grey",x:[355,428],y:[125,145],theta:[0,0],loc:[1,-1]}]},
		
	{levelText:"RED HERRING",
	floor:[{x:100,y:430,width:25,theta:0,type:"floor"},
		{x:125,y:430,width:30,theta:0,type:"flip"},
		{x:155,y:430,width:50,theta:0,type:"floor"},
		{x:205,y:430,width:30,theta:0,type:"flip"},
		{x:235,y:430,width:115,theta:0,type:"floor"},
		{x:350,y:430,width:30,theta:0,type:"flip"},
		{x:120,y:410,width:80,theta:0,type:"floor"},
		{x:260,y:410,width:30,theta:0,type:"flip"},
		{x:290,y:410,width:90,theta:0,type:"floor"},
		{x:260,y:370,width:90,theta:0,type:"floor"},
		{x:350,y:370,width:30,theta:0,type:"flip"},
		{x:262,y:330,width:58,theta:0,type:"floor"},
		{x:100,y:310,width:80,theta:0,type:"floor"},
		{x:240,y:310,width:80,theta:0,type:"floor"},
		{x:180,y:290,width:20,theta:0,type:"floor"},
		{x:219,y:290,width:21,theta:0,type:"floor"},
		{x:120,y:210,width:30,theta:0,type:"floor"},
		{x:150,y:210,width:30,theta:0,type:"flip"},
		{x:140,y:150,width:40,theta:0,type:"floor"},
		{x:240,y:150,width:40,theta:0,type:"floor"},
		{x:100,y:70,width:20,theta:0,type:"floor"},
		{x:140,y:70,width:60,theta:0,type:"floor"},
		{x:260,y:70,width:80,theta:0,type:"floor"},
		{x:260,y:90,width:40,theta:0,type:"floor"},
		{x:100,y:50,width:30,theta:0,type:"flip"},
		{x:130,y:50,width:175,theta:0,type:"floor"},
		{x:305,y:50,width:30,theta:0,type:"flip"},
		{x:335,y:50,width:45,theta:0,type:"floor"},
		{x:101,y:50,width:381,theta:Math.PI/2,type:"wall"},
		{x:120,y:70,width:160,theta:Math.PI/2,type:"wall"},
		{x:200,y:70,width:240,theta:Math.PI/2,type:"wall"},
		{x:200,y:330,width:80,theta:Math.PI/2,type:"wall"},
		{x:219,y:290,width:21,theta:Math.PI/2,type:"wall"},
		{x:240,y:50,width:240,theta:Math.PI/2,type:"wall"},
		{x:280,y:170,width:140,theta:Math.PI/2,type:"wall"},
		{x:300,y:170,width:140,theta:Math.PI/2,type:"wall"},
		{x:300,y:90,width:20,theta:Math.PI/2,type:"wall"},
		{x:340,y:90,width:260,theta:Math.PI/2,type:"wall"},
		{x:380,y:50,width:380,theta:Math.PI/2,type:"wall"}],
	x:290,
	y:368,
	flagX:290,
	flagY:330,
	flagTheta:Math.PI,
	portals:[{color:"fuchsia",x:[106,285],y:[90,310],theta:[0,0],loc:[-1,1]},
		{color:"blue",x:[165,365],y:[90,410],theta:[0,0],loc:[-1,1]},
		{color:"red",x:[185,305],y:[290,350],theta:[0,0],loc:[1,-1]},
		{color:"lime",x:[265,305],y:[370,90],theta:[0,0],loc:[1,-1]}]}
]