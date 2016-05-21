#pragma strict
var Coins : int;
var skins : int;

function Price(value : int, skinId : int){
	Coins = parseInt(System.IO.File.ReadAllText("SANDR/save.txt"));
	if (value >= Coins){
		if (skins < skinId){
			skins++;
			System.IO.File.WriteAllText("SANDR/skin.txt", skins.ToString());
		}
	}
}