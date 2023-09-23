const express = require('express');
const app = express();
const path = require('path');


app.get('/', (reqete, reponse) =>{
reponse.send('Bonjour les sio');
})

app.listen(3000, () =>{
 console.log('le serveur est en ecoute sur http://localhost:3000/');
})

// seance 1 doc4
// Exercice 1:

app.get('/acceuil', (reqete, reponse) =>{
  reponse.send("Bienvenue sur la page d'acceuil");
})





//Exercie 2:

app.get('/bienvenue', (reqete, reponse) =>{
  reponse.sendFile(path.join(__dirname, 'bienvenue.html'));
})
// app.listen(3000, () =>{
//   console.log("Vous etes bien sur la page html ");
// })



//exercice 3


app.get('/plandusite', (reqete, reponse) =>{
    reponse.sendFile(path.join(__dirname, 'plandusite.html'));
})


// cours 2 DOC 1 TP ROUTES


// EXERCICES 1










