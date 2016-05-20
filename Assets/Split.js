#pragma strict
var side : int; //0 for left, 1 for right
var angleSpeed : float;
var Xspeed : float;
var positor : float;
var pos : float;

function Start () {
	positor = transform.position.x;
}

var rot = 0;
function Update () {
	if (Input.GetKey("space")){
		if(side == 0){
			if(rot <= 45){
				transform.rotation.z -= 0.04*angleSpeed/Time.deltaTime;
				rot ++;
				if(rot == 45) rot = 0;
			}
			transform.position.x += 1*Xspeed/Time.deltaTime;
		}
		if(side == 1){
			if(rot <= 45){
				transform.rotation.z += 0.04*angleSpeed/Time.deltaTime;
				rot ++;
				if(rot == 45) rot = 0;
			}
			transform.position.x -= 1*Xspeed/Time.deltaTime;
		}
	}
	else{
	pos = transform.position.x;
		if (pos > positor) {
		if(side == 0){
			transform.rotation.z += 0.08*angleSpeed/Time.deltaTime;
			transform.position.x -= 1*Xspeed/Time.deltaTime;
		}
	}
	else if (pos < positor) {
		if(side == 1){
			transform.rotation.z -= 0.08*angleSpeed/Time.deltaTime;
			transform.position.x += 1*Xspeed/Time.deltaTime;
		}
	}
	}
}	