function delayedTask(taskName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString();
      const message = `Задача:1 "${taskName}"`;
      resolve(message);
    }, delay);
  });
}

const taskName = "Задержка 3 секунды";
const delay = 3000; 

delayedTask(taskName, delay)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
