function asyncFunction (item, cb) {
    setTimeout(() => {
        console.log('done with', item);
        cb();
    }, 100);
}

let requests = [1, 2, 3].reduce((promiseChain, item) => {
    return promiseChain.then(() => new Promise((resolve) => {
        asyncFunction(item, resolve);
    }));
}, Promise.resolve());

requests.then(() => console.log('done'));