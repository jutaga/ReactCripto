import { useEffect, useState } from "react";
import { useMoneda } from "../hooks/useMoneda"
import { Selects } from "./Selects"
import { Criptos, Datum } from "../interfaces/RespCriptos.type";
import axios from "axios";
import { SelectsApi } from "./SelectsApi";
import { useCriptoMoneda } from "../hooks/useCriptoMoneda";

const valores = [

    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'COP', nombre: 'Peso Colombiano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
]

interface FormProps {
    setMoneda: React.Dispatch<React.SetStateAction<string>>,
    setCriptoMoneda: React.Dispatch<React.SetStateAction<string>>,

}

export const Formulario = ({ setMoneda, setCriptoMoneda }: FormProps) => {

    //state del listado de criptomonedas
    const [listaCripto, setlistaCripto] = useState<Datum[]>([]);
    const [error, setError] = useState(false);

    const { moneda, onSelectChange } = useMoneda();

    const { criptoMoneda, onSelectChange: changeCripto } = useCriptoMoneda();

    //llamado a la api
    useEffect(() => {

        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

            const resultado = await axios.get<Criptos>(url);

            setlistaCripto(resultado.data.Data);

        }

        consultarApi();

    }, [])

    const cotizarMoneda = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Validar formulario
        if (moneda === '' || criptoMoneda === '') {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);

            return;

        }

        setMoneda(moneda);
        setCriptoMoneda(criptoMoneda);
    }


    return (
        <form onSubmit={cotizarMoneda}>
            {
                error && <div className="alert alert-info w-100 ms-5 text-center">Elecciones No Validas</div>
            }
            <label className="fw-bold text-light fs-3 ms-5" > Elige tu Moneda </label>
            <Selects optionCero='Seleccione una Moneda' valores={valores} onSelectChange={onSelectChange} />

            <label className="fw-bold text-light fs-3 ms-5" > Elige tu Criptomoneda </label>
            <SelectsApi valores={listaCripto} optionCero='Seleccione una Cripto' onSelectChange={changeCripto} />

            <button className="btn btn-primary ms-5 w-100" type="submit">
                <span className="fw-bold">Cotizar</span>
            </button>
        </form>
    )
}
