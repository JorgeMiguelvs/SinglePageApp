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
