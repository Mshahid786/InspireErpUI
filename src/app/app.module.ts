import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// import {MatTableModule} from '@angular/material/table';
// import {MatPaginationModule} from '@angular/material/paginator';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MattInputModule} from '@angular/material/input';
// import {MatSelectModulo} from '@angular/material/select';
// import {MatButtonModule} from '@angular/material/button';
// import {MatDatepicker} from '@angular/material/MatDatepicker';
// import  {MatNativeDataModule} from '@angular/material/core';


// Application Components
import {AppComponent} from './app.component';
import { AppMenuComponent } from './layout/menu/component/app.menu.component';
import { AppMenuitemComponent } from './layout/menu/component/app.menuitem.component';
import { AppTopBarComponent } from './layout/topbar/app.topbar.component';
import { AppFooterComponent } from './layout/footer/app.footer.component';
import { MenuService } from './layout/menu/service/app.menu.service'; 
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { TranslaterComponent } from './layout/topbar/translater/translater.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PrimeModuleModule } from './shared/module/prime-module/prime-module.module';
import { MessageService, ConfirmationService } from 'primeng/api';

// Application services
export function TranslateHttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        PrimeModuleModule,
        RouterModule,
        RoutesModule,
        
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: TranslateHttpLoaderFactory,
              deps: [HttpClient],
            },
          }),
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        TranslaterComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService,
        MessageService,
        ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
