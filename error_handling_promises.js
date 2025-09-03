// function flakyService() {
//   let rand = Math.random();
//   return new Promise((resolve, reject) => {
//       if (rand < .5) {
//         resolve('Operation complete');
//       } else {
//         reject('Operation failed');
//       }
//   });
// }


// flakyService().then(console.log).catch(console.log).finally(console.log);

new Promise((resolve) => {
  resolve(5)
}).then((value) => {
  return new Promise((resolve) => {
    resolve(value * 2);
  });
}).then((value) => {
  return new Promise((resolve) => {
    resolve(value + 2);
  })
}).then((value) => {
  return new Promise((resolve) => {
    resolve(value + 3)
  })
}).then((value) => {
  console.log(value);
})