import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, formatar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais
      aoEnviar={coletarDados}
      formatar={formatar}
    />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">
      Obrigado por se cadastrar {dadosColetados.nome}!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    console.log("dadosColetados: ", dadosColetados);
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    return formularios[etapa];
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizaçao</StepLabel>
        </Step>
      </Stepper>
      {formularioAtual(etapaAtual)}
    </>
  );
}

export default FormularioCadastro;
