
//object
var myCoffee = {
  flavor: "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true,
  //function associated with a object i.e. a Method
  reheat: function() {
    if(myCoffee.temperature === "cold") {
      myCoffee.temperature = "piping hot";
      alert("Your coffee has been reheated");
    }
  }
  
};

myCoffee.temperature = "cold";
//myCoffee["temperature"] = "luke warm";

myCoffee.reheat();

console.log(myCoffee);