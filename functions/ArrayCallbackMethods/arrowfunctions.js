(function(){
//Function Expression
// const result = function(x){
//     return x*x*x;
// }


//Arrow Functions

//Example 1

const result = (x) =>{   //const result = x => only for single parameter
    return x*x;
}

// Example 2

const checkEvenOdd = (x) =>{
    return x%2===0;
}

//Example 3

const multiplication = (x,y) =>{
    return x*y;
}

//Example 4

const Greet = () =>{  
    console.log("hi");
}

//Arrow Function Implicit Return


//Example 1

const res = (n) => (    //const res = n => n*n;
   n*n
)

//Example 2

const sequenceNums=[20,5,90,10,7,40,15,13];

const doubleNo = sequenceNums.map( n => n * 2 );

//Example 3

const printEvenOdd = sequenceNums.map((n) => (  //const printEvenOdd = sequenceNums.map( n => n%2===0 ? 'even' : 'odd');
    n%2 === 0 ? 'even' : 'odd'
));




})();