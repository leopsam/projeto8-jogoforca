export default function Jogo({arrayPalavra, setAtivado, setLetraUsada, resultadoClass, setLiberaJogo, setChutePalavra, setErro, setContaLetra, contaLetra, erro, ganhou, setGanhou}) {  
    
  function iniciaJogo(){      
      setContaLetra(arrayPalavra.map((cl) => ' _ '))          
      setLiberaJogo("tecla teclas-ativadas")
      setGanhou('')
      setErro(0)
      setLetraUsada([])
      setChutePalavra('')
      setAtivado('')
      console.log(arrayPalavra)
  }

    if(ganhou === true){
      resultadoClass = "palavra venceu"
    }else if(ganhou === false){
      resultadoClass = "palavra perdeu"
    }else if(!ganhou){
      resultadoClass = "palavra"
    }  

    return (
      <div className="tela-jogo">
        <div className="container">
            <img className="img-forca" data-test="game-image" src={`./assets/img/forca${erro}.png`} />
        </div>
        <div className="container canto">
            <button onClick={() => iniciaJogo()} data-test="choose-word" className="iniciar">Escolha palavra</button>
            <div data-test="word" data-answer={arrayPalavra.join('')} className={resultadoClass}>   
              {contaLetra}              
            </div>
        </div>
      </div>
      
    );
  }