// function basicCallback(callback, num) {
//   setTimeout(() => callback(num), 2 * 1000);
// }

// // Example usage:
// basicCallback((number) => {
//   console.log(number * 2);
// }, 5);
// // After 2 seconds, logs: 10

// function downloadFile(callback) {
//   console.log('Downloading file...');
//   setTimeout(() => callback('Download complete!'), 1500);
// }

// downloadFile((message) => console.log(message));


// function processData(nums, callback) {
//   setTimeout(() => {
//     const newNums = nums.map(callback)
//     console.log(newNums)
//   }, 1000);
// }

// // Example usage:
// processData([1, 2, 3], (number) => number * 2);
// // After 1 second, logs: [2, 4, 6]

// function waterfallOverCallbacks(arr, initialVal) {
//   arr.forEach(callback => {
//     initialVal = callback(initialVal);
//   });

//   console.log(initialVal);
// }


// // Example usage:
// const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1);
// // Logs: 8


// function startCounter(callback) {
//   let count = 0;
//   let id = setInterval(() => {
//     count += 1;
//     if (callback(count)) {
//       clearInterval(id);
//     }
//   }, 1000);
// }

// // Example usage:
// startCounter((count) => {
//   console.log(count);
//   return count === 5;
// });
// // Logs 1, 2, 3, 4, 5, then stops

