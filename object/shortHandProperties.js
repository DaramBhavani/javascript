(function(){ 

const nums = [1,2,3,4];

//Example 1

const getStatus = (arr) =>{
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce( (sum,result) =>  sum + result );
    const avg = sum/arr.length;
    return { max : max, //max
        min : min,      //min
        sum : sum,      //sum
        avg : avg }     //avg
}
console.log(getStatus(nums));


//Example 2







})()