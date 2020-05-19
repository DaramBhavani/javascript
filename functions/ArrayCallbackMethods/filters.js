(function(){
const week = [1,2,3,4,5,6,7];

// const dayOf = week.map(day => { map will return [false, true, false, true, false, true, false]
//     return day%2===0;
// })

//Example 1

const odds = week.filter( day =>{  //filter will return  [2, 4, 6]
    return day%2===0;
})

//Example 2

const evens = week.filter(day => day%2 === 1);

//Example 3

const goodBooks=[{
    title   :   'Good Omens',
    authors :   ['Terry','Neil'],
    rating  :   4.25,
    genres  :   ["short stories"]
},
{
    title   :   'American Gods',
    authors :   ['Neil'],
    rating  :   8.11,
    genres  :   ["short stories","essays"]
},
{
    title   :   'A Gentleman in Moscow Gods',
    authors :   ['Amor Towels'],
    rating  :   14.36,
    genres  :   ["fantasy","nonfition",]
}
];

const selectedBooks = goodBooks.filter( book =>{
    return book.rating>5;
});

const favAuthor = goodBooks.filter(book => {
    return book.authors.includes("Neil");
})

const favGenres = goodBooks.filter(book => {
    return book.genres.includes("essays") || book.genres.includes("short stories") ;
})

const favTitile = goodBooks.filter(book => {
    return book.title.includes("Gods");
})



})();