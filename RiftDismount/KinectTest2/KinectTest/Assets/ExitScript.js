#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		Application.Quit();
	}
	
	if (Input.GetKeyDown(KeyCode.Space)) {
		Application.LoadLevel(0);
	}
}