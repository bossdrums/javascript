

//Repeating Objects
var mark ={
    name: "Mark",
    tshirtColour: "navy blue"

}

var lisa ={
    name: "Lisa",
    tshirtColour: "red"

}

//do not repeat yourslef when writing code 'DRY'

//object constructor

function Friend(name,tshirtColour) {
    this.name = name;
    this.tshirtColour = tshirtColour;

}

var denny = new Friend("Denny", "green");

alert(denny.name);