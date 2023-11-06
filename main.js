
const cards = document.querySelectorAll(`.card`);

cards.forEach((dogCards)=>{

   dogCards.addEventListener(`click`,()=>{

       const availability = dogCards.querySelector(`.availability`);
       
       availability.style.display = "block";
    })
})



