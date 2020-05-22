(function(){ 
const badmintonNational = {
    firstName   :   "Sindhu",
    lastName    :   "Pusarla Venkata",
    country     :   "India",
    hobbies     :   "readingbooks"
};

//

const {firstName:givenName , lastName:surName} = badmintonNational;
console.log(givenName);
console.log(surName);

//

const {firstName:givenName1 , ...remaining} = badmintonNational;
console.log(givenName1);
console.log(remaining);

//

const {firstName, ...remaining1} = badmintonNational;
console.log(firstName);
console.log(remaining1);

})()