let base = 'dictionnaire'

// let word;
// fetch("https://trouve-mot.fr/api/size/5 ", {
//   method:'GET',
//   headers: {
//     'Authorization' : 'Bearer your token',
//     'Content-Type' : 'application/json'
//   }
// })
//     .then((response) => response.json()) // réponse convertie en JSON
//     .then((result => {
//       word = result 
//      console.log(word) // affichage des données
//     }) 
//     .catch(error => console.error("Error", error)))


// console.log(word.name)



function guess() {
    let word = document.getElementById("word").value
	let result = tryWord(word, base) 
    if (result == true){
      document.getElementById("win").innerText = 'Vous avez gagné'
    } else {
      document.getElementById("word").value = ''
      document.getElementById("try").innerText = "Mot tenté : " + word
    document.getElementById("well").innerText = 'Bien placé: '+ result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: '+ result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: '+ result.notInWord.join(', ')
    }
}


function tryWord(word, base) {
	if (word.toLowerCase() === base.toLowerCase()) { // si le mot est exactement identique
		return true
  } else { // si différence
  	let wellPlaced = []; // array pour les lettres bien placées
    let notInWord = []; // array pour les lettres pas dans le mot
    let missplaced = []; // array pour les lettres mal placées
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    console.log("arrayBase",  arrayBase);
    console.log("arrayWord", arrayWord);
    
    
		for (let i = 0; i < arrayWord.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else if (arrayBase.includes(arrayWord[i]) === false){
        notInWord.push(arrayWord[i])
      } else {
        missplaced.push(arrayWord[i])
    }
}
console.log(wellPlaced);   
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }// retourne un objet
  }
}

