#pragma strict
var Bravo : GameObject;

function Start () {
}

function Update () {
	transform.RotateAround(transform.position, transform.up, Time.deltaTime * 90f);
}

function OnTriggerEnter2D (c:Collider2D) {
	Bravo.SetActive(true);
	this.GetComponent.<Renderer>().enabled = false;
}