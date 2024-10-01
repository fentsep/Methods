var str = "rio";
var ro = "return on investments";
document.write(str.toUpperCase());
document.write("<br>");
document.write(str.startsWith('r'))
document.write("<br>");
var check = new RegExp("investments");
var res = check.test(ro);
document.write(res)
document.write("<br>");


var sportscars = ["Bugatti Chiron", "Rimac Nevera", "Lamborghini Sián", "McLaren Speedtail", "McLaren Artura"];
var cars;

for (i = 0; i < sportscars.length; i++) {
    var cars = sportscars[i] + "<br>";
document.write(cars);
}

// dates switches
var day;
switch (new Date().getDay()) {
 case 0:
    day = "Sunday"
    break
case 1:
    day = "Monday"
    break
case 2:
    day = "Tuesday"
    break
case 3:
    day = "Wednesday"
    break
case 4:
    day = "Thursday"
    break
case 5:
    day = "Friday"
    break
case 6:
    day = "Saturday"
}
document.write(day)