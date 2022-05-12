import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CagnotteaddComponent } from './components/cagnottes/cagnotteadd/cagnotteadd.component';
import { CagnottesComponent } from './components/cagnottes/cagnottes.component';
import { CagnotteupdateComponent } from './components/cagnottes/cagnotteupdate/cagnotteupdate.component';
import { RetrievecagnotteComponent } from './components/cagnottes/retrievecagnotte/retrievecagnotte.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';

import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddNotificationComponent } from './components/notification/add-notification/add-notification.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotstatComponent } from './components/notification/notstat/notstat.component';
import { UpdateNotificationComponent } from './components/notification/update-notification/update-notification.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { AddPromoComponent } from './components/promotion/add-promo/add-promo.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { UpdatePromoComponent } from './components/promotion/update-promo/update-promo.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { RetrieveuserComponent } from './components/user/retrieveuser/retrieveuser.component';
import { UserComponent } from './components/user/user.component';
import { UserstatComponent } from './components/user/userstat/userstat.component';
import { UserupdateComponent } from './components/user/userupdate/userupdate.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ErrorconnectComponent } from './errorconnect/errorconnect.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",component:FullComponent,
    children: [
      {path:"", redirectTo:"/login", pathMatch:"full"},
      {path:"home", component:DashboardComponent, canActivate : [AuthGuard]
    },
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent, canActivate : [AuthGuard]
    },
      {path:"chips", component:ChipsComponent, canActivate : [AuthGuard]
    },
      {path:"progress", component:ProgressComponent, canActivate : [AuthGuard]
    },
      {path:"toolbar", component:ToolbarComponent, canActivate : [AuthGuard]
    },
      {path:"progress-snipper", component:ProgressSnipperComponent, canActivate : [AuthGuard]
    },
      {path:"snackbar", component:SnackbarComponent, canActivate : [AuthGuard]
    },
      {path:"slider", component:SliderComponent, canActivate : [AuthGuard]
    },
      {path:"slide-toggle", component:SlideToggleComponent, canActivate : [AuthGuard]
    },
      {path:"tooltip", component:TooltipsComponent, canActivate : [AuthGuard]
    },
      {path:"button", component:ButtonsComponent, canActivate : [AuthGuard]
    },
      {path:"user",component:UserComponent, canActivate : [AuthGuard]
    },
      {path:"userupdate/:id",component:UserupdateComponent, canActivate : [AuthGuard]
    },
      {path:"adduser",component:AdduserComponent, canActivate : [AuthGuard]
    },
      {path:"userstat",component:UserstatComponent, canActivate : [AuthGuard]
    } , 
      {path:"cagnotte",component:CagnottesComponent, canActivate : [AuthGuard]
    } , 
      {path:"cagnotteadd",component:CagnotteaddComponent, canActivate : [AuthGuard]
    } , 
      {path:"cagnotteupdate/:id",component:CagnotteupdateComponent, canActivate : [AuthGuard]
    } , 
      {path:"retrievecagnotte/:id",component:RetrievecagnotteComponent, canActivate : [AuthGuard]
    } , 
      {
        path:"retrieveuser/:id",component:RetrieveuserComponent, canActivate : [AuthGuard]

      },
      {path:"notification",component:NotificationComponent, canActivate : [AuthGuard]
    },
      {path:"addNotification",component:AddNotificationComponent, canActivate : [AuthGuard]
    },
      {path:"promotion",component:PromotionComponent, canActivate : [AuthGuard]
    },
      {path:"updateNotification/:id",component:UpdateNotificationComponent, canActivate : [AuthGuard]
    },
      
      {path:"addpromotion",component:AddPromoComponent, canActivate : [AuthGuard]
    },
      {path:"updatePromotion",component:UpdatePromoComponent, canActivate : [AuthGuard]
    },
      {path:"notstat",component:NotstatComponent, canActivate : [AuthGuard]
    },

     
    ]
  },
  {path:"errorconnect",component:ErrorconnectComponent},
  {path:"error",component:ErrorComponent, canActivate : [AuthGuard]
},
  {path:"home", component:FullComponent, canActivate : [AuthGuard]
},
  {path:"login",component:AuthComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
  {path:"login",redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
