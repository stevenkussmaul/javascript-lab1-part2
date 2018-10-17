"use strict";


function startGame() {
    let play = prompt("Would you like to play? Enter 'yes' or 'no'");
        if (play === "yes"){
            let userName = prompt("What is your character's name?");
            let grantName = "Grant the Mighty Chicken"
            startCombat(play, userName, grantName);
        }else if (play == "no") {
            console.log("Come back later")
        } else {
            console.log("try agian");
            startGame();
        }
}  

function startCombat(play, userName, grantName) {


    let userWins = 0;
    let grantHealth = 10;
    let userHealth = 40;
    let userHeals = 3;

    if (play === 'yes') {
        while (play === 'yes') {
            let userChoice = prompt("Would you like to attack or flee? Enter 'attack', 'flee', or 'heal'");
            if (userChoice === "attack") {
                userHealth -= getDamage();
                grantHealth -= getDamage();
                console.log(`${grantName} has ${3 - userWins} lives left`);
                console.log(`${userName} has ${userHealth} health left.`);
                console.log(`${grantName} has ${grantHealth} health left.`);   
            } else if (userChoice === "flee") {
                console.log(`${userName} is cowardly and flees. ${userName} had ${userHealth} HP remaining.`);
                break;
            } else if (userChoice === "heal") {
                if (userHeals <=0){
                    console.log("no heals left")
                } else if (userHeals > 0) {
                    userHealth += GetHealth();
                    userHealth -= getDamage();
                    console.log(`${grantName} has ${3 - userWins} lives left`);
                    console.log(`${userName} has ${userHealth} health left.`);
                    console.log(`${grantName} has ${grantHealth} health left.`);  
                }
            }


            if (grantHealth <= 0) {
                userWins++;
                grantHealth = 10;
                console.log(`${userName} has beaten ${grantName}, you need to defeat him ${3-userWins} more times!`);
            } else if (userHealth <= 0) {
                console.log(`${userName} has died by the hand of ${grantName}, please play again!`);
                break;
            } else if (userWins >=3) {
                console.log(`${grantName} has been defeated!`);
                break;
            }
        }
    }
}

function getDamage() {
    return Math.floor(Math.random()*5+1);
}

const GetHealth = () => {
    return Math.floor(Math.random()*10+1);

}

startGame();