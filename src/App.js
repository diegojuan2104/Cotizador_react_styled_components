import React from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled"


import Header from "./components/Header.component";
import Formulario from "./components/Formulario.component"


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color:#FFF;
  padding:3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador"/>
    
    <ContenedorFormulario>
      <Formulario/>      
    </ContenedorFormulario>
    </Contenedor> 
  );
}
export default App;
