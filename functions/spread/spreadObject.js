(function(){

//ObjectArray - copies properties from one object into another object  literal / combine.

//combine(merge)/add/copy

const car = {
    type    :   "BMW",
    model   :   500,
    color   :   "white"
};

const person = {
    firstName       :   "bhavani",
    lastName        :   "daram",
    qualification   :   "B.Tech",
};

const sports = {
    badminton   :   4,
    cricket     :   11,
    basketBall  :   5
};

//combine

const combine = {
    ...car,
    ...person,
    ...sports
};

console.log(combine);

//copy

const copyCar = { ...car };
console.log(copyCar);

//add

const addCar = {        // if we add a exisied key with value change then the value will override
    ...car,
    color   :   "black"
}
console.log(addCar);

//we can't add spreadobject into an array but in object we can add spreadstring and spreadarray.

// const arr = [...addCar];
// console.log(arr);

// we can add spreadobject into an array 

const arrStrObj = [..."bhavani",{...car}];
console.log(arrStrObj);

//Obj-Array

const arr1 = [3,4,5,6];

const objArr = { ...arr1, };
console.log(objArr);

//Obj-String

const str1 = "Bhavani";

const objStr = { ...str1, };
console.log(objStr);

})()