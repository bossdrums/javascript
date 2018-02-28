/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


//Variables

//var myFavouriteMovie = prompt("What is your Favourit Movie");
//alert("My favourite movie is" + " " + myFavouriteMovie);

//var randomNumber = Math.floor(Math.random()* 22);
//alert(randomNumber);

/*
var answer = prompt("What's the capital of New York?");

if(answer === "Albany") {
    alert("Your are correct!");
}
else{
    alert("Sorry," + " " + "that's not correct");
}
*/

/*
var favouriteAnimal = prompt('What is your favourite animal?');

if(favouriteAnimal === "cat") {
    alert("Cats are awesome!");
}
else if(favouriteAnimal === "dog") {
    alert("Dogs are okay...");
}
else {
    alert("Good choice");
}
*/

/*
//var randomNumber = Math.round(Math.random()* 15);
var randomNumber = 15


if (randomNumber % 3 === 0 && randomNumber != 0) {
    alert("Fizz");
}
else if(randomNumber % 5 === 0 && randomNumber != 0) {
    alert("Buzz");
}
else if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
    alert("FizzBuzz!!!");
}
else {
    console.log(randomNumber);
}
*/

//var randomNumber = Math.round(Math.random()* 15);
var randomNumber = 15

if(randomNumber % 3 === 0 && randomNumber != 0) {
    if(randomNumber % 5 === 0) {
        alert("FizzBuzz!!!");
    }
    else {
        alert("Fizz");
    }
}
else if (randomNumber % 5 === 0 && randomNumber !=0){
    alert("Buzz");
}
else {
    console.log(randomNumber);
}