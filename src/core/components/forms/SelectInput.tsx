import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormErrorMessage } from './FormErrorMessage';

interface SelectInputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    values: Array<{ label: string; value: any; origin: any }>;
}

export const SelectInput: React.FC<SelectInputProps> = ({ name, label, values, defaultValue }) => {
    const { register, setValue } = useFormContext();

    React.useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue);
        } else if (values && values.length) {
            setValue(name, values[0].value);
        }
    }, []);

    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={name}
                {...register(name)}
                className="block w-full duration-200 border-gray-300 rounded-sm shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
                {values.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>

            <FormErrorMessage className="text-sm text-red-500" name={name} label={label} />
        </div>
    );
};
