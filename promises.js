// // This code uses promises
// function washLaundry() {  // We no longer need a callback argument
//   console.log("Putting clothes in wash.");
//   console.log("Adding soap.");

//   console.log("Washing laundry...");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Buzz!");
//       resolve();
//     }, 5000)
//   })
// }


// function bakeCookies() {
//   return new Promise((resolve) => {
//     console.log("Mixing ingredients.");
//     console.log("Scooping cookie dough.");
//     console.log("Putting cookies in oven.");

//     console.log("Baking...");
//     setTimeout(() => {
//       console.log("Beep!");
//       resolve();
//     }, 3000);
//   });
// }

// function doChores() {
//   let laundryPromise = washLaundry();
//   let bakingPromise = bakeCookies();

//   laundryPromise.then(() => {
//     console.log("Folding Laundry.");
//     console.log("Putting away Laundry.");
//   });

//   bakingPromise.then(() => {
//     console.log("Cooling cookies.");       // *after* the cookies are baked
//     console.log("Eating cookies.");
//   });
// }

// doChores();


// function downloadFile(callback) {
//   return new Promise((resolve) => {
//     console.log("Downloading file...");
//     setTimeout(() => {
//       resolve('Download complete');
//     }, 1500);
//   });
// }


// function processData(numbers, callback) {
//   setTimeout(() => {
//     const processed = numbers.map(callback);
//     console.log(processed);
//   }, 1000);
// }

// // Example usage:
// processData([1, 2, 3], (number) => number * 2);
// // After 1 second, logs: [2, 4, 6]


function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);
  });
}

// Example usage:
processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
  console.log(processedNumbers);
  // After 1 second, logs: [2, 4, 6]
});