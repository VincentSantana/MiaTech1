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
}

const number = 10;

myPromise().then(
    function (data) {

        console.log(data)
    }
).catch(function (error) {

    console.error(error)
}
).finally(function () {
    console.log("operazioni completate")
})