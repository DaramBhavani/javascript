const sequenceOfNums=[1,2,3,4,5,6];

//Example 1

sequenceOfNums.forEach(function (n){
    console.log(n);
})

//

sequenceOfNums.forEach(function (n,idx){
    console.log(idx,n);
})


//Example 2
sequenceOfNums.forEach(function printDouble(n){
    console.log(n*2);
})

//Example 3

function printTriple(n){
    console.log(n*3);
}

sequenceOfNums.forEach(printTriple);

//Example 4

const books=[{
    title   :   'Good Omens',
    authors :   ['Terry','Neil'],
    rating  :   4.25
},
{
    title   :   'American Gods',
    authors :   ['Neil'],
    rating  :   4.11
},
{
    title   :   'A Gentleman in Moscow',
    authors :   ['Amor Towels'],
    rating  :   4.36
}
];


books.forEach(function collection(book){
    console.log(book.title.toUpperCase());
    console.log(book.authors);
    console.log(book.rating);
})