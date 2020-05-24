(function(){   

//this is a keyword - reference of the current execution scope.
//this is an object
//the value of this depends on the invocation context of the function it is used in

// function checking(){      //Here this refers to window -window is global scope object in the browser
//     console.log("Test");
//     console.log(this);
// }

//1st

const person1 = {
    firstName       :   "bhavani",
    lastName        :   "daram",
    country         :   "India",
    personDetails   :   function details(){
        console.log(this.firstName,this.lastName);
    }
};
console.log(person1.personDetails());

//2nd - Using Arrow Function(scope - window)

// const person2 = {
//     firstName       :   "bhavani",
//     lastName        :   "daram",
//     country         :   "India",
//     personDetails   :   (  ()=> {
//         console.log(this);
//     }).bind(this)
// };

// person2.personDetails.bind(person2);
// console.log(person2.personDetails());

//3rd

const person3 = {
    firstName       :   "bhavani",
    lastName        :   "daram",
    country         :   "India",
    details(){
       const {firstName, lastName, country} = this;
       console.log(`FN : ${firstName} , LN : ${lastName} and Country : ${country}`);
    },
    personDetails(){
         this.details();
    }
};
console.log(person3.details());
console.log(person3.personDetails());

})()

