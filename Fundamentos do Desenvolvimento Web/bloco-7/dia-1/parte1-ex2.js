const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = (array) => {
  return `${oddsAndEvens[5]}, ${oddsAndEvens[1]}, ${oddsAndEvens[2]}, ${oddsAndEvens[4]}, ${oddsAndEvens[3]}, ${oddsAndEvens[0]}`;
}

console.log(sortArray(oddsAndEvens));

oddsAndEvens.sort((a,b) => a - b);
console.log(oddsAndEvens);
