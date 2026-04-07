function randomFinish(label) {
  const randomTime = Math.random() * 10000;

  setTimeout(
    () => console.log(`${label} is done after ${randomTime / 1000} seconds!`),
    randomTime
  );
}

randomFinish("function 1"); // 5 secs Finishes second
randomFinish("function 2"); // 3 secs Finishes first
randomFinish("function 3"); // 9 secs Finished third

// Scenario A
// The functions will always fire and finish in order, i.e the functions will wait until the previous function is "done" before it itself is invoked

// Scenario B
// All three functions fire as soon as the script reads the invocation, i.e the functions do not wait until the previous function is finished running
