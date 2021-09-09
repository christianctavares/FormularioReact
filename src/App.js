import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { Component } from "react";
import { validarCPF, validarSenha } from "./models/cadastro.js";
import ValidacoesCadastro from "./contexts/ValidadoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha,
        }}>
          <FormularioCadastro
            aoEnviar={aoEnviarForm}
            formatar={formataCPF}
          />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log("dados: ", dados);
}

function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export default App;
