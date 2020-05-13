//for loop


//syntax 

//for(initialExpression; condition; incrementExpression){}

//Example 1
for(let i=1; i<=10; i++){
    console.log(i);
}

//Example 2

for(let num=1; num<=20; num++){
    console.log(`square of ${num} is ${num} x ${num} = ${num*num}`);
}

//Example 3

for(let i=100; i>=0; i-=20){
    console.log(i);
}

//Infinite loop

//for(let i=10; i>=0; i++){
//    console.log(i);
//}

//for loops + arrays

//Example 1

const animals=["lion","giraffe","elephant","tiger","horse"]

for(let i=0; i<animals.length; i++){
    console.log(i,animals[i]);
}

//Example 2

const examscores=[75,95,80,72,93,84]

for(let i=0; i<examscores.length; i++){
    console.log(`Index value of ${i} is ${examscores[i]}`);
}

//Example 3

const word1=["blue","mango","milk","ice"];
const word2=["berry","lassi","shake","cream"];

for(let i=0; i<word1.length; i++){
   console.log(`${word1[i]}${word2[i]}`);
}

// for loop + arrays + objects

//Example 1

const fruits=[
    {
        fruitName   :   "Apple",
        price       :   10
    },
    {
        fruitName   :   "Mango",
        price       :   15
    },
    {
        fruitName   :   "strawberry",
        price       :   8
    }
];

for(let i=0; i<fruits.length; i++){
    console.log(`FruitName:${fruits[i].fruitName} and Fruitprice:${fruits[i].price}`);
}

//Example 2

const students=[
    {
        studentName :   "Bhavani",
        marks       :   89
    },
    {
        studentName :   "Rakesh",
        marks       :   94
    }
];

let total=0;

for(let i=0; i<students.length; i++){
    total+=students[i].marks;
}
console.log(total/students.length);

// for loop + string

//Example 1

const name="BHAVANI"

for(let i=name.length-1; i>=0; i--){
    console.log(name[i]);
}

//Example 2

let reverseword="";

for(let i=name.length-1; i>=0; i--){
    reverseword+=name[i];   
    console.log(reverseword);
}

//Example 3

let reverse="";

for(let i=name.length-1; i>=0; i--){
    reverse+=name[i];   
}
console.log(reverse);


//Nested For loops

const gameboard=[
    [8,56,4,28],
    [68,3,82,7],
    [9,27,5,72],
    [45,9,37,2]
];

let sum=0;

for(let i=0; i<gameboard.length; i++){
    console.log(gameboard[i]);
    for(let j=0; j<gameboard[i].length; j++){
        console.log(gameboard[i][j]);
        sum=sum+gameboard[i][j];
    }
}
console.log(sum);

//While loop

//Example 1

let m=1;

while(m<=10){
    console.log(m);
    m++;
}

//Example 2

const target=Math.floor(Math.random()*10);
let guess=Math.floor(Math.random()*10);

while(guess!==target){
    console.log(`Target No: ${target} and Guess No: ${guess}`);
    guess=Math.floor(Math.random()*10);
}
console.log(`Target No: ${target} and Guess No: ${guess}`);
console.log("CONGRAGULATIONS YOU WIN");

//FOR...OF (mainly used for Arrays and Strings)

//with Array

//Example 1

let cars=["AUDI","BMW","SCORPIO","HUNDAI","MARUTI"]

for(let sub of cars){
    console.log(sub);
}

//with String

let country="singapore";

for(let sub of country){
    console.log(sub.toUpperCase());
}

//Example-using for loop and for...of loop

const magicSquare=[
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

for(let i=0; i<magicSquare.length;i++){
    let row=magicSquare[i];
    console.log(row);
    let magicSum=0;
    for(let j=0;j<row.length;j++){
        console.log(row[j]);
        magicSum+=row[j];
    }
    console.log(`MAGICSUM is ${magicSum}`);
}

for(outer of magicSquare){
    console.log(outer);
    let sum=0;
    for(inner of outer){
        console.log(inner);
        sum+=inner;
    }
    console.log(`SUM is ${sum}`);
}

//For...of loop with Object

const movieRating={
    alavaikuntapuram    :   4.5,
    bharatAneNenu       :   4.2,
    bahubali            :   5,
    indra               :   4.8,
    boss                :   3.8
};

for(let cinema of Object.keys(movieRating)){
    console.log(cinema,movieRating[cinema]);
}

let totalRating=0;

for(let ratings of Object.values(movieRating)){
    totalRating+=rating;
}
console.log(totalRating);

//For...In loop (mainly used for objects)

let batminton={
    sainaNehwal :   9,
    sindhu      :   15,
    srikanth    :   11,
    gopichand   :   13,
    sai         :   8   
};

let s=0;

for(let score in batminton){
    console.log(score,batminton[score]);
    s+=batminton[score];
}
console.log(s);
