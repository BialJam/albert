#pragma strict

var buzz : GameObject;
var a : int;

function Start () {

}

function Update () {
 transform.position.y += 5;
 a++;
 if (a>3000000) buzz.SetActive(false);
}