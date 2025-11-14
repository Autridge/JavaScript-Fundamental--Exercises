const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisfying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then((_) => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then((_) => console.log("I waited for 1 second"));

//   Immediately invoked Promises
Promise.resolve("abc").then(function (value) {
  console.log(value);
});

Promise.reject(new Error("abc")).catch(function (error) {
  console.error(error);
});
