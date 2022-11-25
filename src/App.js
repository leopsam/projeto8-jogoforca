import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./palavras";
import { useState } from "react";

function comparador() {
	return Math.random() - 0.5;
}



export default function App() { 
  const [erro, setErro] = useState(0)
  const [liberaJogo, setLiberaJogo] = useState("tecla teclas-desativadas")
  const [contaLetra, setContaLetra] = useState() 
  const [jaClicou, setJaClicou] = useState(false)
  const arrayPalavra = palavras.sort(comparador)[0].split('')
  const alfabeto  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  return (
    <div className="app">
      <Jogo 
      arrayPalavra={arrayPalavra}
      setLiberaJogo={setLiberaJogo}
      jaClicou={jaClicou}
      setJaClicou={setJaClicou}
      contaLetra={contaLetra}
      setContaLetra={setContaLetra}
      erro={erro}
      />

      <Letras 
      letras={alfabeto}
      liberaJogo={liberaJogo}
      

      />

      <Chute 
      liberaJogo={liberaJogo}
      />
    </div>
    
  );
}

