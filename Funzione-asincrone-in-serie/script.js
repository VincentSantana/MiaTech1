async function funzione1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Risultato della funzione 1');
    }, 2000);
  });
}

async function funzione2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Risultato della funzione 2');
    }, 1000);
  });
}

async function main() {
  const risultato1 = await funzione1();
  console.log(risultato1);
  const risultato2 = await funzione2();
  console.log(risultato2);
}

main();