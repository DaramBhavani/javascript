(function(){

const prices = [90,40,20,100,50,70];

const badSort = prices.sort()
console.log(badSort);

// const ascending = prices.sort((a,b) => a-b); // sort mutates the original array 
// console.log(ascending);
// console.log(prices);

// const descending = prices.sort((a,b) => a-b);
// console.log(descending);
// console.log(prices);

//Example 1

const ascending = prices.slice().sort((a,b) => a-b); //we can use slice() method or two variables with duplicate data of same array
console.log(ascending);
console.log(prices);

//Example 2

const descending = prices.slice().sort((a,b) => a-b);
console.log(descending);
console.log(prices);

//Example 3

const books=[{
    title   :   'Good Omens',
    authors :   ['Terry','Neil'],
    rating  :   4.25
},
{
    title   :   'American Gods',
    authors :   ['Neil'],
    rating  :   2.11
},
{
    title   :   'A Gentleman in Moscow',
    authors :   ['Amor Towels'],
    rating  :   4.36
}
];

const rating1 = books.slice().sort((a,b) => a.rating-b.rating);
console.log(rating1);

const rating2 = books.slice().sort((a,b) => b.rating-a.rating);
console.log(rating2);

console.log(books);


})()