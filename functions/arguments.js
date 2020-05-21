(function(){

function print(x,y){
   console.log('xvalue',x);
   console.log('Yvalue',y);
}
console.log(print(2,3));

//Example 1

function print1(){
    console.log(arguments);
}
console.log(print1(1,2));


//Example 2

function sumAdd(){
    const argArr = [...arguments];
    console.log(argArr);
    return argArr.reduce((total,currval) => {
        return total+currval
    })
}
console.log(sumAdd(1,2,3,4,5));

// Example 3

function details(first ,last){
    console.log(first);
    console.log(last);
    console.log(arguments);
}
console.log(details("Bhavani","Daram","female","b.tech","hyderabad"));

//REST

//Example 1

function detail(first ,last,...remaining){
    console.log(first);
    console.log(last);
    console.log(remaining);
}
console.log(detail("Bhavani","Daram","female","b.tech","hyderabad"));

//Example 2

function sum(...nums){
    return nums.reduce((total,currval) => {
        return total+currval;
    })
}
console.log(sum(4,7,8,9,10));

//Example 3

const multiply = (...nums) => {
    nums.reduce((total,currval) => total*currval)
}
console.log(multiply(1,2,3,4,5));


})()