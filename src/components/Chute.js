export default function Letras({liberaJogo}) {
    return (
      <div className="chute">
            <h1>Já sei a palavra!</h1> 
            <input tipe="text"/>
            <button className={liberaJogo} >Chutar</button>
      </div> 
    );
  }