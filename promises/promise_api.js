function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > -1) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}


flakyService().then(() => {
  console.log('test 1');
})


flakyService().then(() => {
  console.log('test 2');
})


flakyService().then(() => {
  console.log('test 3');
})

// let promise1 = flakyService();
// let promise2 = flakyService();
// let promise3 = loadData();

// Promise.all([promise1, promise2, promise3])
//   .then((success) => {
//     console.log(success);
//   })
//   .catch(() => {
//     console.log('One or more operations failed');
//   });



// const firstResource = new Promise((resolve) =>
//   setTimeout(() => resolve("First resource loaded"), 500)
// );
// const secondResource = new Promise((resolve) =>
//   setTimeout(() => resolve("Second resource loaded"), 1000)
// );

// Promise.race([firstResource, secondResource])
//   .then((success) => {
//     console.log(success);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// const services = [flakyService(), flakyService(), flakyService()];

// Promise.allSettled(services).then(results => {
//   results.forEach(result => {
//     console.log(result);
//   });
// });


// Promise.any(services)
//   .then(success => {
//     console.log(success);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// function timeoutPromise(promise, ms) {
//   let timeOut = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('timeout complete');
//     }, ms);
//   });

//   return Promise.race([promise, timeOut])
//     .then(success => {
//       if (success === 'timeout complete') {
//         return new Error('Operation timed out')
//       }
//     })
//     .catch(error => {
//       // console.log(error);
//       return "All operations were unsuccesful"
//     })
// }


// timeoutPromise(loadData(), 500)
//   .then(console.log)
//   .catch(console.error);
// Expected output: "Operation timed out" (because it exceeds 500ms)


