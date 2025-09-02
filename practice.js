// function delayLog() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(() => {
//        console.log(i);
//     }, i*1000);
//   }
// }

// delayLog();


// setTimeout(() => {        // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(() => {        // 2
//   console.log('upon');    // 7  
// }, 3000);

// setTimeout(() => {        // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(() => {      // 4
//   console.log('time');   // 8
// }, 4000);



// setTimeout(() => {        // 1
//   setTimeout(() => {      // 6
//     q();                  // 12
//   }, 15);

//   d();                    // 7

//   setTimeout(() => {      // 8
//     n();                  // 10
//   }, 5);

//   z();                    // 9
// }, 10);

// setTimeout(() => {      // 2
//   s();                  // 11
// }, 20);

// setTimeout(() => {      // 3
//   f();                  // 4
// });

// g();                    // 5


// f - 4, g - 5, d - 7, z - 9, n - 12, s - 11, q-12, 

// f, g, d, z, n, s, q

// function afterNSeconds(callback, time) {
//   setTimeout(callback, time * 1000);
// }

// let counterId;

// function startCounting() {
//   console.log('Starting');
//   let n = 0;
  
//   counterId = setInterval(() => {
//       console.log('Hello!');
//       n += 2;
//       if (n >= 10) {
//         stopCounting(counterId);
//         console.log('Goodbye!');
//       }
//     }, 2000);
// }

// function stopCounting(id) {
//   clearInterval(id);
// }

// startCounting();

let myPromise = new Promise((chicken, pig, cow) => {
  setTimeout(() => {
    chicken("hello");
    console.log(myPromise);
    pig('pog')
    console.log(myPromise);
    cow('bog')
    console.log(myPromise);
  }, 1000)
});

console.log(myPromise); // Promise {<pending>}