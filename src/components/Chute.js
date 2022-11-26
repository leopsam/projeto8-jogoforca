export default function Chute({liberaJogo, setAtivado, ativado, arrayPalavra, chutePalavra, setChutePalavra, setLiberaJogo, setErro, setGanhou, setContaLetra}) {
  let palavraCerta = arrayPalavra.join('') 

    return (
      <div className="chute">
            <h1>Já sei a palavra!</h1> 
            <input 
                tipe="text" 
                value={chutePalavra}
                data-test="guess-input"                               
                onChange={c => setChutePalavra(c.target.value)}
                disabled={ativado} />
            <button className={liberaJogo}  
                    data-test="guess-button" 
                    onClick={verificaChute} 
                    disabled={ativado}>
                    Chutar
            </button>
      </div> 
    );

    function verificaChute(){
      setContaLetra(arrayPalavra)
      
      if(chutePalavra === palavraCerta){
        setGanhou(true)
        setLiberaJogo("tecla teclas-desativadas")
        setAtivado('disabled')
        
      }else{
        setErro(6)
        setGanhou(false)
        setLiberaJogo("tecla teclas-desativadas")
        setAtivado('disabled')        
      }
    }
}