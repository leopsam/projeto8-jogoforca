import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./palavras";
import React, { useState } from "react";

function comparador() {
	return Math.random() - 0.5;
}



export default function App() { 
  const [erro, setErro] = useState(0)
  const [liberaJogo, setLiberaJogo] = useState("tecla teclas-desativadas")
  const [letraUsada, setLetraUsada] = useState([])
  const [contaLetra, setContaLetra] = useState() 
  const [jaClicou, setJaClicou] = useState(false)
  const [chutePalavra, setChutePalavra] = useState('')
  const [ganhou, setGanhou] = useState('')
  const [arrayPalavra, setArrayPalavra] = React.useState(palavras.sort(comparador)[0].split(''))
  console.log(arrayPalavra)
  console.log(erro)

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
      ganhou={ganhou}
      setGanhou={setGanhou}
      setErro={setErro}
      setArrayPalavra={setArrayPalavra}
      />

      <Letras 
      letras={alfabeto}
      liberaJogo={liberaJogo}
      letraUsada={letraUsada}
      setLetraUsada={setLetraUsada}
      arrayPalavra={arrayPalavra}
      setContaLetra={setContaLetra}
      contaLetra={contaLetra}
      setErro={setErro}
      erro={erro} 
      />

      <Chute 
      liberaJogo={liberaJogo}
      arrayPalavra={arrayPalavra}
      chutePalavra={chutePalavra}
      setChutePalavra={setChutePalavra}
      setErro={setErro}
      setGanhou={setGanhou}
      setContaLetra={setContaLetra}
      setLiberaJogo={setLiberaJogo}
      />
    </div>
    
  );
}

