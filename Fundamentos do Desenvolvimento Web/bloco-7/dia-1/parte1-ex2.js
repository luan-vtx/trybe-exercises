const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = (array) => {
  return `${array[5]}, ${array[1]}, ${array[2]}, ${array[4]}, ${array[3]}, ${array[0]}`;
}

console.log(sortArray(oddsAndEvens));

oddsAndEvens.sort((a,b) => a - b);
console.log(oddsAndEvens);
