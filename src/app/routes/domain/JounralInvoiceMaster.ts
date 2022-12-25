import { AccountsTransactions } from './AccountsTransactions';
import { JournalInvoiceDetails } from './JournalInvoiceDetails';

export interface JournalInvoiceMaster {
        journalInvoiceMasterId?:number;
        journalInvoiceMasterNo?: string;
        journalInvoiceMasterSupplierId?: number;
        journalInvoiceMasterDate?: Date;
        journalInvoiceMasterNarration?: string;
        journalInvoiceMasterRefNo?: string;
        journalInvoiceMasterCurrencyId?: number;
        journalInvoiceMasterDelStatus?: boolean;
        accountsTransactions?: AccountsTransactions[];
        JournalInvoiceDetails?: JournalInvoiceDetails[];
}