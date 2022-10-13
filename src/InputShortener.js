import { useState } from "react"

const InputShortener = ({ setInputValue }) => { //tomamos el valor de entrada establecido
  const [value, setValue] = useState("");//el valor sea igual al estado de uso por defecto
  

  const handleClick = () => { // contiene la lógica que ejecutara el formulario al guardarse.
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div> 
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value} //igual al valor
          onChange={e => setValue(e.target.value)} 
          //nos permiten definir una acción a ejecutar cuando una situación ocurre
          //se establece el valor del punto de destino "e"
        />
        <button onClick={handleClick}>shorten</button>
      </div> 
    </div>
  )  ///Metodo de entrada de la url
}//Esto es para que cada vez que el usuario escriba el estado se actualice

export default InputShortener