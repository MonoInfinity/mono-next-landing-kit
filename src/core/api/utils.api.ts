import { http } from '.';
import _get from 'lodash.get';

export const utilsApi = {
    v1PostAwsImage: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        const res = await http.post<string>('/utils/aws/image', formData);
        return _get(res, 'data', '');
    }
};
