import * as React from 'react';

interface FormBtnProps {
    label: string;
    className?: string;
    disabled?: boolean;
}

export const FormBtn: React.FC<FormBtnProps> = ({ label, disabled = false, className }) => {
    return (
        <button
            className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2  ${className}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
