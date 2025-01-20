async function myPromise() {//uguale ad usare il then sotto
    try {
    const result =  await myPromise();
    console.log(result)
} catch (error) {
    console.error(error)
}
};


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 10) {
                resolve("Promise risolta")
            }
            else {
                reject("Error")
            }

        }, 2000)

    })
};

const number = 10;

/*myPromise().then(
    function (data) {

        console.log(data)
    }
).catch(function (error) {

    console.error(error)
}
).finally(function () {
    console.log("operazioni completate")
})*/