import { Wallet } from './wallet';

export interface Transaction {
    transactionId: string;
    amount: number;
    type: string;
    status: string;
    createAt: string;
    updateAt: string;
    note: string;
    senderWalletId: string;
    senderWallet: Wallet;
    receiverWalletId: string;
    receiverWallet: Wallet;
}
