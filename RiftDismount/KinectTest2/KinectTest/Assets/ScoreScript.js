#pragma strict

var score : int;
var scoretext_prefab : GameObject;

var slowdown_timer = 0;
var target_time = 1.0;

function Start () {
	score = 0;
}

function Update () {
	if (slowdown_timer > 0) {
		slowdown_timer -= 1;
		//Time.timeScale = 0.1;
		target_time = 1.0;
	}
	else {
		//Time.timeScale = 1.0;
		target_time = 1.0;
	}
	
	Time.timeScale += (target_time - Time.timeScale) * 0.07f;
	Time.fixedDeltaTime = Time.timeScale * 0.02f;
}

function OnGUI() {
	GUI.Box(new Rect(20,20,200,30), "Score: " + score);
}