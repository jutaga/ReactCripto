import { Datum } from "../interfaces/RespCriptos.type"

interface SelectsApiProp {
    valores: Datum[],
    optionCero: string,
    onSelectChange: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectsApi = ({ valores, optionCero, onSelectChange }: SelectsApiProp) => {
    return (
        <select onChange={onSelectChange} defaultValue={''} className="form-select ms-5 mb-3">
            <option value={''} disabled>{optionCero}</option>
            {
                valores.map((moneda: Datum) =>(
                    <option value={moneda.CoinInfo.Name} key={moneda.CoinInfo.Id}>{moneda.CoinInfo.FullName} - {moneda.CoinInfo.Name}</option>
                ) )
            }

        </select>
    )
}
