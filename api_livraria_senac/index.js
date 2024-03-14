//chamando o pacote que eu instalei para dentro do meu arquivo para usar
const express = require("express");

//importamos os livros que estão na outra pasta services
const livrosImportados = require('./services/livroServices');
const cors = require('cors');

//cria um obj app para receber todas as funçoes do express
const app = express();
app.use(cors());
                      //callbCK 2 objetos
app.get('/livros', (req,res)=>{
    res.status(200).json(livrosImportados.buscarLivros());
});

app.get('/buscarLivrosPorTitulo/:titulo', (req, res)=>{

    //extrai o titulo que enviado pela url pelo usuario
    const {titulo} = req.params;
    //chamo a função do serviço e passo o titulo extraido
    const resultado = livrosImportados.buscarPorTitulo(titulo);

    if (resultado) {
        res.status(200).send(resultado)
    } else {
        res.status(400).send('recurso não foi encontrado');
    }

});

app.listen(8080)

