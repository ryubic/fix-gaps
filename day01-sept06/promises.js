const promiseOne = new Promise((resolve, reject)=>{
    // do an async task (like db task, cryptography, network calls, file read/write)
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);

})

promiseOne.then(()=>{
    console.log("Promise Consumed")
}).catch()

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("Async task 3 is complete");
        resolve({username: "ryubic", email: "ryubic@example.com"})
    }, 1000);
})

promise3.then((user)=>{
    console.log(user);
})

const username4 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "ryubic", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000);
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((then2)=>{
    console.log("then2:", then2)
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

// console.log(username4);

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "promise5", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

async function consumePromise5() {
    try {
        const res = await promise5
        console.log("async await log:", res);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromise5()

// new Promise((resolve, reject)=>{
//     const res = fetch('https://jsonplaceholder.typicode.com/comments')
//     if (resolve) {
//         resolve(res)
//     } else {
//         reject("EL failed to fetch data")
//     }
//     .then((res)=>{
//         const data = res.json()
//         resolve(data)
//     })
//     .then((data)=> console.log(data)
//     ).catch((rejext)=> console.log(e)
//     )
// })

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> (res.json()))
.then((json)=> console.log(json)
)
.catch((e)=> console.log(e))