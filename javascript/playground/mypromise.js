
const myPromise = new Promise((resolve, reject) => {
    Promise.reject(Error('Fail'))
});

myPromise.catch(error => console.log(error.message));
