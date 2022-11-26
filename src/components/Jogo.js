import palavras from "../palavras";
export default function Jogo({arrayPalavra, setLiberaJogo, setArrayPalavra, setJaClicou, setErro, jaClicou, setContaLetra, contaLetra, erro, ganhou, setGanhou}) {  
  function comparador() {
    return Math.random() - 0.5;
  }
  function iniciaJogo(){ 
   
      //console.log(arrayPalavra)
      setContaLetra(arrayPalavra.map((cl) => ' _ '))
      setLiberaJogo("tecla teclas-ativadas")
      setGanhou('')
      setErro(0)

      setArrayPalavra(palavras.sort(comparador)[0].split(''))
      
    
    
  }

  let resultadoClass;

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
            <img className="img-forca" src={`./assets/img/forca${erro}.png`} />
        </div>
        <div className="container canto">
            <button onClick={() => iniciaJogo()} className="iniciar">Escolha palavra</button>
            <div className={resultadoClass}>   
              {contaLetra}              
            </div>
        </div>
      </div>
      
    );
  }

  
  

  