function preload() {
	world_start = loadSound("world_start.wav");
	jump= loadSound("jump.wav")
	mario_coin= loadSound("coin.wav")
	kick= loadSound("kick.wav")
	mario_die= loadSound("mariodie.wav")
    mario_gameover= loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas')
	video=createCapture(VIDEO)
	video.parent('game_console')
	video.size(800,400)
	posenet=ml5.poseNet(video,modelloaded)
     posenet.on('pose',gotresults)
}

function draw() {
	game()
}

function modelloaded(){
	console.log("model is loaded")
}

function gotresults(result){
	if (result.length>0) {
		console.log(result)
	  nosex=result[0].pose.nose.x
	  nosey=result[0].pose.nose.y  
	}
}


