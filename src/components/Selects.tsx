import { useMoneda } from "../hooks/useMoneda";

interface PropsSelect {
    valores: {
        codigo: string;
        nombre: string;
    }[],
    onSelectChange: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void,
    optionCero: string;
}

export const Selects = ({ valores, onSelectChange, optionCero }: PropsSelect) => {

    return (
        <select onChange={onSelectChange} defaultValue={''} className="form-select ms-5 mb-3" >
            <option value={''} disabled>{optionCero}</option>
            {
                valores.map((opcion) => (
                    <option disabled={opcion.codigo === '' ? true : false} key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))
            }
        </select>
    )
}
