
//Example 1

function multiply(x,y=3){
    return x*y;
}

//Example 2

const fullName = (firstname,lastname="Daram") => {
    console.log(`FirstName: ${firstname} , LastName: ${lastname}`);
}

//Example 3

const sequenceNums = (a, b=[1,2,3], c=1) => {
    console.log(a,b,c);   
}

