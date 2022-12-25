import { AccountsTransactions } from './AccountsTransactions';
import { PaymentVoucherDetails } from './PaymentVoucherDetails';

 
export interface PaymentVoucher { 
        paymentVoucherSno?: number;
        paymentVoucherVoucherNo?: string;
        paymentVoucherDate?: Date;
        paymentVoucherVoucherRef?: string;
        paymentVoucherCrAcNo?: string;
        paymentVoucherCrAmount?: number;
        paymentVoucherFcCrAmount?: number;
        paymentVoucherDbAmount?: number;
        paymentVoucherFcDbAmount?: number;
        paymentVoucherNarration?: string;
        paymentVoucherFsno?: number;
        paymentVoucherUserId?: number;
        paymentVoucherCurrencyId?: number;
        paymentVoucherCurrencyName?: string;
        paymentVoucherLocationId?: number;
        paymentVoucherAllocationId?: number;
        accountsTransactions?: AccountsTransactions[];
        paymentVoucherDetails?: PaymentVoucherDetails[];
        paymentVoucherDelStatus?: boolean;
    }


