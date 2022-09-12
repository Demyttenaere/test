/*import data from './data.json' assert {type: 'json'};

console.log(data);*/

const btnDaily = document.getElementsByClassName('daily');
const btnWeekly = document.getElementsByClassName('weekly');
const btnMonthly = document.getElementsByClassName('monthly');

const currentWork = document.getElementsByClassName('currentWork');
const currentPlay = document.getElementsByClassName('currentPlay');
const currentStudy = document.getElementsByClassName('currentStudy');
const currentExercise = document.getElementsByClassName('currentExercise');
const currentSocial = document.getElementsByClassName('currentSocial');
const currentSelf = document.getElementsByClassName('ccurrentSelf');

const previousWork = document.getElementsByClassName('previousWork');
const previousPlay = document.getElementsByClassName('previousPlay');
const previousStudy = document.getElementsByClassName('previousStudy');
const previousExercise = document.getElementsByClassName('previousExercise');
const previousSocial = document.getElementsByClassName('previousSocial');
const previousSelf = document.getElementsByClassName('previousSelf');


/*btnDaily.onclick = () =>{

    fetch("data.json")   
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        currentWork.textContent = data[0].timeframes.daily.current;
        previousWork.textContent = data[0].timeframes.daily.previous;
        
    
    
    
    })
}*/

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tracker(data);
  })
  .catch(function (err) {
    console.log(err);
  });


function tracker(data) {

  
  btnDaily.onclick = () =>{

    currentWork.textContent = data[0].timeframes.daily.current;
    previousWork.textContent = data[0].timeframes.daily.previous;
  }}
    
