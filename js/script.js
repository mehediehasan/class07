// Homework 1 : Celsius to Fahrenheit



function ctoF(celsiousNum) {
    var getFarenheit;
    getFarenheit = (celsiousNum * 9 / 5) + 32;

    document.getElementById("disFarenheit").innerHTML = getFarenheit;
}

// Homework 2 : Smallest Number



function smallestNum(num1, num2, num3) {
    var smallestIs;

    if (num1 < num2) {
        if (num1 < num3) {
            smallestIs = num1;
        } else {
            smallestIs = num3;
        }
    } else {
        smallestIs = num2;
    }
    document.getElementById("setSmallestNum").innerHTML = smallestIs;
}
smallestNum(60, 50, 70);
smallestNum(200, 210, 90);

// Homework 3 : Registration Form

const clickReg = () => {
    var name = document.getElementById("getName").value;
    var dob = document.getElementById("getDOB").value;
    var gender = document.getElementById("getGenderM").value; document.getElementById("getGenderF").value;
    var district = document.getElementById("getDist").value;

    document.getElementById("setName").innerHTML= name;
    document.getElementById("setDOB").innerHTML= dob;
    document.getElementById("setGender").innerHTML= gender;
    document.getElementById("setDist").innerHTML= district;
}


// Practice 1
function evenNumber() {
    var i = 1;
    var evenNum = " ";

    while (i <= 10) {
        if (i % 2 == 0) {
            evenNum += i + "<br>";
        }
        i++;
    }
    document.getElementById("func_1").innerHTML = evenNum;
}

evenNumber();

// Practice 2


function sum(a, b) {
    sumResult = a + b;
    document.getElementById("func_2").innerHTML = sumResult;
}

sum(12, 12);

// Practice 3

function weightConverter(numValue) {
    document.getElementById("setKG").innerHTML = numValue / 2.204;
}


// Practice 4
function personDetails(name, age, isAlive, district) {
    var checkAlive;

    if (isAlive == true) {
        checkAlive = "He is alive";
    } else {
        checkAlive = "He is no More";
    }

    var totalDetails = `Name : ${name} <br> Age : ${age} <br>Status : ${checkAlive} <br>District: ${district}`;
    document.getElementById("setPersonInfo").innerHTML = totalDetails;
    return totalDetails;

}



console.log(personDetails("Mehedi", "28", true, "Brahmanbaria"));
// Extra Practice

var day;

switch (6) {
    case 0:
        day = "Friday";
        break;
    case 1:
        day = "Saturday";
        break;
    case 2:
        day = "Sunday";
        break;
    case 3:
        day = "Monday";
        break;
    case 4:
        day = "Tuesday";
        break;
    case 5:
        day = "Wednesday";
        break;
    case 6:
        day = "Thursday";
        break;
    default:
        day = "no day";
        break;
}
document.getElementById("daycounter").innerHTML = "today is " + day;


var i = 1;
var text = " ";
do {

    if (i % 2 == 1) {
        text += "<br>" + i + " is  Odd Number"
    }
    i++;

} while (i < 10);
document.getElementById("oddnumber").innerHTML = text;


var countryArray = ["Bangladesh", "Canada", "India", "Nepal", "Pakistan", "United State", "Malaysia"];
countryArray[6] = "Chine";

document.getElementById("country").innerHTML = countryArray[6] + " ";