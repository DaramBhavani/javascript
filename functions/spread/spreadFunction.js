

//spread - expands an iterable into a list of arguments/individual arguments/separate arguments.

function listOfNums(a,b,c,d){
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);
}

const colors= ["pink","blue","orange","black"];

console.log(listOfNums(...colors));

const name15 = "vani";

console.log(listOfNums(...name15));