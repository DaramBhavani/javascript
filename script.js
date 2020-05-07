//if CONDITION

let rating=3;

if(rating===3)
{
    console.log("Its,true");
}

if(1 === 1){
    console.log("true");
}

//else if 

let num=37;

if(num%2!==0){
    console.log("ODD Number");
}
else if(num%2===0){
    console.log("EVEN Number");
}

//else

let number=5;

if(number===5){
    console.log("less value");
}
else if(number===10){
    console.log("high value");
}
else{
    console.log("doesn't exit");
}

//Nested if - it can be used in if, else, else if

let password="orange";

if(password.length>=6){
    if(password.indexOf(" ")===-1){
        console.log("valid password");
    }
    else{
        console.log("password is long enuogh, but cannot contain spaces");
    }    
}
else{
    console.log("password must be longer");
}

//TRUTHY or FALSY VALUE

let mystery="BHAVANI";

if(mystery){
    console.log("TRUTHY");
}
else{
    console.log("FALSY");
}

let loggedin;

if(loggedin){
    console.log("Logged in");
}
else{
    console.log("please log in");
}

//LOGICAL ADD " && "

let pwd="Bhavani5";

if(pwd.length>=8 && pwd.indexOf(" ")===-1){
    console.log("valid password");
}
else{
    console.log("Invalid password");
}

//LOGICAL OR " || "

let age=40;

if (age<=10 || age>=60){
    console.log("Free Tickets");
}
else{
    console.log("Ticket is $10");
}

// NOT "!"

let fruit="orange";

if(fruit!=="orange"){   //if(!(fruit==="orange"))
    console.log("Available");
}
else{
    console.log("Not Available");
}

//SWITCH

let day=15;

switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("Invalid Day");
}

//TERNARY OPERATOR

let status="online";
let color;

if(status==="online"){
    color="green";
}
else{
    color="red";
}


