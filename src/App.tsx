import { Formulario } from './components/Formulario';

export const App = () => {
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <img className="img-fluid mt-5" src="./src/cryptomonedas.png" alt="crypto" />
        </div>

        <div className="col-md-6">
          <h1 className="ms-5 mt-5 text-light fw-bold">Cotiza CriptoMonedas al Instante</h1>
          <hr className="w-25 border border-primary border-3 opacity-100 ms-5"></hr>

          <Formulario />
        </div>
      </div>

    </div>


  )
}
