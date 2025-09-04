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

// new Promise((resolve) => {
//   resolve(5)
// }).then((value) => {
//   return new Promise((resolve) => {
//     resolve(value * 2);
//   });
// }).then((value) => {
//   return new Promise((resolve) => {
//     resolve(value + 2);
//   })
// }).then((value) => {
//   return new Promise((resolve) => {
//     resolve(value + 3)
//   })
// }).then((value) => {
//   console.log(value);
// })

// Promise.resolve(5)
  // .then((number) => number * 2)
  // .then((number) => number + 5)
  // .then((result) => console.log(result));


// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject({ error: "User not found" }), 500);
//   });
// }

// fetchUserData().catch((error) => {
//   console.log(error);
// }).finally(() => {
//   console.log('Fetching complete');
// })


// function retryOperation(operationFunc) {
//   let counter = 0;

//   function retry() {
//     if (counter < 2) {
//       operationFunc().then((success) => {
//         console.log(success);
//         console.log('operation ran and succeeded');
//         return;
//       }).catch((error) => {
//         console.log('operation ran and failed');
//         counter += 1;
//         retry();
//       });
//     } else {
//       console.log('Operation failed');
//     }
//   }

//   retry();
// }

// // Example usage:
// retryOperation(
//   () =>
//     new Promise((resolve, reject) =>
//       Math.random() > 0.33
//         ? resolve("Success!")
//         : reject(new Error("Fail!"))
//     )
// );

// function retryOperation(operationFunc) {
//   let attempts = 0;

//   function attempt() {
//     return operationFunc().catch((err) => {
//       if (attempts < 2) {
//         attempts++;
//         console.log(`Retry attempt #${attempts}`);
//         return attempt();
//       } else {
//         throw err;
//       }
//     });
//   }

//   return attempt().catch(() => console.error("Operation failed"));
// }


// function mockAsyncOp() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Operation succeeded");
//       } else {
//         reject("Operation failed");
//       }
//     }, 1000);
//   });
// }

// mockAsyncOp()
//   .finally(() => {
//     console.log('Operation attempted');
//   });

function loadData() {
  let rand = Math.random();

  return new Promise((resolve, reject) => {
    if (rand > .5) {
      resolve('Data loaded');
    } else {
      reject('Network error');
    }
  });
}

loadData()
  .then(console.log)
  .catch(() => {
    return new Promise((resolve) => {
      resolve('Using cached data')
    });
  });