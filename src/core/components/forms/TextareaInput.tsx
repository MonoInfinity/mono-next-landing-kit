import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormErrorMessage } from './FormErrorMessage';

interface TextareaInputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    isHiddenLabel?: boolean;
}

export const TextareaField: React.FC<TextareaInputProps> = ({ name, label, isHiddenLabel = false, ...rest }) => {
    const { register } = useFormContext();

    return (
        <div className="space-y-2 ">
            {!isHiddenLabel && (
                <label htmlFor={name} className="text-sm font-semibold text-gray-100 dark:text-gray-900">
                    {label}
                </label>
            )}
            <textarea
                className="block w-full px-2 py-1 text-gray-800 duration-200 border-gray-300 rounded-sm shadow-sm outline-none dark:text-gray-200 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                {...register(name)}
                {...rest}
            ></textarea>
            <FormErrorMessage className="text-sm text-red-500" name={name} label={label} />
        </div>
    );
};
