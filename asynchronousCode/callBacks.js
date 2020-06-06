(function(){

//callStack -  feature of JS - helps JS Interpreter to keep track of code if we have multiple functions(if function calls other functions).
//current execution point

const multiply = (x,y) => {
    return x * y;
}

const square = (x) => {
    return multiply(x,x);
}

const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c);
}
console.log(isRightTriangle(3,4,5));


//Breakpoint 

//JS - is a single threaded - one thing at a time

// console.log("I am first");
// alert('Hello');
// console.log("I am second");
// console.log("I am third")

console.log("I am first");
setTimeout(function(){
    console.log("I am last");
},3000);
console.log("I am second");
console.log("I am third")

//callBack Hell

//-1
const btn = document.querySelector('button');

//btn.style.transform = `translateX(100px)`;

setTimeout(() => {
    btn.style.transform = `translateX(100px)`;
    setTimeout(() => {
        btn.style.transform = `translateX(200px)`;
        setTimeout(() => {
            btn.style.transform = `translateX(300px)`;
        },1000);
    },1000);
},1000);

//-2

const moveRight = (element,pixel,delay) => {
    setTimeout(() => {
       element.style.transform = `translateX(${pixel}px)`;
    },delay);
};
moveRight(btn,100,1000);

//-3

const moveRightSide = (element, pixel, delay, callback) => {
    setTimeout(() => {
        element.style.transform = `translateX(${pixel}px)`;
        if (callback)
            callback();
    },delay);
}
moveRightSide(btn, 100, 1000, () => {
moveRightSide(btn, 100, 1000, ()=>{
    moveRightSide(btn, 100, 1000, ()=>{
        moveRightSide(btn, 100, 1000);
    });
});
});

//-4

const moveRightSide = (element, pixel, delay, callback) => {
    const bodyBoundary = document.body.clientWidth;
    const eleRight = element.getBoundingClientReact().right;
    const curLeft = element.getBoundingClientReact().left;
    if(eleRight + pixel > bodyBoundary) {
        console.log("Cannot go further");
    }
    else{
        setTimeout(() => {
            element.style.transform = `translateX(${curLeft + pixel}px)`;
            if (callback)
                callback();
        },delay);
    }
};
moveRightSide(btn, 100, 1000, () => {
    moveRightSide(btn, 100, 1000, ()=>{
        moveRightSide(btn, 100, 1000, ()=>{
            moveRightSide(btn, 100, 1000);
        });
    });
});

//-5

const moveRightSide = (element, pixel, delay,onSuccess,OnFailure) => {
    const bodyBoundary = document.body.clientWidth;
    const eleRight = element.getBoundingClientReact().right;
    const curLeft = element.getBoundingClientReact().left;
    if(eleRight + pixel > bodyBoundary) {
       OnFailure();
    }
    else{
        setTimeout(() => {
            element.style.transform = `translateX(${curLeft + pixel}px)`;
            onSuccess();
        },delay);
    }
};
moveRightSide(btn, 100, 1000, () => { 
    moveRightSide(btn, 100,1000, () => {
        }, () => {
        alert("cannot move further");
        })
    }, () => {
        alert("cannot move further");
});















})()


