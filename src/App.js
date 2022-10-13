import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} /> 
      {/* //neceitamos enviar el valor de entrada */}
      <BackgroundAnimate /> 
      <LinkResult inputValue={inputValue} /> 
      {/* //se envia el valor de entrada que es igual al mismo que se ingresó */}
    </div>
  );
} //renderizamos el input, el fonde y los resultados

export default App;
