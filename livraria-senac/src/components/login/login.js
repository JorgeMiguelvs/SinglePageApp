import "./stylesLogin.css";

const Login = () =>{
    return(
        <div class="container">
        <form id="login-form" action="#">
          <h2>Tela de Login</h2>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
}

export default Login;