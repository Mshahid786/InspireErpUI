import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoadingComponent } from './component/loading/loading.component';
import { LoadingService } from './service/loading.service';
import { SettingsService } from './service/settings.service';
import { LocalStorageService } from './service/storage.service';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { PrimeModuleModule } from './module/prime-module/prime-module.module';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { PAddRowDirective } from './directive/p-add-row.directive';
import { TranslateModule } from '@ngx-translate/core';
import { UseUtcDirective } from './directive/use-utc.directive';

const COMPONENTS = [ LoadingComponent, PageHeaderComponent];
@NgModule({
  declarations: [...COMPONENTS, PageHeaderComponent, PAddRowDirective, UseUtcDirective],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    TranslateModule,
    OverlayPanelModule,
    PrimeModuleModule
  ],
  providers: [LoadingService, SettingsService, LocalStorageService],
  exports: [...COMPONENTS, PAddRowDirective, UseUtcDirective]
})
export class SharedModule { }
