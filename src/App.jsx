import { useState } from "react";

import Perfil from "./Components/Perfil";
import Formulario from "./Components/Formulario";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return (
    <>
      <Perfil nome="Ramon Galdino" endereco="https://github.com/RamonOrtisz.png"/>
      
      {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"> toggle form </button>
    </>
  )
}

export default App
