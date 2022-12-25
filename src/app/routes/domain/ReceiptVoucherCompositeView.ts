import { ReceiptVoucher } from './ReceiptVoucher';
import { ReceiptVoucherDetails } from './ReceiptVoucherDetails';

export interface ReceiptVoucherCompositeView
{
   ReceiptVoucherMasterViewModel?: ReceiptVoucher;
   ReceiptVoucherDetails?: ReceiptVoucherDetails[];
}