function stampaMessaggio() {
  console.log('Il messaggio è stato stampato!');
}

const intervalId = setInterval(stampaMessaggio, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);