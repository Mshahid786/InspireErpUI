import { UnitDetails } from './UnitDetails';
export interface UnitMaster {
        unitMasterUnitId?: number;
        unitMasterUnitShortName?: string;
        unitMasterUnitFullName?: string;
        unitMasterUnitDescription?: string;
        unitMasterUnitStatus?: boolean;
        unitMasterUnitDelStatus?: boolean;
        unitDetails?: UnitDetails[];
    }

