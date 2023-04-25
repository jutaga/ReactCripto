import { useState } from "react";

export const useCriptoMoneda = () => {

    const [criptoMoneda, setCriptoMoneda] = useState<string>('');

    const onSelectChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {

        const { value } = target;

        setCriptoMoneda(value);
    }

    return {
        criptoMoneda,
        onSelectChange
    }

}
