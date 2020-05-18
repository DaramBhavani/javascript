//syntax

// function funName(){
//     code
// }

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
Greetings();

//Example 3- with Arguments [we can pass n number of arguments-we can pass strings, Arrays etc..]

function greet(username){
    console.log(`Good Morning, ${username}`);
}

//Functions with Multiple Arg's

function add(a,b){
    console.log(`ADD: ${a+b}`);
}

function sub(a,b){
    console.log(`SUB: ${a-b}`);
}

function mul(a,b){
    console.log(`MUL: ${a*b}`);
}

//Return Statement

function div(a,b){
    return a/b;
}

function badminton(name){
    if(name === "SINDHU"){
        return true;
    }
    else{
        return false;
    }
}

//without else

function sport(name){
    if(name === "SINDHU"){
        return true;
    }
        return false;
}

//without if else

function isBlue(color){
   return color === "BLUE";
}


//Example

function containsBlue(arr){
    for(let color of arr){
        if(color === "BLUE" || color === "PINK"){
            return true;
        }
    }
    return false; 
}

//Example

function isValidPassword(password,userName){
    if(password.length >=8 &&  password.indexOf(' ') === -1 &&  password.indexOf(userName) === -1){
        return true;
    }
    return false;
}

function isValid(password,userName){
    const pwd = password.length >= 8;
    const pwdNoSpace = password.indexOf(' ') === -1;
    const pwdNoUsername = password.indexOf(userName) === -1;
    return pwd && pwdNoSpace && pwdNoUsername;
}

//Example

let totalAvg=0;

function average(arr){
    for(let count of arr)
    {
        console.log(count);
        totalAvg+=count;
    }
    return totalAvg/arr.length;
}

//Example

function isPangram(sentence)
{
    for (let char of "abcdefghijklmnopqrstuvwxyz"){
        if(sentence.indexOf(char)===-1){
        return false; 
        }
    }
    return true;
}

//Example

function getCard(){

}

//SCOPE

//Example 1- Function scope

function testing(name){
    console.log(name);
}

//Example-2 Function scope

let bird="peacock";

function birdWatch(){
    let bird="pigeon";
    console.log(bird);
}
birdWatch();
console.log(bird);

//Example 2- Block scope

//Example

let nums=[1,2,3,4,5];
let i=15;
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log(i);

//Example

let N=[1,2,3,4,5];
var q=15;
for(var q=0;q<N.length;q++){
    console.log(N[q]);
}
console.log(q);

//Example

function doubleArr(arr){
    const result=[];
    for(let num of arr){
        let double= num * 2;
        result.push(double);
    }
    return result;
}

//Example 3- Lexical scope/Closure

//Example

function outer(){
    let outerName="Bhavani"
    console.log("Daram");
    function inner(){
       //let outerName="Rakesh";
       console.log(`InnerName:${outerName}`); 
    }
    inner();
}
outer();

//FUNCTION EXPRESSIONS

function add(x,y){
    return x+y;
}

//Anonymous function-No Name

const cal = function (x,y){
    return x+y;
}

//Name Function

const product=function multiply(x,y){
    return x*y;
}

//Higher order Functions

//Example - Functions stored in array

function ADD(x,y){
    return x+y;
}

const SUBTRACT= function (x,y){
    return x-y;
}

const DIVIDE= function DIV(x,y){
    return x/y;
}

const operations=[ADD, SUBTRACT, DIVIDE];

console.log(operations[0](3,4));

for( let func of operations){
    console.log(func(100,25));
}

//Example - Functions stored in object

const operator={
    addition    :   ADD,
    subtraction :   SUBTRACT,
    division    :   DIVIDE
};

console.log(operator.addition(50,25));
console.log(operator.subtraction(50,25));
console.log(operator.division(50,25));

//Function as Arguments

//Accept other function has arguments

//Example

function callMe(func){
    func();
    func();
    func();
}

function happy(){
    console.log("I'm happy");
}

function beautiful(){
    console.log("beautiful photo");
}

callMe(happy)

//Example

function callMeNTimes(action,num){
    for(let i=0; i<num; i++){
        action();
    }
}

callMeNTimes(beautiful,5)

//Example

function pickOne(func1,func2){
    let randamValue=Math.random();
    if(randamValue<0.5){
        func1();
    }
    else{
        func2();
    }
}

pickOne(happy,beautiful)

//Return a function -- closure

function outer(num1) {
    num1 = 5;
    return function inner(num2) {
        num2 = 15;
        return num1 * num2;
    }
    //inner();
}

let outerFnresult = outer(5); // this returns a inner function

// outerFnresult is expression which holds the inner function

//outer function return the inner function-the function scope still exists 

console.log(outerFnresult(15));

//Example

function outFunc()
{
    console.log("outer function");

   return function inFunc(){

        console.log("inner function");
    }

    //inFunc();
}

let outerStore = outFunc();

console.log(outerStore());

//HOISTING

console.log(place);
var place="America"
//console.log(place);      //var is hoisted

//console.log(city);
let city="hyderabad";
console.log(city);        //let, const are not hoisted

sweets();
function sweets(){
    console.log("Carrot Halwa");
}
//sweets();               //functions are Hoisted





