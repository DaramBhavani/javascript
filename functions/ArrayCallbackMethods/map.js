const nos=[1,2,3,4,5,6];
const words=["asap","byob","rsvp","diy"];

//Example 1

const doubles = nos.map(function (num){
    return num*2;
})

//Example 2

const checkingEvenOdd = nos.map(function (n){
    return{
        value:n,
        isEven: n%2===0
    }
})

//Example 3

const abbrevationWords = words.map(function (word){
    return  word.toUpperCase().split('').join(".");
 })

 //Example 4

 const libraryBooks=[{
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

const storeBooks = libraryBooks.map(function (book){
    return book.title;
})


