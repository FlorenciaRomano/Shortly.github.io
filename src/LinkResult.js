import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"; //importamos esta funcionalidad

const LinkResult = ({ inputValue }) => { //necesitamos traer el valor que se ingresó
  const [shortenLink, setShortenLink] = useState(""); //agregamos el estado cuando se esté por acortar un link
                                        //para usar el estado de forma predeterminada
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false); //cargar y ejecutar la carga,
  const [error, setError] = useState(false);

  const fetchData = async () => { //función asincrona
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);//va a esperar respuesta de la api asignada cuando se ingrese el valor del input
    } catch(err) { //sino se ejecuta muestra un error
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => { //remporizador- tiempo de espera
      setCopied(false); //configura en falso por defecto
    }, 1000); //un segundo

    return () => clearTimeout(timer);
  }, [copied]); //se ejecuta cada ver que la var copiada cambia

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something wne t wrong :(</p>
  }


  return (
    <>
      {shortenLink && ( //Resultados y botón que copia al portapapeles
        <div className="result"> 
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  )
}

export default LinkResult