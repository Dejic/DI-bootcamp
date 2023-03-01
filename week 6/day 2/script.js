function compareToTen(num) {
    return new Promise((resolve,reject) =>{
        if (num < 10) {
            resolve("number is smaller")
        } else{
        reject("Number is too high, try again")
        }
    });
}
compareToTen(2)
.then((res) => console.log(res))
.catch((err => console.log(err)))

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("success"), 4000);
// });

// promise.then((data)=>{
//     console.log(data)
// })

Promise.resolve(
    setTimeout(()=>{
        console.log("Success")
    },4000
))
.catch((err)=> console.log("oops, something went wrong"))

Promise.resolve(3).then((res) => console.log(res))
Promise.reject("boo!").catch((err) => console.log(err))