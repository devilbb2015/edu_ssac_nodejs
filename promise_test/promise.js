const promise1 = function (condition) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve("true");
        } else {
            reject("false");
        }
    });
};

// promise1(false)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const promiseChain1 = (param) => {
    return new Promise((resolve, reject) => {
        console.log("func1");
        setTimeout(() => {
            resolve(`func1 success: ${param}`);
        }, 500);
    });
};

const promiseChain2 = (param) => {
    return new Promise((resolve, reject) => {
        console.log("func2");
        setTimeout(() => {
            reject(new Error(`func2 faild: ${param}`));
        }, 500);
    });
};

const promiseChain3 = (param) => {
    return new Promise((resolve, reject) => {
        console.log("func3");
        setTimeout(() => {
            resolve(`func3 success ${param}`);
        }, 500);
    });
};

promiseChain1("start")
    .then(promiseChain2)
    .then(promiseChain3)
    .catch((error) => console.log(error));
