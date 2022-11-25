import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";

export default function App() {
  const letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  return (
    <div className="app">
      <Jogo />
      <Letras letras={letras}/>
      <Chute />
    </div>
    
  );
}
