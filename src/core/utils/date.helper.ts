import moment from 'moment';
import 'moment/locale/vi';

export const getDateFormat = (date: Date) => {
    date.setHours(0);
    return date;
};

export const dateFormat = (date: string) => {
    return moment(date).locale('vi').format('LLL');
};
