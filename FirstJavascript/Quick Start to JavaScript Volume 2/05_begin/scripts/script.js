
/*
var randomNumber = Math.round(Math.random()* 100);

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

*/


for( i = 1; i <= 100; i++ ){
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else  {
        console.log("Fizz");
        }
    }
    else if(i % 5 === 0) {
        console.log("Buzz");
    }
    else {
       console.log(i);
    }
}


for( i = 1; i <= 100; i++ ){
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log(i + " " + "is divisible by 3 & 5");
        }
        else  {
        console.log(i + " " + "is divisible by 3");
        }
    }
    else if(i % 5 === 0) {
        console.log(i + " " + "is divisible by 5");
    }
}