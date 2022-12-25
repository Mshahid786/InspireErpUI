import { ItemMaster } from './ItemMaster';
import { PriceLevelMaster } from './PriceLevelMaster';
export interface ItemPriceLevelDetails { 
        itemPriceLevelId?: number;
        itemId?: number;
        levelId?: number;
        levelRate?: number;
        levelAmt?: number;
        unitId?: number;
        item?: ItemMaster;
        level?: PriceLevelMaster;
    }
