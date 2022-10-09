import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { vehicleTypesApi } from '../api';

export enum SelectOption {
    VEHICLE_TYPE,
}

export const useSelectOption = (option: SelectOption) => {
    const [options, setOptions] = React.useState<{ label: string; value: string; origin: any }[]>([]);
    const vehicleTypes = useQuery(['vehicleTypes'], () => {
        return vehicleTypesApi.v1Get({ pageSize: 1000, pageNumber: 0 });
    });

    const _handleOnGetOptions = React.useCallback(
        (option: SelectOption) => {
            switch (option) {
                case SelectOption.VEHICLE_TYPE:
                    const options = vehicleTypes.data?.data.map((item) => ({ label: item.name, value: item.vehicleTypeId, origin: item })) || [];
                    setOptions(options);
                    break;
            }
        },
        [vehicleTypes.data?.data]
    );

    React.useEffect(() => {
        _handleOnGetOptions(option);
    }, [option, _handleOnGetOptions]);

    return options;
};
