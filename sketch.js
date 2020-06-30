var ball1,database,position,ball1Position;
function setup(){
	database=firebase.database();
	//console.log(database);
	createCanvas(400,400)
	ball1=createSprite(200,200,50,50);
	ball1Position=database.ref('ball1/position');
	console.log(ball1Position.x)
	ball1Position.on("value",readPosition,showError)
}
function draw(){
	background(255)
	if(position!=undefined){
		if(keyDown(UP_ARROW)){
			writePosition(0,-5)
		}else if(keyDown(DOWN_ARROW)){
			writePosition(0,+5)
		}else if(keyDown(LEFT_ARROW)){
			writePosition(-5,0)
		}else if(keyDown(RIGHT_ARROW)){
			writePosition(+5,0)
		}

	drawSprites();
	}



}
function changePosition(x,y){
	ball1.x=ball1.x+x
	ball1.y=ball1.y+y
}
function readPosition(data){
	position=data.val();
	console.log(position.x)
	ball1.x=position.x
	ball1.y=position.y
}
function writePosition(x,y){
	database.ref('ball1/position').set({
		'x':position.x+x,
		'y':position.y+y
	})
}
function showError(){
	console.log('error in writing to database')
}