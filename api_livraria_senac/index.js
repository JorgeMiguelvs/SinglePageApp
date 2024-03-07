//chamando o pacote que eu instalei para dentro do meu arquivo para usar
const express = require("express");

//importamos os livros que estão na outra pasta services
const livrosImportados = require('./services/livroServices');

//cria um obj app para receber todas as funçoes do express
const app = express();
                      //callbCK 2 objetos
app.get('/livros', (req,res)=>{
    res.status(200).json(livrosImportados.buscarLivros());
});

app.listen(4000)

