NoseX = 0;
NoseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	music_coin = loadSound("coin.wav");
	music_gameover = loadSound("gameover.wav");
	music_jump = loadSound("jump.wav");
	music_kick = loadSound("kick.wav");
	music_mariodie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	Video = createCapture(VIDEO);
	Video.size(800, 370);
	Video.parent("game_console");

	poseNet = ml5.poseNet(Video, model_loaded);
	poseNet.on("pose", gopose);
	}

function draw() {
	game();
}

function model_loaded(){
console.log("Model Loaded!");
}

function gopose(results){
if(results.length > 0){

NoseX = results[0].pose.nose.x;
NoseY = results[0].pose.nose.y;

console.log("NoseX: "+NoseX+", NoseY: "+NoseY);
}
}





