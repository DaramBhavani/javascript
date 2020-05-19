(function(){

//Every

//Example 1

const words = ["dog","dig", "log", "bag","wag"];

const all3LetWord = words.every(word => {
    return word.length === 3;
})
console.log(all3LetWord);


//Example 2

const allEndG = words.every(word =>{
    const last = word.length-1;
    return word[last] === 'g';
})
console.log(allEndG);

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

const checkRating = books.every(book => {
    return book.rating>3;
})
console.log(checkRating);

//Some

//Example 1

const someStartD = words.some( word => {
    return word[0] === 'd';
})
console.log(someStartD);

//Example 2 

const checkAuthor = books.some(book =>{
    return book.authors.length === 1;
})
console.log(checkAuthor);

})();

