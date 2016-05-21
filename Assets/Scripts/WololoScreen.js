#pragma strict

function Start () {

}
var colorex = 0;
function Update () {
	
	colorex ++;
	if(colorex == 2){
	gameObject.GetComponent.<UI.Image>().color = new Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0), 0.44);
	colorex = 0;
	}
}