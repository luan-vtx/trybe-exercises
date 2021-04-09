function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  // Exercicio 1
  function fridayVerify (day) {
    switch(day) {
      case 4:
        return true;
      case 11:
        return true;
      case 18:
        return true;
      case 25:
        return true;
      default:
        return false;
    }
  }

  function holidayVerify (day) {
    switch(day) {
      case 24:
        return true;
      case 25:
        return true;
      case 31:
        return true;
      default:
        return false;
    }
  }

  function populateDecemberDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysOfDezContainer = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dezDaysListItem = document.createElement('li');
    dezDaysListItem.classList.add('day');
    dezDaysListItem.innerText = dezDaysList[index];

    if(fridayVerify(dezDaysList[index])) {
      dezDaysListItem.classList.add('friday');
    }

    if(holidayVerify(dezDaysList[index])) {
      dezDaysListItem.classList.add('holiday');
    }
    
    daysOfDezContainer.appendChild(dezDaysListItem);
  }
}

populateDecemberDays();

// Exercício 2
function createHolidaysButton (string) {
  const holidayButton = document.createElement('button');
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(holidayButton);
}

createHolidaysButton('Feriados');

// Exercício 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

// Exercício 4
function createFridayButton (string) {
  const fridayButton = document.createElement('button');
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';
  
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

