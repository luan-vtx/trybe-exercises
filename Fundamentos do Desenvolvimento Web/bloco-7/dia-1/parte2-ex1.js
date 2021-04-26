const calcFatorial = (number) => {
  let result = 1;
  for( let index = number; index > 0; index -= 1) {
    result *= index;
  }
  return result;
}

console.log(calcFatorial(5));

const calcFatorial2 = (numero) => {
  return numero === 0 ? 1 : numero * calcFatorial2(numero - 1);
}

console.log(calcFatorial2(5))

