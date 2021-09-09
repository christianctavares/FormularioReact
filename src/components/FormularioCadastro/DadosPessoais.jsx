import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidadoesCadastro";
import useErros from "../../hooks/useErros";
// import { validarSenha } from "../../models/cadastro";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  // const [erros, setErros] = useState({
  //   cpf: { valido: true, texto: "" },
  //   nome: { valido: true, texto: "" },
  // });
  // function validarCampos(event) {
  //   const { name, value } = event.target;
  //   const ehValido = validacoes[name](value);
  //   const novoEstado = { ...erros };
  //   novoEstado[name] = ehValido;
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
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      >
        Nome
      </TextField>

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      >
        Sobrenome
      </TextField>

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        // (event) => {
        //   const ehValido = validarCPF(cpf);
        //   let cpfFormatado = (event.target.value = formatar(cpf));
        //   if (ehValido.valido === true) {
        //     setCpfFormatado(cpfFormatado);
        //   } else {
        //     setCpfFormatado("");
        //   }
        //   setErros({
        //     cpf: ehValido,
        //   });
        // }
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      >
        Cpf
      </TextField>
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promocoes"
            color="primary"
          ></Switch>
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          ></Switch>
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
