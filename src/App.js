import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validarCPF={validarCPF}
          formatar={formataCPF}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log("dados: ", dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function formataCPF(cpf) {
  //retira os caracteres indesejados...
  cpf = cpf.replace(/[^\d]/g, "");

  //realizar a formatação...
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export default App;
