import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormErrorMessage } from './FormErrorMessage';
import _clsx from 'clsx';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    isHiddenLabel?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ name, label, type = 'text', isHiddenLabel = false, ...rest }) => {
    const { register } = useFormContext();

    return (
        <div className="space-y-2">
            {!isHiddenLabel && (
                <label htmlFor={name} className="text-sm font-semibold text-gray-900">
                    {label}
                </label>
            )}

            <input
                {...register(name)}
                {...rest}
                type={type}
                className={_clsx(
                    'py-1 px-2 block w-full duration-200 border border-gray-300 rounded-sm shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-gray-800',
                    {
                        'bg-gray-200': rest.disabled,
                    }
                )}
            />
            <FormErrorMessage className="text-sm text-red-500" name={name} label={label} />
        </div>
    );
};
