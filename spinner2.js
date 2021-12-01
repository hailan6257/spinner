const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 100;
for (let ele of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${ele}   `);
  }, timer);
  timer += 200;
}