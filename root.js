const express = require('express');
const app = express();

app.get('/', (reqete, reponse) =>{
  reponse.send('Bonjour les sio');
})

app.listen(3000, () =>{
  console.log('le serveur est en ecoute sur http://localhost:3000/');
})