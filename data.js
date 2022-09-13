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

const getData = async (path)=> {
    return await fetch(path);
  };
  // somewhere in your code ...
  const data = await getData("path/to/data.json");

btnDaily.onclick = () =>{

    fetch("data.json")   
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        currentWork.textContent = reponse2[0].timeframes.daily.current;
        previousWork.textContent = reponse2[0].timeframes.daily.previous;
        

    })
}





    
