import { AccountsTransactions } from './AccountsTransactions';
import { ReceiptVoucherDetails } from './ReceiptVoucherDetails';

export interface ReceiptVoucher {
receiptVoucherMasterSno?:number;
receiptVoucherMasterVoucherNo?:string;
receiptVoucherMasterVoucherDate?:Date;
receiptVoucherMasterVoucherType?:string;
receiptVoucherMasterDrAcNo?:string;
receiptVoucherMasterDrAmount?:number;
receiptVoucherMasterFcDrAmount?:number;
receiptVoucherMasterCrAmount?:number;
receiptVoucherMasterFcCrAmount?:number;
receiptVoucherMasterNarration?:string;
receiptVoucherMasterFsno?:number;
receiptVoucherMasterUserId?:number;
receiptVoucherMasterRefNo?:string;
receiptVoucherMasterAllocId?:number;
receiptVoucherMasterCurrencyId?:number;
accountsTransactions?: AccountsTransactions[];
receiptVoucherDetails?: ReceiptVoucherDetails[];
receiptVoucherMasterDelStatus?: boolean;
}
