import React from "react";
import logo from "./logo.svg";
import styled from "@emotion/styled"
import Header from "./components/Header.component";


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador"/>
    </Contenedor> 
  );
}
export default App;
