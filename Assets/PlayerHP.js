#pragma strict
import UnityEngine.UI;
var HP = 100;
var GO : GameObject;
var Win : GameObject;

var scorer : Text;

function Start () {
}
var Points : int;
var c = 0;
function Timur(a : int){
	if(c <a){
	Points += 10;
	c++;
	}
	else c = 0;
}

function Update () {
	Timur(10);
	scorer.text = Points.ToString();
	Debug.Log (Points);
}

function OnTriggerStay2D (c : Collider2D){
	if(c.tag == "Wall"){
		HP -= 100;
		if (HP <= 0){
			GO.SetActive(true);
			yield WaitForSeconds (5);
			Application.LoadLevel(1);
		}
	}
	
	if(c.name == "finish"){
			Win.SetActive(true);
			yield WaitForSeconds (5);
			Application.LoadLevel(3);
	}
	Debug.Log("HP:"+HP);
}