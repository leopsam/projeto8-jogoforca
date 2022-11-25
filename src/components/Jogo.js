export default function Jogo() {
    return (
      <div className="tela-jogo">
        <div className="container">
            <img className="img-forca" src="./assets/img/forca0.png" />
        </div>
        <div className="container canto">
            <button className="iniciar">Escolha palavra</button>
            <div className="palavra">_ _ _ _ _ _ _ _ _ _ _ _</div>
        </div>
      </div> 
    );
  }