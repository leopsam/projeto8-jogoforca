export default function Letras({letras, liberaJogo}) {
    return (
      <div className="teclado">
            {letras.map((letra) => (
                <div                   
                  key={letra} 
                  className={liberaJogo}>{letra}</div>
            ))}
      </div> 
    );
  }