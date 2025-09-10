// function downloadFile(callback) {
//   console.log("Downloading file...");
//   setTimeout(() => {
//     callback("Download complete!");
//   }, 1500);
// }

// async function asyncDownloadFile() {
//   console.log('Downloading file...');
//   await setTimeout(() => {
//     console.log('Download complete');
//   }, 1500);
// }

// asyncDownloadFile()



// function processDataPromise(numbers, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processed = numbers.map(callback);
//       resolve(processed);
//     }, 1000);
//   });
// }

// async function processNTimes(arr, callback, n) {
//   for (let i = 0; i < n; i += 1) {
//     arr = await processDataPromise(arr, callback)
//   }
//   console.log(arr);
// }


// // Example usage:
// const squareIt = (n) => n * n;
// processNTimes([1, 2, 3], squareIt, 3);
// // After 3 seconds, logs: [1, 256, 6561]


// function makeCoffee() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//       console.log('Coffee is ready');
//     }, 10000);
//   })
// }

// async function getReady() {
//   console.log('Good morning!');
  
//   makeCoffee();
//   await (function () {
//     console.log('Petting cat');
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 5000);
//     });
//   })();
  
//   await (function () {
//     console.log('Getting dressed');
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 3000);
//     });
//   })();

//   await (function () {
//     console.log('Brushing Teeth');
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 2000);
//     });
//   })();
  
//   console.log("I'm ready!");
// }

// getReady();


function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

// async function runIt() {
//   try {
//     let response = await flakyService();
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// runIt();


// async function operation() {
//   try {
//     let result = await new Promise((resolve) => {
//       console.log("Operation started");
//        (setTimeout(() => {
//         resolve("Operation complete");
//       }, 1000));
//     });
//     console.log(result);
//   } catch(error) {
//     console.log();
//   } finally {
//     console.log('Cleaning up resources...');
//   }
  
// }

// operation();

// async function useOperation() {
//   try {
//     let message = await operation();
//     console.log(message);
//     console.log(cat);
//   } finally {
//     console.log('Cleaning up resources...');
//   }
// }

// useOperation();


// async function retryOperation(operationFunc) {
//   let attempts = 0;

//   async function attempt() {
//     try {
//       await operationFunc();
//     } catch (error) {
//       if (attempts < 2) {
//         attempts++;
//         console.log(`Retry attempt #${attempts}`);
//         return attempt();
//       } else {
//         throw error;
//       }
//     }
//     return operationFunc().catch((err) => {
      
//     });
//   }

//   try {
//     return await attempt()
//   } catch(error) {
//     console.error(error);
//   }
// }

// retryOperation(flakyService)

async function loadData() {

  async function getData() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });
  }

  try {
    let response = await getData();
    console.log(response);
  } catch(error) {
    console.error("An error occurred. Attempting to recover...");
    return Promise.resolve("Using cached data");
  }
}


loadData();
// loadData().then(console.log);
// Logs "Data loaded" or "Using cached data"