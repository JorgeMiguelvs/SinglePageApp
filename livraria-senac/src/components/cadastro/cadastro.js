import './stylesCadastro.css';

const Cadastro = () =>{
    return(
    <div class="container">
    <form id="cadastro-form" action="#">
      <h2>Cadastro</h2>
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required/>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
        

    );
}

export default Cadastro;