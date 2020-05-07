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

let theAnimals=["lion"]

theAnimals.unshift("tiger") //add tho start and display the no of items/length of array

console.log(theAnimals);

//Shift

theAnimals.shift()  //remove from start and displays the removed item 

console.log(theAnimals);

//CONCAT

let emojis=["simely","sad","happy"]
let apples=["pineapple","custardapple","kashmieapple"]

console.log(emojis.concat(apples))

let mangoes=["raw mango","sweet mango"]

console.log(emojis.concat(apples,mangoes)) //merge the 2  or more arrays

//INCLUDES

let biryani=["rice","cinamon","leaf","cloves","cardamom","mint","masala"]

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

let citricFruits=["lemon","orange","nimbu",5,true]

console.log(citricFruits.join());
console.log(citricFruits.join("&"));
console.log(citricFruits.join("@-->"));
console.log(citricFruits.join("AND"));



