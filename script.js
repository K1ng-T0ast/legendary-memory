// let myName = "Kyle";
// /* alert("Welcome to the THUNDER DOME" + myName); */
// const myFavColor = "blue";

// console.log(myFavColor)

// console.log ("May the force be with you")

// myFavColor = "purple";
// console.log(myFavColor);

// let userName = prompt("what is your name?");

// alert("Hello " + userName");

// let userName = prompt("Do you like food? Type Y or NO");
// console.log(FooodChoice);

// .twoLowerCase()


function likesFood() {
    let foodChoice = prompt("Tired of eating fast food? Type yes or no");
    console.log(foodChoice);

    // let promptChoice = (yes, no);

    if (foodChoice == 'yes') {
        alert("Welcome! You're in good oven mitt hands!");
    } else if (foodChoice == 'no') {
        let promptChoice = prompt("Are you sure?");
        if (promptChoice == 'yes') {
            alert("No judgement here!...well, perhaps a tablespoon of judgement...")
        }
        else if (promptChoice == 'no') {
            alert("You have chosen wisely, young grasshoppa.")
        }
    } else {
        alert("Is nihilism a cuisine?");
    }
    return foodChoice;
}

function okay() {
    if (confirm("Should I tell Gordon Ramsey what you told me?")) {
        document.write("I told him, he says he believes in you and to.. ahem (his words not mine)... GET BACK TO WORK!");
    } else {
        document.write("OK, I won't, but you're missing out on a phone call from a very stern but fair British man.");
    }
}

function goodbye() {
    document.write("Believe, and one day you will be your own Iron Chef! See you in the kitchen!");
}
console.log();







// function functionName(parameters){code to execute goes here, argument?};

// function addTwoNumbers(num1, num2){
//     // let num1 = 5;
//     // let num2 = 10;
//     let sum = num 1 + num2;
//     console.log(sum);
//     return sum;
// }

// console.log(addTwoNumbers());

// let newNumber = addTwoNumbers();