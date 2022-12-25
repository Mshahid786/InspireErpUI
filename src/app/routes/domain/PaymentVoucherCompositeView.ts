import { PaymentVoucher } from './PaymentVoucher';
import { PaymentVoucherDetails } from './PaymentVoucherDetails';


export interface PaymentVoucherCompositeView
{
   paymentVoucher?: PaymentVoucher;
   paymentVoucherDetails?: PaymentVoucherDetails[];
}
