#pragma strict
import System.IO;

var Coins : String;
var intCoins : int;

function OnTriggerEnter2D(c:Collider2D){
	if(c.tag == "Player"){
		
		intCoins = parseInt(System.IO.File.ReadAllText("SANDR/save.txt")) +1 ;
		System.IO.File.WriteAllText("SANDR/save.txt", intCoins.ToString());
		Debug.Log(System.IO.File.ReadAllText("SANDR/save.txt"));
	}
}

function IleHajsow(){
	intCoins = parseInt(System.IO.File.ReadAllText("SANDR/save.txt"));
	Debug.Log(System.IO.File.ReadAllText("SANDR/save.txt"));
}