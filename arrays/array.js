//ARRAYS

let a=["Apple", "Mango", "orange","Grapes"];

let b=[null, true, "hello", 3];

//MODIFY

a[2]="Strawberry";

console.log(a);

//ADD

a[4]="Kiwi"; //Adding to the end

console.log(a);

//OR

a[a.length]="Watermelon"; //Adding to the end

console.log(a);

//ARRAY METHODS

//PUSH

let c=["pen", "pencil","eraser"];

c.push("sharpner"); //push to the end & it displays the no of items

console.log(c);

//POP

c.pop() //remove from end and displays the removed item 

// let items=c.pop()  we can store in variable

console.log(c);

// let items=c.pop()

//Unshift

let theAnimals=["lion"];

theAnimals.unshift("tiger") //add tho start and display the no of items/length of array

console.log(theAnimals);

//Shift

theAnimals.shift()  //remove from start and displays the removed item 

console.log(theAnimals);

//CONCAT

let emojis=["simely","sad","happy"];
let apples=["pineapple","custardapple","kashmirapple"];

console.log(emojis.concat(apples))

let mangoes=["raw mango","sweet mango"];

console.log(emojis.concat(apples,mangoes)) //merge the 2  or more arrays

//INCLUDES

let biryani=["rice","cinamon","leaf","cloves","cardamom","mint","masala"];

console.log(biryani.includes("leaf")); //true

console.log(biryani.includes("leaf",3)); //false 

console.log(biryani.includes("mustard")); //false

//indexOf

console.log(biryani.indexOf("cloves")); //3

console.log(biryani.indexOf("jeera"));  //-1

console.log(biryani.indexOf("cloves",2)); //3

//reverse()

console.log(biryani.reverse()); //reverse an array

//join()

let citricFruits=["lemon","orange","nimbu",5,true];

console.log(citricFruits.join());
console.log(citricFruits.join("&"));
console.log(citricFruits.join("@-->"));
console.log(citricFruits.join("AND"));

//slice()

let vegetables=["carrot","cabbage","cauliflower","brocoli","Brinjal","Beans"];

console.log(vegetables.slice(0,3));
console.log(vegetables.slice(2,5));
console.log(vegetables.slice(3));
console.log(vegetables.slice(-4));
console.log(vegetables.slice(-5,-2));
console.log(vegetables.slice());

//splice()

let veggis = vegetables;
console.log(veggis);
console.log(veggis.splice(2,0,"onion","spinach")); //insert
console.log(veggis);
console.log(veggis.splice(3,2)); //delete
console.log(veggis);
console.log(veggis.splice(3,2,"potato","tomato"));
console.log(veggis);

//sort()

let singers=["geetha","krishna","deepu","manu","sriram","hemachandra","bargavi"];
console.log(singers.sort());
let numbers=[9,5000,907,29,777890,1000000,62728];
console.log(numbers.sort());

//Nested Array

const mix=[
    ["mango","apple"],
    ["beans","carrot"],
    ["badam",["kaju","anjeer"]],
    ["milkshake",["ice-cream",["sweet","juice"]]]
];

console.log(mix);
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[1][1]);
console.log(mix[3][0]);
console.log(mix[1][1]="tomato");
console.log(mix);
console.log(mix[2][1][1]);
console.log(mix[3][1][1][0]);
console.log(mix[3][1][1][1]="halwa");
console.log(mix);







