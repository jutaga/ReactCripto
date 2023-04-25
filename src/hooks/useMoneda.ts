import { useState } from "react"

export const useMoneda = () => {

    const [moneda, setMoneda] = useState<string>('');

    const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {

        const { value } = target;

        setMoneda(value);
    }

    return {
        moneda,
        onSelectChange
    }

}
