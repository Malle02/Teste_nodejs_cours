const http = require('http');
const name = '127.0.0.1';
const port = 3000;
const server = http.createServer((requette, reponse) =>
{
   reponse.statusCode =200;
   response.setHeader("Content-type", "text/plain")
    reponse.end("Bonjour les SIO")
})

server.listen(port, name, () =>{
    console.log("le serveur est en écoute sur http")
})



//acceder  au contenu d'un fichier js dans le terminale avec node :  node .\index.js


