
// je fait appel aux éléments présent dans la div card
const cards = document.querySelectorAll(`.card`);

// je veux parcourir chaque élément de la variable Cards
cards.forEach((dogCards)=>{

    // je cherche a définir une action au click

   dogCards.addEventListener(`click`,()=>{
     //  je sélectionne  la classe ".availability" que je passe en variable

     const availability = dogCards.querySelector(`.availability`);


// je cherche a définir les conditions pour l'affichage ou non du texte (availability)
    if (availability.style.display == "none"){

       // je change ses propriétés css afin que le texte apparaisse a l'écran
       
       availability.style.display = "block";
    } else {

        // je change ses propriétés css afin que le texte n'apparaisse pas a l'écran

        availability.style.display = "none";
    }
       
    })
})





