
//    offer button

const offer = document.getElementsByClassName("offer")[0];

offer.addEventListener("click",()=>{
    Swal.fire({
        title: '30% off ot all Indian Deshes',
        width: 500,
        padding: '6em',
        background: '#a0a1e2 url(../images/curry (12).jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/12uXi1GXBibALC/giphy.gif")
          left top
          repeat
        `
      })
})

const token = document.getElementsByClassName("token")[0];

token.addEventListener("click",()=>{
    Swal.fire({
        title: 'Birani05!',
        text: 'Get token and pay less',
        imageUrl: '../images/unnamed-removebg-preview (1).png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
})

// js cokie

$(document).ready(function(){
   if(sessionStorage.getItem("#Modal") !== 'true'){
       $("#Modal").modal('show');
       sessionStorage.setItem("#Modal" ,'true')
   }
})

// FAG

const btnFaq  = document.querySelectorAll(".question-btn");
btnFaq.forEach(function(btn){
    btn.addEventListener("click",function(e){
 const question = e.currentTarget.parentElement.parentElement;
 question.classList.toggle("show-text")
    })
})
// AOS link
