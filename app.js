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
    '80%',
    '75%',
    '60%',
    '40%',
    '65%',
    '80%',
    '40%'
  ];
  progressBar.forEach((progress,index)=>{
    progress.style.width = values[index];
  });
})

//for services
window.addEventListener('scroll',()=>{
  let content = document.querySelector('#services_id');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
  //   alert("hey");
  // }
    // adding class in content of services
    content.classList.add('active_services');
  }else{
    content.classList.remove('active_services');
  }
})

// window.addEventListener('scroll',()=>{
//   let content = document.querySelector('#service_id');
//   let contentPosition = content.getBoundingClientRect().top;
//   let screenPosition = window.innerHeight;
//   if(contentPosition < screenPosition){
//   //   alert("hey");
//   // }
//     // adding class in content of services
//     content.classList.add('active_services');
//   }else{
//     content.classList.remove('active_services');
//   }
// })

//ACTIVE CLASS CHANGING ON SCROLL IN NAVBAR

var sections = document.querySelectorAll('section');

onscroll = function() {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if(scrollPosition >= section.offsetTop - section.offsetHeight*0.25 && scrollPosition<section.offsetTop + section.offsetHeight*0.25){
    //  console.log(section.attributes.id)
      var currentId = section.attributes.id.value;

      
      removerAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removerAllActiveClasses = function(){
  document.querySelectorAll('nav a').forEach((e1)=> {
    e1.classList.remove("active");
  });
};

var addActiveClass =  function(id){
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

