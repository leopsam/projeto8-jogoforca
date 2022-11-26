export default function Letras({letras, liberaJogo, setAtivado, ativado, setLetraUsada, setGanhou, setLiberaJogo, letraUsada, arrayPalavra, setErro, erro, contaLetra, setContaLetra}) {

    return (
      <div className="teclado">
        {letras.map((letra) => (
          <button 
            onClick={( ) => letraSelecionada(letra)} 
            data-test="letter"                 
            key={letra}            
            className={letraUsada.includes(letra) ? "tecla teclas-desativadas" : liberaJogo}
            disabled={letraUsada.includes(letra) ? "disabled" : ativado}
            >{letra}
          </button>))}
      </div> 
    );     
    
    function letraSelecionada(letraClicada){
      let novoArrayLetrasCertas     
      setLetraUsada(letraUsada + letraClicada)
      console.log(`clicou ${letraClicada}`)

        if(arrayPalavra.includes(letraClicada.toLowerCase())){

          for(let i=0; i<arrayPalavra.length; i++){
            
            if(arrayPalavra[i].toUpperCase() === letraClicada){
              novoArrayLetrasCertas = contaLetra
              novoArrayLetrasCertas.splice(i, 1, letraClicada.toLowerCase())
              setContaLetra(novoArrayLetrasCertas)
              console.log(novoArrayLetrasCertas)
            }
          }              
            }else{              
              setErro(erro + 1)              
            }
            
            if(contaLetra.join('')  === arrayPalavra.join('')){

              setContaLetra(arrayPalavra)
              setGanhou(true)
              setLiberaJogo("tecla teclas-desativadas")
              setAtivado('disabled')

            }else if(erro === 5){

              setContaLetra(arrayPalavra)
              setGanhou(false) 
              setErro(6)  
              setLiberaJogo("tecla teclas-desativadas")
              setAtivado('disabled')
            }       
      }      
}