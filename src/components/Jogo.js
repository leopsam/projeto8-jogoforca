export default function Jogo({arrayPalavra, setLiberaJogo, setJaClicou, jaClicou, setContaLetra, contaLetra, erro}) {  

  function iniciaJogo(){ 
    if(jaClicou === false){
      console.log(arrayPalavra)
      setContaLetra(arrayPalavra.map((cl) => ' _ '))
      setLiberaJogo("tecla teclas-ativadas")
      setJaClicou(true)
    }else{
      console.log('O jogo ja foi iniciado!')
    }
  }

    return (
      <div className="tela-jogo">
        <div className="container">
            <img className="img-forca" src={`./assets/img/forca${erro}.png`} />
        </div>
        <div className="container canto">
            <button onClick={() => iniciaJogo()} className="iniciar">Escolha palavra</button>
            <div className="palavra">   
              {contaLetra}              
            </div>
        </div>
      </div>
      
    );
  }

  
  

  