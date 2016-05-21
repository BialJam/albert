#pragma strict
var speed : float;
function Start () {

}

function Update () {
	transform.position.y -= 1.5*speed/Time.deltaTime;
}