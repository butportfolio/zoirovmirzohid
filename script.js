const text = [
"UI/UX Designer",
"3D Artist",
"Photographer",
"Video Creator",
"Game Designer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect(){

current = text[i];

if(!isDeleting){
j++;
}else{
j--;
}

document.getElementById("typing").textContent =
current.substring(0,j);

if(!isDeleting && j === current.length){
isDeleting = true;
setTimeout(typeEffect,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i = (i + 1) % text.length;
}

setTimeout(typeEffect,isDeleting ? 50 : 100);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add("active");
}

});

});

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {

counters.forEach(counter=>{

const target = +counter.dataset.target;

const update = () => {

const value = +counter.innerText;

const increment = target / 100;

if(value < target){

counter.innerText =
Math.ceil(value + increment);

setTimeout(update,20);

}else{
counter.innerText = target;
}

};

update();

});

};

animateCounters();

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent Successfully!");

});
