#pragma strict

function Start () {

}

var Panel1 : GameObject;
var Panel2 : GameObject;
var speed = 3.0f; //how fast it shakes
var amount = 1.0f; //how much it shakes
 
function Update()
{
  Panel1.transform.position.x = Mathf.Sin(Time.time * speed);
  Panel1.transform.position.y = Mathf.Sin(Time.time * speed);
  Panel2.transform.position.x = -Mathf.Sin(Time.time * speed);
  Panel2.transform.position.y = -Mathf.Sin(Time.time * speed);
}

function loadLevel(nr : int){
	Application.LoadLevel(nr);
}