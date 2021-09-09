import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidadoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  // const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
  // function validarCampos(event) {
  //   const { name, value } = event.target;
  //   const novoEstado = { ...erros };
  //   novoEstado[name] = validacoes[name](value);
  //   setErros(novoEstado);
  // }

  // function possoEnviar() {
  //   for (let campo in erros) {
  //     if (!erros[campo].valido) {
  //       return false;
  //     }
  //     return true;
  //   }
  // }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        name="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      ></TextField>
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        type="password"
        name="senha"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
