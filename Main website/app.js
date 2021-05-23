// Add active class to the current button (highlight it)
var header = document.getElementById("navbarNav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  console.log('clicked')    
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//for changing text animation

const texts = ['web developer','programmer','learner'] //defining texts
let count = 0; //for above let's start with count 0
//'web developer'=0,'programmer'=1,'blogger'=2
let index = 0; //indexing individual letter array 
//w=0,e=1,b=2, =3,d=4,eveloper
let currentText= "";//it will be that selected text at current time, it will change dynamically
let letter = "";
(function type(){
  if(count === texts.length){
    count =0; 
  }
  currentText = texts[count];
  letter =currentText.slice(0,++index);
  document.querySelector('.typing').textContent =letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type,400);
}());

// progress bar for skills

window.addEventListener('load',()=>{
  let progressBar = document.querySelectorAll('.progress-bar');//<div class="progress-bar">
  let values = [
    '75%',
    '65%',
    '50%',
    '75%',
    '65%',
    '50%'
  ];
  progressBar.forEach((progress,index)=>{
    progress.style.width = values[index];
  });
})