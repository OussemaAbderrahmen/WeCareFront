import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { UserComponent } from './user/user.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserstatComponent } from './user/userstat/userstat.component';
import { CagnottesComponent } from './cagnottes/cagnottes.component';
import { CagnotteaddComponent } from './cagnottes/cagnotteadd/cagnotteadd.component';
import { CagnotteupdateComponent } from './cagnottes/cagnotteupdate/cagnotteupdate.component';
import { RetrievecagnotteComponent } from './cagnottes/retrievecagnotte/retrievecagnotte.component';
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RetrieveuserComponent } from './user/retrieveuser/retrieveuser.component';
import { NotificationComponent } from './notification/notification.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AddNotificationComponent } from './notification/add-notification/add-notification.component';
import { NotstatComponent } from './notification/notstat/notstat.component';
import { UpdateNotificationComponent } from './notification/update-notification/update-notification.component';
import { AddPromoComponent } from './promotion/add-promo/add-promo.component';
import { UpdatePromoComponent } from './promotion/update-promo/update-promo.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    TooltipsComponent,
    UserComponent,
    UserupdateComponent,
    AdduserComponent,
    UserstatComponent,
    CagnottesComponent,
    CagnotteaddComponent,
    CagnotteupdateComponent,
    RetrievecagnotteComponent,
    RetrieveuserComponent,
    NotificationComponent,
    PromotionComponent,
    AddNotificationComponent,
    NotstatComponent,
    UpdateNotificationComponent,
    AddPromoComponent,
    UpdatePromoComponent
  
    
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule,
    ChartistModule,
    NgApexchartsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  
  ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent
  ]
})
export class ComponentsModule { }
