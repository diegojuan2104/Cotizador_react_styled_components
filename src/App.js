import React, { useState } from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled";

import Header from "./components/Header.component";
import Formulario from "./components/Formulario.component";
import Resumen from "./components/Resumen.component";
import Resultado from "./components/Resultado.component";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });


  const {datos, cotizacion} = resumen

  return (
    <Contenedor>
      <Header titulo="Cotizador" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion = {cotizacion}/>
      </ContenedorFormulario>
    </Contenedor>
  );
}
export default App;
