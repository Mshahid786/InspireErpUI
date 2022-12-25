import { ItemPriceLevelDetails } from './ItemPriceLevelDetails';

export interface PriceLevelMaster { 
        priceLevelMasterPriceLevelId?: number;
        priceLevelMasterPriceLevelName?: string;
        priveLevelMasterPriceLevelDelStatus?: boolean;
        itemPriceLevelDetails?: ItemPriceLevelDetails[];
    }
