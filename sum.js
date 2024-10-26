function sum(a,b) {
  return a+b
}

function fetchData(callBack) {
  setTimeout(() => {
    callBack("peanut butter")
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise peanut butter")
    }, 1000);
  })
}



module.exports = {sum, fetchData, fetchPromise}