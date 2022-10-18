import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useStoreApi } from '../../store';
import { stringHelper } from '../../utils';

interface FormErrorMessageProps {
    name: string;
    className: string;
    label: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ name, label, className }) => {
    const { formState } = useFormContext();

    return (
        <>
            {Boolean(formState.errors[name]?.message) && (
                <div className={className}>
                    <>
                        {label} {formState.errors[name]?.message}
                    </>
                </div>
            )}
        </>
    );
};
