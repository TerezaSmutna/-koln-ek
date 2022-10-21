import { Task } from './Task/index.js';

let datum = new Date();
const days = ['pondělí', 'úterý', 'středa', 'čtvtek', 'pátek', 'sobota', 'neděle'];
const months = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
let rok = document.querySelector('.date__year');
let mesic = document.querySelector('.date__month');
let denCislo = document.querySelector('.date__daynum');
let den = document.querySelector('.date__day');
rok.innerHTML = datum.getFullYear();
mesic.innerHTML = months[datum.getMonth()];
denCislo.innerHTML = datum.getDate();
den.innerHTML = days[datum.getDay() - 1];

let splneno = '';
function vyhodnot() {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks' + splneno)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderTasks(data);
    });

  const renderTasks = (items) => {
    let todoTasks = document.querySelector('.todo__tasks');
    todoTasks.innerHTML = items
      .map((item) => {
        return Task(item);
      }).join('');
  }
};


let checkBox = document.querySelector("#checkbox-undone");
checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    splneno = '?done=false';
    vyhodnot();
  } else if (checkBox.checked === false) {
    splneno = '';
    vyhodnot();
  }
});


vyhodnot();





  //https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=true