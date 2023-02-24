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
// if (foodChoice == 'yes' || foodChoice == 'YES' || foodChoice == 'Yes') {

function likesFood() {
    let foodChoice = prompt("Tired of eating fast food? Type yes or no").toLowerCase();
    console.log(foodChoice);
    while (foodChoice !== 'yes') {
        foodChoice = prompt("Gordon Ramsay says guess again..")
    } 
        alert("Love the encouragement, you win a prize!");
}
// likesFood();

function userReward() {
    let rewardPics = parseInt(prompt("Your dilligence is rewarded with pics of Gordon Ramsay, how many would you like to see? Pick between 1 & 25!"));
    console.log("user wants " + rewardPics + "pics");

    while (rewardPics > 25) {
        rewardPics = parseInt(prompt("Ramsay says to pick a number between 1 & 25"));
        console.log("user wants " + rewardPics + "pics");

    } 
        alert("YOU get a Ramsay! (happy Oprah noises)");
        console.log("user wants " + rewardPics + "pics");
        for (let i = 0; i < rewardPics; i++) {
            document.write('<img src="images/ramsay.jpg">');
        }
}
// userReward();



//  likesFood();       


// for (let i = 0; i < 20; i++){
//     display=img src="images/ramsay.jpg";
// }

// let sum = 0;

// while (true){
//     let value = +prompt("Enter a Number", '');
//     if (!value) break;
//     sum +=value;
// }
// console.log( 'Sum: ' + sum);


// if (foodChoice == 'yes') {
//     alert("Welcome! You're in good oven mitt hands!");
// } else if (foodChoice == 'no') {
//     let promptChoice = prompt("Are you sure?");
//     if (promptChoice == 'yes') {
//         prompt("Iron Chef Morimoto says: Try Again..")
//     }
//     if (promptChoice == 'yes') {
//         alert("The Iron Chefs are conferring upon your decision, prepare thy apron..")
//     }
//     else if (promptChoice == 'no') {
//         alert("You have chosen wisely, grasshoppa..");
//     }
// } else {
//     alert("Is nihilism a cuisine?");
// }
// return foodChoice;

function okay() {
    if (confirm("Should I tell Gordon Ramsey about this?")) {
        document.write("I told him, he says he believes in you and to.. ahem (his words not mine)... GET BACK TO WORK!");
    } else {
        document.write("OK, I won't, but you're missing out on a phone call from a very stern but fair British man.");
    }
}
console.log(okay);
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