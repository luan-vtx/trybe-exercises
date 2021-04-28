const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addLesson = (object, key, value) =>  object[key] = value;

addLesson(lesson2, 'turno', 'manhã');

console.log(lesson2);
console.log('\n====================================================\n');

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson3));
console.log('\n====================================================\n');

// 3. Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson2));
console.log('\n====================================================\n');

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => Object.values(object);

console.log(listValues(lesson1));
console.log('\n====================================================\n');

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
console.log('\n====================================================\n');

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(numberOfStudents(allLessons));
console.log('\n====================================================\n');