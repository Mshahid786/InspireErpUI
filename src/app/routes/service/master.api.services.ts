import { CustomerMaster } from './../domain/CustomerMaster';
import { SalesManMaster } from './../domain/SalesManMaster';
import { LocationMaster } from './../domain/LocationMaster';
import { IWorkGroup } from './../domain/IWorkGroup';
import { IUser } from './../domain/IUser';
import { BusinessTypeMaster } from './../domain/BusinessTypeMaster';
import { ProjectDescriptionMaster } from './../domain/ProjectDescriptionMaster';
import { BudgetMaster, CityMaster, CountryMaster, SupplierMaster, DepartmentMaster} from 'src/app/routes/domain';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyMaster, ItemMaster } from '../domain';
import { MasterUrls,UserUrls,WorkGroupUrls } from './url.api';
import { environment } from 'src/environments/environment';
import { TreeNode } from 'primeng/api/treenode';
import { JobMaster } from '../domain/JobMaster';
import { CostCenterMaster } from '../domain/CostCenterMaster';
import { ApiResponse } from '../domain/ApiResponse';
import { VendorMaster } from '../domain/VendorMaster';
import { ItemStockType } from '../domain/ItemStockType';
import { ItemSupplierDetails } from '../domain/ItemSupplierDetails';
import { UnitMaster } from '../domain/UnitMaster';
import { PriceLevelMaster } from '../domain/PriceLevelMaster';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
@Injectable({
    providedIn: 'root'
  })
  export class MasterApiService {
    baseUrl: string = environment.apiRootURL;
    constructor(private httpClient: HttpClient) { }

    public GetAllCurrency() {
      return this.httpClient.get<CurrencyMaster[]>(this.baseUrl + MasterUrls.GetAllCurrency);
    }

    public GetAllJob() {
      return this.httpClient.get<JobMaster[]>(this.baseUrl + MasterUrls.GetAllJob);
    }

    public GetAllCostCenter() {
      return this.httpClient.get<CostCenterMaster[]>(this.baseUrl + MasterUrls.GetAllCostCenter);
    }
    // Save general Consent pdf  Data
    public InsertCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.InsertCurrency, data, httpOptions);
    }

    public UpdateCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.UpdateCurrency, data, httpOptions);
    }

    public DeleteCurrency(data: CurrencyMaster) {
      return this.httpClient.post<CurrencyMaster[]>(this.baseUrl + MasterUrls.DeleteCurrency, data, httpOptions);
    }

    public getItemTreeNode() {
      return this.httpClient.get('assets/demo/data/files.json')
                  .toPromise()
                  .then((res: {data: any}) => res.data as TreeNode[]);
  }

    public getItemsParentTreeNode() {
      return this.httpClient.get<ApiResponse<ItemMaster[]>>(this.baseUrl + MasterUrls.GetAllItem);
  }

  public GetAllItemByName(data) {
    return this.httpClient.get<ApiResponse<ItemMaster[]>>(this.baseUrl + MasterUrls.GetAllItemByName + '/' + data );
  }
    public GetAllUnit() {
      return this.httpClient.get<UnitMaster[]>(this.baseUrl + MasterUrls.GetAllUnit);
    }
    public GetAllPriceLevel() {
      return this.httpClient.get<PriceLevelMaster[]>(this.baseUrl + MasterUrls.GetAllPriceLevel);
    }
    public getItemsChildrenByParentTreeNode(id: number) {
      return this.httpClient.get<ApiResponse<ItemMaster[]>>(this.baseUrl + MasterUrls.GetAllItemById + '/' + id );
    }

    public InsertItem(data: ItemMaster) {
      return this.httpClient.post<ApiResponse<ItemMaster[]>>(this.baseUrl + MasterUrls.InsertItem, data, httpOptions);
    }

    public GetAllBrand() {
      return this.httpClient.get<VendorMaster[]>(this.baseUrl + MasterUrls.GetAllBrand);
    }

    public GetAllItemStock() {
      return this.httpClient.get<ApiResponse<ItemStockType[]>>(this.baseUrl + MasterUrls.GetAllItemStockType);
    }

    public GetAllBudget() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<BudgetMaster[]>(this.baseUrl + MasterUrls.GetAllBudget);
    }
    // Save general Consent pdf  Data
    public InsertBudget(data: BudgetMaster) {
      return this.httpClient.post<BudgetMaster[]>(this.baseUrl + MasterUrls.InsertBudget, data, httpOptions);
    }

    public UpdateBudget(data: BudgetMaster) {
      return this.httpClient.post<BudgetMaster[]>(this.baseUrl + MasterUrls.UpdateBudget, data, httpOptions);
    }

    public DeleteBudget(data: BudgetMaster) {
      return this.httpClient.post<BudgetMaster[]>(this.baseUrl + MasterUrls.DeleteBudget, data, httpOptions);
    }



    public GetAllCity() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<CityMaster[]>(this.baseUrl + MasterUrls.GetAllCity);
    }
    // Save general Consent pdf  Data
    public InsertCity(data: CityMaster) {
      return this.httpClient.post<CityMaster[]>(this.baseUrl + MasterUrls.InsertCity, data, httpOptions);
    }

    public UpdateCity(data: CityMaster) {
      return this.httpClient.post<CityMaster[]>(this.baseUrl + MasterUrls.UpdateCity, data, httpOptions);
    }

    public DeleteCity(data: CityMaster) {
      return this.httpClient.post<CityMaster[]>(this.baseUrl + MasterUrls.DeleteCity, data, httpOptions);
    }

    public GetAllCountry() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<CountryMaster[]>(this.baseUrl + MasterUrls.GetAllCountry);
    }
    // Save general Consent pdf  Data
    public InsertCountry(data: CountryMaster) {
      return this.httpClient.post<CountryMaster[]>(this.baseUrl + MasterUrls.InsertCountry, data, httpOptions);
    }

    public UpdateCountry(data: CountryMaster) {
      return this.httpClient.post<CountryMaster[]>(this.baseUrl + MasterUrls.UpdateCountry, data, httpOptions);
    }

    public DeleteCountry(data: CountryMaster) {
      return this.httpClient.post<CountryMaster[]>(this.baseUrl + MasterUrls.DeleteCountry, data, httpOptions);
    }


    public GetAllLocation() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<LocationMaster[]>(this.baseUrl + MasterUrls.GetAllLocation);
    }
    // Save general Consent pdf  Data
    public InsertLocation(data: LocationMaster) {
      return this.httpClient.post<LocationMaster[]>(this.baseUrl + MasterUrls.InsertLocation, data, httpOptions);
    }

    public UpdateLocation(data: LocationMaster) {
      return this.httpClient.post<LocationMaster[]>(this.baseUrl + MasterUrls.UpdateLocation, data, httpOptions);
    }

    public DeleteLocation(data: LocationMaster) {
      return this.httpClient.post<LocationMaster[]>(this.baseUrl + MasterUrls.DeleteLocation, data, httpOptions);
    }


    public GetAllSalesman() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<SalesManMaster[]>(this.baseUrl + MasterUrls.GetAllSalesman);
    }
    // Save general Consent pdf  Data
    public InsertSalesman(data: SalesManMaster) {
      return this.httpClient.post<SalesManMaster[]>(this.baseUrl + MasterUrls.InsertSalesman, data, httpOptions);
    }

    public UpdateSalesman(data: SalesManMaster) {
      return this.httpClient.post<SalesManMaster[]>(this.baseUrl + MasterUrls.UpdateSalesman, data, httpOptions);
    }

    public DeleteSalesman(data: SalesManMaster) {
      return this.httpClient.post<SalesManMaster[]>(this.baseUrl + MasterUrls.DeleteSalesman, data, httpOptions);
    }


    public GetAllCustomer() {
      // let params = new HttpParams();  MasterUrls
      // params = params.append('PatFinEncounterID', encouter.PatFinEncounterID.toString());
      // { params: params }

      return this.httpClient.get<CustomerMaster[]>(this.baseUrl + MasterUrls.GetAllCustomer);
    }
    // Save general Consent pdf  Data
    public InsertCustomer(data: CustomerMaster) {
      return this.httpClient.post<CustomerMaster[]>(this.baseUrl + MasterUrls.InsertCustomer, data, httpOptions);
    }

    public UpdateCustomer(data: CustomerMaster) {
      return this.httpClient.post<CustomerMaster[]>(this.baseUrl + MasterUrls.UpdateCustomer, data, httpOptions);
    }

    public DeleteCustomer(data: CustomerMaster) {
      return this.httpClient.post<CustomerMaster[]>(this.baseUrl + MasterUrls.DeleteCustomer, data, httpOptions);
    }


    public GetAllSupplier() {

      return this.httpClient.get<SupplierMaster[]>(this.baseUrl + MasterUrls.GetAllSupplier);
    }

    public InsertSupplier(data: SupplierMaster) {
      return this.httpClient.post<SupplierMaster[]>(this.baseUrl + MasterUrls.InsertSupplier, data, httpOptions);
    }

    public UpdateSupplier(data: SupplierMaster) {
      return this.httpClient.post<SupplierMaster[]>(this.baseUrl + MasterUrls.UpdateSupplier, data, httpOptions);
    }

    public DeleteSupplier(data: SupplierMaster) {
      return this.httpClient.post<SupplierMaster[]>(this.baseUrl + MasterUrls.DeleteSupplier, data, httpOptions);
    }
    public GetSupplierDetailsByItemId(id: number) {
      return this.httpClient.get<ApiResponse<ItemSupplierDetails[]>>(this.baseUrl + MasterUrls.GetSupplierDetailsByItemId + '/' + id );
    }

    public GetAllProjectDesc() {
      return this.httpClient.get<ProjectDescriptionMaster[]>(this.baseUrl + MasterUrls.GetAllProjectDesc);
    }
    public InsertProjectDesc(data: ProjectDescriptionMaster) {
      return this.httpClient.post<ProjectDescriptionMaster[]>(this.baseUrl + MasterUrls.InsertProjectDesc, data, httpOptions);
    }

    public UpdateProjectDesc(data: ProjectDescriptionMaster) {
      return this.httpClient.post<ProjectDescriptionMaster[]>(this.baseUrl + MasterUrls.UpdateProjectDesc, data, httpOptions);
    }

    public DeleteProjectDesc(data: ProjectDescriptionMaster) {
      return this.httpClient.post<ProjectDescriptionMaster[]>(this.baseUrl + MasterUrls.DeleteProjectDesc, data, httpOptions);
    }


    public GetAllBusinessType() {
    
      return this.httpClient.get<BusinessTypeMaster[]>(this.baseUrl + MasterUrls.GetAllBusinessType);
    }

    public InsertBusinessType(data: BusinessTypeMaster) {
      return this.httpClient.post<BusinessTypeMaster[]>(this.baseUrl + MasterUrls.InsertBusinessType, data, httpOptions);
    }

    public UpdateBusinessType(data: BusinessTypeMaster) {
      return this.httpClient.post<BusinessTypeMaster[]>(this.baseUrl + MasterUrls.UpdateBusinessType, data, httpOptions);
    }

    public DeleteBusinessType(data: BusinessTypeMaster) {
      return this.httpClient.post<BusinessTypeMaster[]>(this.baseUrl + MasterUrls.DeleteBusinessType, data, httpOptions);
    }

    public GetAllUser() {
      return this.httpClient.get<IUser[]>(this.baseUrl +UserUrls.GetAllUser );
    }
    // Save general Consent pdf  Data
    public InsertUser(data: IUser) {
      return this.httpClient.post<IUser[]>(this.baseUrl + UserUrls.InsertUser, data, httpOptions);
    }

    public UpdateUser(data: IUser) {
      return this.httpClient.post<IUser[]>(this.baseUrl + UserUrls.UpdateUser, data, httpOptions);
    }

    public DeleteUser(data: IUser) {
      return this.httpClient.post<IUser[]>(this.baseUrl + UserUrls.DeleteUser, data, httpOptions);
    }
    public GetAllWorkGroup()
    {
      return this.httpClient.get<IWorkGroup[]>(this.baseUrl + WorkGroupUrls.GetAllWorkGroup );
    }

    public GetAllDepartment() {

      return this.httpClient.get<DepartmentMaster[]>(this.baseUrl + MasterUrls.GetAllDepartment);
    }
    public InsertDepartment(data: DepartmentMaster) {
     return this.httpClient.post<DepartmentMaster[]>(this.baseUrl + MasterUrls.InsertDepartment, data, httpOptions);
   }
 
   public UpdateDepartment(data: DepartmentMaster) {
   return this.httpClient.post<DepartmentMaster[]>(this.baseUrl + MasterUrls.UpdateDepartment, data, httpOptions);
   }
 
   public DeleteDepartment(data: DepartmentMaster) {
     return this.httpClient.post<DepartmentMaster[]>(this.baseUrl + MasterUrls.DeleteDepartment, data, httpOptions);
   }
 
  }
