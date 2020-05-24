
const role1 = "dancer";
const person1 = "bhavani";
const role2 = "singer";
const person2 = "vani";

//

const team = {
   [role1]  : person1,
   [role2]  : person2,
   [10+5]   : "fifteen"
};
console.log(team);

// Adding property to object using function

function addProp(obj,key,value){
    const copyObj = {...obj};
    copyObj[key] = value;
    return copyObj;
}
console.log(addProp(team,"salary","$2000"));

//

const addProp1 = (obj,key,value) => {
    return{
        ...obj,
        [key] : value 
    }
}
console.log(addProp1(team,"salary","$2000"));

//Adding methods to Object

const mathematics = { 

    add : function (x,y){
        return x+y;
    },

    sub : function (x,y){
        return x-y;
    },

    mul : function (x,y){
        return x*y;
    }

};

console.log(mathematics.add(4,3));
console.log(mathematics.sub(5,3));
console.log(mathematics.mul(6,3));

//Adding methods to Object - shortHand

const operationsASM = {

    add : (x,y) => {        //Arrow Function
        return x+y;
    },

    sub(x,y){
        return x-y;
    },

    mul(x,y){
        return x*y;
    }
};

console.log(operationsASM.add(4,3));
console.log(operationsASM.sub(5,3));
console.log(operationsASM.mul(6,3));
