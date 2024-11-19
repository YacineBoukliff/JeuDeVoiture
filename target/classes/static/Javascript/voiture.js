const boutonvoiture = document.getElementById("tesla-js")
console.log(boutonvoiture)

const input = document.getElementById("input-js")
input.addEventListener('keydown', (event) => {

  console.log(event.key)

  const touches = ["z" , "q" , "s" , "d"]

  if (touches.includes(3)){
    console.log(`Le tableau contient bien tout les élements du tableauc${touches}`)
  }

  if(event.key.trim() === "z" ){
    console.log(` C'est bien la touche z`)
  }
  else if(event.key.trim() === "s" ){
    console.log(` C'est bien la touche s`)
  }

  else if (event.key.trim() === "q" ){
    console.log(` C'est bien la touche q `)
  }

  else if (event.key.trim() === "d" ){
    console.log(` C'est bien la touche d`)
  }
  else {
    console.log("Ca bug ")
  }
})

function GererClick (){
    
    boutonvoiture.addEventListener('click', (e) => {
        e.preventDefault()
        console.log("Bouton cliqué ")
    }) }

    GererClick()