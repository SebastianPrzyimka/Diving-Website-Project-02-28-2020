let sliderImages = document.querySelectorAll('.slide'),
    slideContent=document.querySelector('.slide-content'),
    arrowRight=document.querySelector('#arrow-right'),
    arrowLeft=document.querySelector('#arrow-left'),
    
    current = 0;

//clear all images
function reset(){
  for(let i=0; i<sliderImages.length; i++){
    sliderImages[i].style.display ='none'
  }
}


function startSlide(){
  reset();
  sliderImages[0].style.display = 'block'
 
}

function slideleft(){
  reset()
  sliderImages[current -1].style.display = 'block'
  current--
}

//show next
function slideRight(){
  reset()
  sliderImages[current + 1].style.display = 'block';
  current++;
}



// left arrow click
arrowLeft.addEventListener('click',function(){
  if(current === 0){
    current = sliderImages.length
  }
  slideleft();
});

// right arrow click
arrowRight.addEventListener('click',function(){
  
  if(current === sliderImages.length - 1){
    current = -1
  }
  slideRight();
});
startSlide();


// accordion 

const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


//toggle navbar
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

      //animate links
  navLinks.forEach((link,index) => {
    if(link.style.animation){
      link.style.animation = ''
    }else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 100 + 0}s`
    }
    });
  //burger animation
    burger.classList.toggle('toggle');

  });

}

navSlide();