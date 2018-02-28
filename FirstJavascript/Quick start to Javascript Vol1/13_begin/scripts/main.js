/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


alert("It's the Zombie Apocalyse!!!!  You're looting a shop and suddenly a zombie bursts through the door!!!");

var weapon = prompt("You search around frantically for a weapon and find a bow and arrow, an axe or a rubber chicken...which one do you choose?");
var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);


if(randomNumber === 0) {
    alert("The zombnie bites you, and you die!!!!");
}
else if (randomNumber === 1){
    alert("You kill the zombie with your" + " " + weapon + " " + "...You win!!!");
}


