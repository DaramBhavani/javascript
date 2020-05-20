(function(){

const nums = [4,6,3,9,2,7];

//Example 1

const addition = nums.reduce((accumulator,currentvalue) => {
    return accumulator+currentvalue;
})
console.log(`Totalvalue: ${addition}`);

//Example 2

const product = nums.reduce((accumulator,currentvalue) => {
    return accumulator*currentvalue;
})
console.log(`Totalvalue: ${product}`);

//Example 3

// const maxValue = nums.reduce((max,currval) => {
//     if (currval > max) return currval;
//     return max;
// });
// console.log(maxValue);

const maxValue = nums.reduce((max,currval) =>{
    return Math.max(max,currval);
})
console.log(maxValue);

const minValue = nums.reduce((min,currval) =>{
    return Math.min(min,currval);
})
console.log(minValue);

//Example 4 -  By passing initial value

const total = nums.reduce((sum,currval) => {
    return sum+currval;
}, 40);
console.log(total);

//Example 5 -Intial value to object

const booleanVal = ["true","true","false","true","true","false","true","false"];

const countBooleanVal = booleanVal.reduce((tally,val) => {
    if (tally[val]) {
    tally[val]++
    }
    else{
        tally[val] = 1;
    }
    return tally
},{})
console.log(countBooleanVal);

//Example 6

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

const groupedByRating = books.reduce((groupedBooks,book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
},{})
console.log(groupedByRating);        


})()