#pragma strict
import UnityEngine.UI;
var scorer : UI.Text;
var score : int;
var a = 0;

function Start() {
scorer = GetComponent.<Text>();
}

function Update () {
	if(a<10){
	a++;
	score +=100;
	}
	else a = 0;
	scorer.text = score.ToString();
	
	
}