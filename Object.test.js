const data = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
}


// test('Data Object is correct', () => {
//   expect(data).toEqual({
//     name: "John",
//     age: 30,
//     isMarried: false,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "CA",
//       zip: "12345"
//     }
//   })
// })


test('n should be falsy', () => {
  const n = 0
  expect(n).toBeFalsy()



  expect(data.name).toBeTruthy()
  expect(data.isMarried).toBeFalsy()
})


