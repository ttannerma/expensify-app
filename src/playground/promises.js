const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolve data')
        reject('Something went wrong')
    }, 5500)
})

console.log('before')

promise.then((data) => {
    console.log('1', data)
}).catch((err) => {
    console.log(err)
})

console.log('after')