//chamando o pacote que eu instalei para dentro do meu arquivo para usar

const express = require("express");

//cria um obj app para receber todas as funçoes do express

const app = express();
                      //callbCK 2 objetos
app.get('/minhaRota', (req,res)=>{
    res.status(200).json()
});

app.listen(4000)

