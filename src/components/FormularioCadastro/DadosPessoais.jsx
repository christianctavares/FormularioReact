import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function DadosPessoais({ aoEnviar, validarCPF, formatar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  const [cpfFormatado, setCpfFormatado] = useState(cpf);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="nome"
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
        value={cpfFormatado}
        onChange={(event) => {
          setCpf(event.target.value);
          setCpfFormatado(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          let cpfFormatado = (event.target.value = formatar(cpf));
          if (ehValido.valido === true) {
            setCpfFormatado(cpfFormatado);
          } else {
            setCpfFormatado("");
          }
          setErros({
            cpf: ehValido,
          });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
