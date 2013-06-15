#pragma strict

function Start () {

}

function Update () {
	/*
	if (Input.GetKey(KeyCode.A)) {
		transform.Rotate(0.0, 1.0, 0.0);
	}
	*/
	
	transform.Rotate(0.0, Input.GetAxis("Mouse X") * 4.0, 0.0);
}