const fitBitData={
    totalsteps:35678,
    totalmiles:217,
    workoutthisweek:'5 of 7',
    16:"sixteen"
};

console.log(fitBitData);
console.log(fitBitData.totalmiles);
console.log(fitBitData.workoutthisweek);
console.log(fitBitData[16]);
console.log(fitBitData['16']);

const palette={
    red:'#gh57d8s',
    blue:'#kdn76a',
    yellow:'#wecl87'
};

let shades="red";

console.log(palette);

//Accessing the properties in 3 ways

console.log(palette.red);
// console.log(palette[red]);  //it treat as a variable so assign red to some variable
console.log(palette[shades]);
console.log(palette['red']); 

//Adding the properties

const heroTagAge={};

console.log(heroTagAge.Chirangeevi="Megastar");
console.log(heroTagAge.Alluarjun="Stylishstar");
console.log(heroTagAge.Nani="Naturalstar");
console.log(heroTagAge['Pavankalyan']="Powerstar");
console.log(heroTagAge.Rajinikanth=65);
console.log(heroTagAge.Nagarjuna=63);
console.log(heroTagAge);

//Updating the properties

console.log(heroTagAge.Rajinikanth+=10);
console.log(heroTagAge);
console.log(heroTagAge.Nagarjuna++);
console.log(heroTagAge);

//Nested Arrays and Objects

//1st Type (Array in object)

const studentDetails={
    firstName   :   "Bhavani",
    lastName    :   "Daram",
    strengths   :   ["Music","Art"],
    exams       :   {
        midTerm :   93,
        final   :   91
    }
};

const avg = (studentDetails.exams.midTerm + studentDetails.exams.final)/2;
console.log(avg);
console.log(studentDetails.strengths[0]);
console.log(studentDetails.strengths[1]);

const game={
    player1:{
        username    : "Blue",
        playerCode  : "0"
    },

    player2:{
        username    :  "Pink",
        playerCode  :  "X"
    },

    board:[['0',null,'X'],['X','0','X'],[null,'0','X']]
};

console.log(game);
console.log(game.player1.username);
console.log(game.player2.playerCode);
console.log(game.board[2][0]);

//2nd Type (object in Array)

const shoppingCart=[
    {
        product     : "Maggi",
        price       :  30,
        quantity    :  3
    },
    {
        product     : "Milk",
        price       : 24,
        quantity    : 2
    }
];

console.log(shoppingCart[0]);
console.log(shoppingCart[0].product);
console.log(shoppingCart[1]);
console.log(shoppingCart[1].price);

//Object is Refernce Type

const darkColors={
    darkPink   : "#67egks",
    darkBlue   : "#6fhsk2",
    darkPurple : "#jksn6c"
};

const shiny= darkColors;
console.log(darkColors);
console.log(shiny);

darkColors.darkRed="#jahsd7h";
console.log(darkColors);
console.log(shiny);

shiny.darkYellow="#jdb7fa";
console.log(darkColors);
console.log(shiny);
