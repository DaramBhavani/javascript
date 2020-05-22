(function(){

const results =[
    {
    first:"Bhavani",
    Last: "Daram",
    country:"India"
    },
    {
    first:"Rakesh",
    Last:"Cheekatimalla",
    country:"India"
    },
    {
    first:"Sai",
    Last:"Kumar",
    country:"India"
    },
];

const [{first},,{country:bornCountry}] = results;
console.log(first);
console.log(bornCountry);




})()