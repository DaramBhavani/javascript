//syntax

//function funName(){
    //code
//}

//Example 1

function rollDie(){
    let roll=Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){
    for(let i=0; i<numRolls; i++){
        rollDie();
    }    
}

//Example 2

function Greetings(){
    console.log("Good Morning");
}

//Example 3- with Arguments [we can pass n number of arguments-we can pass strings, Arrays etc..]

function greet(username){
    console.log(`Good Morning , ${username}`);
}