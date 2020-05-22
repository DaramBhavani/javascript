(function(){


//OBJECT

const badmintonNational = {
    firstName   :   "Sindhu",
    lastName    :   "Pusarla Venkata",
};

function print(person){  
    const {firstName, lastName} = person;  
    console.log(`FN : ${firstName} , LN : ${lastName} `);
}
console.log(print(badmintonNational));


function printValues({firstName,lastName}){
    console.log(`FN : ${firstName} , LN : ${lastName} `);
}
console.log(printValues(badmintonNational));


//ARRAY

const results = [
    "Bhavani",
    "Ashwini",
    "swathi",
    "Neha",
    "Prathyusha",
];

function ranking(details){
    const [firstRank,secondRank] = details;
    console.log(`${firstRank} , ${secondRank}`);
}
console.log(ranking(results));

function rankingStudies([firstRank1,,thirdRank3]){
    console.log(`${firstRank1} , ${thirdRank3}`);
}
console.log(rankingStudies(results));





})()