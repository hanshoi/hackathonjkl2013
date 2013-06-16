#pragma strict

var item : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {

	Debug.Log(collision.gameObject.name);

	if (collision.gameObject.tag == "Item") {
		// todo: pudota edellinen kama
		
		item = collision.gameObject;
		item.transform.parent = gameObject.transform;
		item.rigidbody.isKinematic = true;
		
		item.transform.localPosition = Vector3.zero;
		item.transform.localRotation = Quaternion.identity;
	}		
}