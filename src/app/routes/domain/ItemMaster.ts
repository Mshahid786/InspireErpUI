import { ItemPriceLevelDetails } from './ItemPriceLevelDetails';
import { ItemSupplierDetails } from './ItemSupplierDetails';
import { UnitDetails } from './UnitDetails';

export interface ItemMaster { 
        itemMasterItemId?: number;
        itemMasterMaterialCode?: string;
        itemMasterAccountNo?: number;
        itemMasterItemName?: string;
        itemMasterItemType?: string;
        itemMasterBatchCode?: string;
        itemMasterVenderId?: number;
        itemMasterLocationId?: number;
        itemMasterReOrderLevel?: number;
        itemMasterUnitPrice?: number;
        itemMasterUnitPrice1?: number;
        itemMasterUnitPrice2?: number;
        itemMasterItemSize?: string;
        itemMasterPartNo?: string;
        itemMasterColor?: string;
        itemMasterPacking?: string;
        itemMasterWeight?: string;
        itemMasterShape?: string;
        itemMasterRef1?: string;
        itemMasterRef2?: string;
        itemMasterStockType?: boolean;
        itemMasterUnitId?: number;
        itemMasterAssetAcc?: string;
        itemMasterExpenseAcc?: string;
        itemMasterImage?: Blob;
        itemMasterActive?: boolean;
        itemMasterLastPurchasePrice?: number;
        itemMasterServices?: boolean;
        itemMasterSuplierCode?: string;
        itemMasterBarcode?: string;
        itemMasterAliasName?: string;
        itemMasterUserId?: number;
        itemMasterGroupDebitAcc?: string;
        itemMasterGroupCreditAcc?: string;
        itemMasterLandingCost?: number;
        itemMasterBaseValue?: number;
        itemMasterHeightN?: number;
        itemMasterWeightN?: number;
        itemMasterRackId?: number;
        itemMasterCurrentStock?: number;
        itemMasterStatus?: boolean;
        itemMasterAvgCostYel?: string;
        itemMasterVat?: number;
        itemMasterTypeId?: string;
        itemMasterModelId?: number;
        itemMasterVatPercentage?: number;
        itemMasterVatInclues?: boolean;
        itemMasterReorderCheck?: boolean;
        itemMasterDefaultLocationName?: string;
        itemMasterDefaultLocation?: number;
        itemMasterCountryId?: number;
        itemMasterPackageId?: string;
        itemMasterGenericName?: string;
        itemMasterSupplierName?: string;
        itemMasterManufactureName?: string;
        itemMasterRedeemRewardPoint?: number;
        itemMasterProPurchaseRate?: number;
        itemMasterProSaleRate?: number;
        itemMasterProMrp?: number;
        itemMasterDelStatus?: boolean;
        itemPriceLevelDetails?: ItemPriceLevelDetails[];
        itemSupplierDetails?: ItemSupplierDetails[];
        unitDetails?: UnitDetails[];
    }




 
