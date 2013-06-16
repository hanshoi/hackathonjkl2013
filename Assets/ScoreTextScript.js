#pragma strict

var direction : Vector3;
var rect = Rect(0,0,300,100);
var textstyle = new GUIStyle();
var score = 0;

function Start () {
	direction = (new Vector3(Random.RandomRange(-1, 1), Random.RandomRange(-1, 1), Random.RandomRange(-1, 1))).normalized;
	textstyle.fontSize = 24;
	textstyle.normal.textColor = Color.white;
}

function Update () {
	transform.Translate(direction * 0.05f);
	textstyle.normal.textColor.a -= 0.01;
	if (textstyle.normal.textColor.a <= 0.0) {
		Destroy(gameObject);
	}
}

function OnGUI() {
	var point = Camera.main.WorldToScreenPoint(transform.position);
    rect.x = point.x;
    rect.y = Screen.height - point.y; // bottom left corner set to the 3D point
    GUI.Label(rect, "" + score, textstyle); // display its name, or other string
}
