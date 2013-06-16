#pragma strict

var scoreModifier = 1.0f;
var chest : GameObject;
var scorescript : ScoreScript;

function Start () {
	chest = GameObject.FindGameObjectWithTag("Player");
	scorescript = GameObject.Find("ScriptObject").GetComponent(ScoreScript);
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
	//Debug.Log(collision.impactForceSum);
	
	if (collision.gameObject.tag == "Hit" || collision.gameObject.tag == "Item") {
		chest.rigidbody.isKinematic = false;
	}
	
	var magnitude = collision.impactForceSum.magnitude;
	if (magnitude) {
		var add_score = magnitude * scoreModifier;
		scorescript.score += add_score;
		
		if (magnitude > 3.0) {
			var collision_point = collision.contacts[0].point;
			var text = Instantiate(scorescript.scoretext_prefab, collision_point, Quaternion.identity);
			text.GetComponent(ScoreTextScript).score = add_score;
		}
		
		if (magnitude > 8.0) {
			scorescript.slowdown_timer = 60;
		}
		
		if (collision.gameObject.tag == "Item") {
			collision.gameObject.transform.parent = gameObject.transform;
			//collision.gameObject.rigidbody.isKinematic = true;
		}
	}
}