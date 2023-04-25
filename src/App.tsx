import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import axios from 'axios';
import { PrecioConsultado, PurpleMoney } from './interfaces/RespPrecio.type';
import { Cotizacion } from './components/Cotizacion';

const resultadoDefault = {
  PRICE: 0,
  HIGHDAY: '',
  LOWDAY: '',
  CHANGEPCT24HOUR: '',
  LASTUPDATE: ''
}

export const App = () => {

  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [resultado, setResultado] = useState<PurpleMoney>()
  useEffect(() => {

    //Evitamos laprimera ejecucion
    if (moneda === '' || criptoMoneda === '') return;

    const consultarApi = async () => {

      //Consultar Api para cotizar
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

      const resultado = await axios.get<PrecioConsultado>(url)
      setResultado(resultado.data.DISPLAY[`${criptoMoneda}`][moneda]);
    }

    consultarApi();

  }, [moneda, criptoMoneda])


  return (
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <img className="img-fluid mt-5" src="https://jutaga.github.io/ReactCripto/cryptomonedas.png" alt="crypto" />
        </div>

        <div className="col-md-6">
          <h1 className="ms-5 mt-5 text-light fw-bold">Cotiza CriptoMonedas al Instante</h1>
          <hr className="w-25 border border-primary border-3 opacity-100 ms-5"></hr>

          <Formulario setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />


          {
            resultado && <Cotizacion resultado={resultado ? resultado : resultadoDefault} />
          }
        </div>
      </div>

    </div>


  )
}
