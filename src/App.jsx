import { useState } from "react";

import Perfil from "./Components/Perfil";
import Formulario from "./Components/Formulario";
import ReposList from "./Components/ReposList";

function App() { 
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}  />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"> toggle form </button> */}
    </>
  )
}

export default App
