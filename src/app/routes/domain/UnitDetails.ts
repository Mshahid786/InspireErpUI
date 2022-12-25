import { ItemMaster } from './ItemMaster';
import { UnitMaster } from './UnitMaster';
export interface UnitDetails { 
        unitDetailsId?: number;
        unitDetailsItemId?: number;
        unitDetailsUnitId?: number;
        unitDetailsConversionType?: number;
        unitDetailsRate?: number;
        unitDetailsWrate?: number;
        unitDetailsDefUnit?: boolean;
        unitDetailsDefWunit?: boolean;
        unitDetailsHeight?: number;
        unitDetailsWidth?: number;
        unitDetailsReorder?: number;
        unitDetailsDelStatus?: boolean;
        unitDetailsItem?: ItemMaster;
        unitDetailsUnit?: UnitMaster;
    }

