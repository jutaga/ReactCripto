import React from 'react'
import { PurpleMoney } from '../interfaces/RespPrecio.type'

interface CotizacionProp {
    resultado: PurpleMoney | {
        PRICE: number;
        HIGHDAY: string;
        LOWDAY: string;
        CHANGEPCT24HOUR: string;
        LASTUPDATE: string;
    }
}

export const Cotizacion = ({ resultado }: CotizacionProp) => {

    if (Object.keys(resultado).length === 0) return null;
    return (
        <div className='ms-5 text-white my-3 p-3 w-100 rounded-3'>
            <p>El precio es: <span className='fw-bold'>{resultado.PRICE}</span></p>
            <p>El precio mas alto del dia es: <span className='fw-bold'>{resultado.HIGHDAY}</span></p>
            <p>El precio mas bajo del dia es: <span className='fw-bold'>{resultado.LOWDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span className='fw-bold'>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima Actualizacion <span className='fw-bold'>{resultado.LASTUPDATE}</span></p>
        </div>
    )
}
