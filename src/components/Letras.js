export default function Letras({letras, liberaJogo, setLetraUsada, letraUsada, arrayPalavra, setErro, erro, contaLetra, setContaLetra}) {

    return (
      <div className="teclado">
        {letras.map((letra) => (
          <div 
            onClick={( ) => letraSelecionada(letra)}                  
            key={letra} 
            className={letraUsada.includes(letra) ? "tecla teclas-desativadas" : liberaJogo}>{letra}
          </div>))}
      </div> 
    ); 
    
    
    function letraSelecionada(letraClicada){     
      setLetraUsada(letraUsada + letraClicada)

        if(arrayPalavra.includes(letraClicada.toLowerCase())){
          for(let i=0; i<arrayPalavra.length; i++){
            if(arrayPalavra[i].toUpperCase() === letraClicada){
              let novoArrayLetrasCertas = contaLetra
              novoArrayLetrasCertas.splice(i, 1, letraClicada)
              setContaLetra(novoArrayLetrasCertas)
              console.log(novoArrayLetrasCertas)
            }
          }              
            }else{              
              setErro(erro + 1)              
            }
        }

      
}