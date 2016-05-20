#pragma strict
var HP = 100;
var GO : GameObject;
var Win : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerStay2D (c : Collider2D){
	if(c.tag == "Wall"){
		HP -= 100;
		if (HP <= 0){
			GO.SetActive(true);
		}
	}
	
	if(c.name == "finish"){
			Win.SetActive(true);
			yield WaitForSeconds (5);
			Application.LoadLevel(0);
	}
	Debug.Log("HP:"+HP);
}