const {sum, fetchData, fetchPromise} = require("./sum")

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)

// })

// test('adds 2 + 2 to equal 4', () => {
//   expect(sum(2, 2)).toBe(4)
// })


test('peanut butter function testing', (done) => {

  function callBack(data) {
    try {
      expect(data).toBe("peanut butter")
      done()
    } catch (error) {
      done(error)
    }
  }

  fetchData(callBack)
})


// test('Promissed resolve', () => {
  

//     return expect(fetchPromise()).resolves.toBe("Promise peanut butter")

// })


test('should be peanut butter', async () => { 
  let data = await fetchPromise()
  return expect(data).toBe("Promise peanut butter")

 })