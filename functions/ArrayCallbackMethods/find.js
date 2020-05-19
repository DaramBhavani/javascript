(function(){

let movies=["Dilwale",
     "Hello Guru Premakosame",
     "Happy New Year",
     "OmshanthiOm",
     "Hello",
     "Happy",
     "New Year"
    ];

//Exmaple 1

const favMovie = movies.find(cinema => {
    return cinema.includes("Hello");
})

//Example 2

const movieMatch = movies.find(cinema =>{
    return cinema.indexOf("New")===6;
})

//Example 3

const libBooks=[{
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

const ratingOfBook = libBooks.find( book => { 
    return book.rating >= 4.2;
})

const searhingOfBook = libBooks.find( book => {  // we can add an element
    return book.authors.push("hello");
})


})()