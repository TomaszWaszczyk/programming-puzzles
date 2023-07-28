
const myPromise = new Promise((resolve, reject) => {
    // inside Promise callback function, should be used `reject` 
    //instead of `Promise.reject` to let myPromise catch the error
    Promise.reject(Error('Fail'))
});

myPromise.catch(error => console.log(error.message));
