// creating a Promises

const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async Task is Completed');
        resolve()
    },1000)
})

// comsuming the Promises
promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('async task 2');
    resolve()
},1000)
}).then(function(){
    console.log('promise consume 2');
})


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"deep", email:"deep@gmail.com"})
    },1000)
})
promiseTwo.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"deep", age:23})
        } else {
            reject('ERROR: SOMTHING WENT WRONG')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((name) => {
    console.log();
})
.catch(function(error){
    console.log(error);
}) 
.finally(() => console.log("the promises is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"deep", age:23})
        } else {
            reject('ERROR: SOMTHING WENT WRONG')
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);

}
consumePromiseFive()

async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))