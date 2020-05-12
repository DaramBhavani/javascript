//for loop

for(let i=1;i<=10;i++){
    console.log(i);
}

for(let num=1;num<=20;num++){
    console.log(`${num}x${num}=${num*num}`);
}

for(let i=100; i>=0 ;i-=20){
    console.log(i);
}

//Infinite loop

//for(let i=10;i>=0;i++){
//    console.log(i);
//}

//for loops + arrays

const animals=["lion","giraffe","elephant","tiger","horse"]

for(let i=0;i<animals.length;i++){
    console.log(i,animals[i]);
}

const examscores=[75,95,80,72,93,84]

for(let i=0;i<examscores.length;i++){
    console.log(i,examscores[i]);
}

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

for(let i=0;i<fruits.length;i++){
    console.log(`FruitName:${fruits[i].fruitName} and Fruitprice:${fruits[i].price}`);
}

const name="BHAVANI"

for(let i=name.length-1;i>=0;i--){
    console.log(name[i]);
}

let reverseword="";

for(let i=name.length-1;i>=0;i--){
    reverseword+=name[i];   
    console.log(reverseword);
}

let reverse="";

for(let i=name.length-1;i>=0;i--){
    reverse+=name[i];   
}
console.log(reverse);

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

for(let i=0;i<students.length;i++){
    total+=students[i].marks;
}
console.log(total/students.length);