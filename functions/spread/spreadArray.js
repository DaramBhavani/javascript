(function(){

//SpreadArray - we can combine(merge/concat ) array , we can add elements to an array and we can make a copy of it
// when we make a copy of array using spread it creates new memory with a new unique reference.
    
const fruits = ["apple","mango","orange","kiwi","avacado"];

const veggis =["carrot","beans","tomato","potato","brinjal"];

const chocolates = ["Dairymilk","5star","kitkat","kisses","ferrero rocher"];

//combine

const combine = [...fruits,...veggis,...chocolates];

console.log(combine);

//add

const adding = [...fruits,"WATERMELON",...veggis,...chocolates];

console.log(adding);

//copy

const fruitsCopy = [...fruits];

console.log(fruitsCopy);


})()