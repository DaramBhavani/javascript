//promise - The promise object represents the eventual completion or failure
//           of an asynchronous operation and its resulting value.
//-Synchronous code easier to read and understand. (resolve,pending,reject)


//syntax

//-1

const statusOfDependantPass = new Promise((resolve,reject) => {
    const rand = Math.random();
    if(rand < 0.5){
        resolve();
    }
    else{
        reject();
    }
});
statusOfDependantPass.then(() => {
    console.log("accepted");
});
statusOfDependantPass.catch(() => {
    console.log("rejected");
});

//-2

const statusOfDependantPass2020 = new Promise((resolve,reject) => {
    setTimeout(() => { 
        const rand = Math.random();
        if(rand < 0.5){
            resolve();
        }
        else{
            reject();
        }
    },4000);    
});
statusOfDependantPass2020.then(() => {
    console.log("accepted");
});
statusOfDependantPass2020.catch(() => {
    console.log("rejected");
});

//-3 ->  function returns promise

const statusOfDependantPass2020 = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => { 
        const rand = Math.random();
        if(rand < 0.5){
            resolve();
        }
        else{
            reject();
        }
    },4000);    
});
}
statusOfDependantPass2020()
    .then(() => {
    console.log("accepted");
    })
    .catch(() => {
    console.log("rejected");
})

//-4 -> Resolving and Rejecting with values (object)

const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                const pages ={
                    '/users' : 'This is users page',
                    '/about' : 'This is about page'
                };
                const data = pages[url];
                if(data){
                resolve({status:200, data});
                }
                else{
                    reject({status:404});
                }
        },2000)
    })
}
fakeRequest('/users')
   .then((res) => {
     console.log('status code', res.status);
     console.log('data', res.data);
   })
   .catch((res) => {
       console.log(res.status);
})


//-5 -Array

const fakeRequestFunction = () => {
    return new Promise((resolve,reject) => {
         const data = ["acdj","hdb"];
         if(data){
          resolve(data);
         }
         else{
         reject({status : 404});
         }
    })
}
fakeRequestFunction()
   .then((res) => {
     console.log('status code', res);
   })
   .catch((res) => {
       console.log(res.status);
})


//-6 -> promise chaining

const fakeRequestExample = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                const pages ={
                    '/users'        : [
                        {id : 1, username : 'Riya'},
                        {id : 2, username : 'Rishi'}
                    ],

                    '/users/1'       : {
                      id        :   1,
                      username  :   'Riya',
                      city      :   'Hyderabad',
                      topPostId :   454321
                    },

                    '/users/2'       : {
                      id        :   2,
                      username  :   'Rishi',
                      city      :   'Hyderabad'
                    },

                    '/posts/454321' :   {
                      id    : 454321,
                      title : 'celebraties'
                    },
                    
                    '/about' : 'This is about page'
                };
                const data = pages[url];
                if(data){
                resolve({status:200, data});
                }
                else{
                    reject({status:404});
                }
        },2000);
    });
};

fakeRequestExample('/users')
.then((res) => {                                //Nested .then()
    console.log(res.status);
    const id = res.data[0].id;
    fakeRequestExample(`/users/${id}`)
    .then((res) => {
        const postId = res.data.topPostId;
        fakeRequestExample(`/posts/${postId}`)
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res.status);
        })
    }) 
    .catch((res) => {
        console.log(res.status);
    })
})
.catch((res) => {
    console.log(res.status);
})

//-7

const fakeReq = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const pages ={
                '/users'        : [
                    {id : 1, username : 'Riya'},
                    {id : 2, username : 'Rishi'}
                ],

                '/users/1'       : {
                  id        :   1,
                  username  :   'Riya',
                  city      :   'Hyderabad',
                  topPostId :   454321
                },

                '/users/2'       : {
                  id        :   2,
                  username  :   'Rishi',
                  city      :   'Hyderabad'
                },

                '/posts/454321' :   {
                  id    : 454321,
                  title : 'celebraties'
                },
                
                '/about' : 'This is about page'
            };
            const data = pages[url];
            if(data){
            resolve({status:200, data});
            }
            else{
                reject({status:404});
            }
        },2000);
    });
};
fakeReq('/users')
    .then((res) => { 
    console.log(res);
    const id = res.data[0].id;
    return fakeReq(`/users/${id}`)
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeReq(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((res) => {
        console.log(res.status);
    });

