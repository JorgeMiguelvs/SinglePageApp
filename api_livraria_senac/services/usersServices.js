const fs = require('fs');

exports.addUser = (name,password)=>{
    //pegamos os dados que estão no json
    const dadosJson = fs.readFileSync('users.json','utf-8');
    //converte para o formato JSON
    const users = JSON.parse(dadosJson);
    //criamos o novo usuario passando um obj para ele com os dados dos parametros
    const novoUsuario = {name:name, password:password};
    //inserimos esse novo user para dentro da lista
    users.push(novoUsuario);
    //escrevemos essa nova lsita no json
    fs.writeFileSync('users.json',JSON.stringify(users),'utf-8');

}


// app.post('/cadastro', (req,res)=>{
//     const {name,password} = req.body;

//     if (name && password) {

//         userService.addUser(name,password);
//         res.status(200).send("User add")
        
//     } else {
//         res.status(400).send("Dados invalidos")
//     }
// })


exports.validadeLogin = (name,password) =>{
    
    try {
        const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

        // Restante do código para validar o login...
        console.log('Dados do usuário:', userData);
        const user = userData.find(user=> user.name ===name ) ///find = iterador de busca

        //verifica o usuario e a senha
        if (!user ||user.password !== password){
            return false;
        }

        return true;
    } catch (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        return false; // Ou outra ação apropriada, dependendo do contexto.
    }
        // Restante do código para validar o login...
    
}