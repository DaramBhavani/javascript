

const results = [
    "Bhavani",
    "Ashwini",
    "swathi",
    "Neha",
    "Prathyusha",
];

// const firstRank = results[0];
// const secondRank = results[1];
// const thirdRank = results[2];
// console.log(firstRank);

const [firstRank,secondRank,thirdRank] = results;
console.log(secondRank);

const [firstRank1, , , fourthRank] = results;  // , to skip elements
console.log(fourthRank);

const[firstRankone, , ...remaining] = results;  // to collect remaining elements
console.log(remaining);



