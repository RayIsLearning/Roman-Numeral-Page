const cheese = document.querySelector("#cheese");//button
const inNumber = document.querySelector("#Integer");//user input
const roman = document.querySelector("#roman");//result
const colors = ["white", "green", "red", "orange", "lightblue"];
let colorIndex = 0;

function cheeseIt(){//main function
    const num = parseInt(inNumber.value);//checks if input is integer
    const passIt = romanize(num);//call the converter script w/ user's int
    roman.textContent = num + " equals " + passIt + " in Roman notation.";//output string
}

function delayIt(){//attemt to slow down program
    setTimeout(cheeseIt, 500);//slows down main by 0.5 seconds
}

cheese.addEventListener("click", function(){//if the ceasar button's hit
    cheeseIt();                             //you must cheeseIt!
});

inNumber.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {//if the enter button's hit                      
        cheeseIt();             //you must cheeseIt!
    }
});

function romanize (num) {//100% not mine
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function changeColor() {
    document.body.style.backgroundColor = colors[colorIndex]; // Change background color
    colorIndex = (colorIndex + 1) % colors.length; // Loop through the colors
}

// Set an interval to run changeColor every 500ms (0.5 seconds)
setInterval(changeColor, 2000);
