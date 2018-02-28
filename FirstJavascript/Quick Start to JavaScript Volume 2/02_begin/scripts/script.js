

var sign = prompt("What is your astrological sign?").toLowerCase();
alert("Sensing...sensing...sensing your future");

switch(sign){
    case "taurus":
        alert("The full hamburger moon crosses your ruling planet. You will have a strong urge today to enjoy a meal around noon, you'll then either eat lunch or not eat lunch and be very hungry.");
        break;
    case "virgo":
        alert("Your emotions will make you feel things today");
        break;
    case "leo":
        alert("Due to the energy of the changing moon there is a high likelyhood that yo may fall asleep randomly.");
        break;
    default:
        alert("Please enter a valid sign");
        break;
}