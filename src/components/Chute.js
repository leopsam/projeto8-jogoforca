import { useState } from "react";

export default function Chute({liberaJogo, arrayPalavra, chutePalavra, setChutePalavra, setLiberaJogo, setErro, setGanhou, setContaLetra}) {
  let palavraCerta = arrayPalavra.join('') 

    return (
      <div className="chute">
            <h1>Já sei a palavra!</h1> 
            <input 
                tipe="text" 
                value={chutePalavra} 
                
                onChange={c => setChutePalavra(c.target.value)}/>
            <button className={liberaJogo}  onClick={verificaChute}>Chutar</button>
      </div> 
    );

    function verificaChute(){
      setContaLetra(arrayPalavra)
      
      if(chutePalavra === palavraCerta){
        setGanhou(true)
        setLiberaJogo("tecla teclas-desativadas")
      }else{
        setErro(6)
        setGanhou(false)
        setLiberaJogo("tecla teclas-desativadas")
      }

    }
  }