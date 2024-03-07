

const { useEffect } = require("react");
const { useState } = require("react")

const maisBuscados=()=>{

    //gerenciador de estados (useState)
       //variavel, função
    const [livros,setLivros] = useState([]);

    //efeitos colaterais
    useEffect(()=>{
        const buscarLivros = async ()=>{
            try {
                const resposta = fetch('http://localhost:4000/livros');
                const dados = await resposta.json();
                setLivros(dados);
            } catch (error) {
                console.error(error);
            }
        }
    },[])

    return{

    }
}