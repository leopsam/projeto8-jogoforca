export default function Letras({letras}) {
    return (
      <div className="teclado">
            {letras.map((letra) => (
                <div className="tecla">{letra}</div>
            ))}    
      </div> 
    );
  }