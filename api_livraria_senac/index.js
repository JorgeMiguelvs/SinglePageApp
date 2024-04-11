//chamando o pacote que eu instalei para dentro do meu arquivo para usar
const express = require("express");

//importamos os livros que estão na outra pasta services
const livrosImportados = require('./services/livroServices'); 
const usersServices = require('./services/usersServices'); //npm i body-parser instalamos para receber no corpo do json

const body = require('body-parser');//importar

const cors = require('cors');


//cria um obj app para receber todas as funçoes do express
const app = express();
app.use(cors());

app.post('/addUser',(req,res)=>{
//extrair os dados do corpo da requisilçao
    const {name,password} = req.body;

    if (name && password){

        userService.addUser(name,password);
        res.status(200).send("User Add")
        
    }
    else{
        res.status(400).send("Dados Invalidos")
    }
})

app.use(body.json());
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

