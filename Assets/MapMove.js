#pragma strict
var speed : float;
function Start () {

}

function Update () {
	transform.position.y -= 1*speed/Time.deltaTime;
}