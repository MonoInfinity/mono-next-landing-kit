import { http } from '.';
import { Transaction } from '../models/transaction';
import _get from 'lodash.get';

export interface IV1TransactionDeposit extends Pick<Transaction, 'amount'> {
    redirectUrl: string;
}
export interface IV1TransactionWithdraw extends Pick<Transaction, 'amount'> {
    phoneNumber: string;
}

export const transactionApi = {
    v1PostDeposit: async (input: IV1TransactionDeposit) => {
        const res = await http.post('/transactions/deposit', input);
        return _get(res, 'data', '');
    },
    v1PostWithdraw: async (input: IV1TransactionWithdraw) => {
        const res = await http.post('/transactions/withdraw', input);
        return res;
    }
};
