

let Voiture = document.getElementById("voiture-js")
console.log(Voiture)
const PositionVoiture = Voiture.getBoundingClientRect()
console.log(PositionVoiture)

const PositionVoitureDroite = Voiture.getBoundingClientRect().right
console.log(PositionVoitureDroite)

const PositionVoitureGauche = Voiture.getBoundingClientRect().left
console.log(PositionVoitureGauche)

const PositionVoitureHaut = Voiture.getBoundingClientRect().top
console.log(PositionVoitureHaut)

const PositionVoitureBas = Voiture.getBoundingClientRect().bottom
console.log(PositionVoitureBas)


const TexteErreur = document.getElementById("texte-erreur")
console.log(TexteErreur)

TexteErreur.classList.add("remove")
const messageerreur =  " Cette Touche n'est pas disponible pour le jeu "


const DeplacementEnHaut = 10

const resultat = PositionVoitureDroite + DeplacementEnHaut

const DeplacementAGauche = 15
const DeplacementADroite = 20
const DeplacementEnBas = 25


function DeplacementVehicule (){

  document.body.addEventListener('keydown' , (event) => {
    console.log(event.key)
  
    if(event.key.trim() === "z" ){
      const resultat = PositionVoitureHaut + DeplacementEnHaut
      console.log(resultat)
      console.log(` C'est bien la touche z`)
    }
    else if(event.key.trim() === "s" ){
      const resultat = PositionVoitureBas + DeplacementEnHaut
      console.log(resultat)
      console.log(` C'est bien la touche s`)
    }
  
    else if (event.key.trim() === "q" ){
      const resultat = PositionVoitureGauche + DeplacementEnHaut
      console.log(resultat)
      console.log(` C'est bien la touche q `)
    }
  
    else if (event.key.trim() === "d" ){
      const resultat = PositionVoitureDroite + DeplacementEnHaut
      console.log(resultat)
      console.log(` C'est bien la touche d`)
    }
    else {
      console.log("Ca bug ")
      TexteErreur.classList.remove("remove")
      TexteErreur.innerHTML = messageerreur
    }
  
  })

}

DeplacementVehicule()



// function GererClick (){
    
//     boutonvoiture.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log("Bouton cliqué ")
//     }) }

//     GererClick()


  