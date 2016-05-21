#pragma strict
import System.IO;

var Coins : String;
var intCoins : int;

function OnTriggerEnter2D(c:Collider2D){
	if(c.tag == "Player"){
		//readStufFromFile();
		intCoins = parseInt(Coins) +1 ;
		Coins = intCoins.ToString();
		//writeStuffToFile();
	}
}