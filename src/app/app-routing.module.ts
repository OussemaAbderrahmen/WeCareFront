import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ChipsComponent } from './components/chips/chips.component';
import { EventComponent } from './components/event/event.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { MychartComponent } from './components/mychart/mychart.component';
import { MydashComponent } from './components/mydash/mydash.component';
import { MyalleventsComponent } from './components/myallevents/myallevents.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { BestUserComponent } from './components/best-user/best-user.component';
import { StatadminComponent } from './components/statadmin/statadmin.component';
import { RemindComponent } from './components/remind/remind.component';


const routes: Routes = [

  {path:"mydash",
  children:[
    {path:'', component:MydashComponent},
    {path:'myallevents',component:MyalleventsComponent},
    {path:'add',component:AddEventComponent},
    {path:'best',component:BestUserComponent},
    {path:'adstat',component:StatadminComponent},
    {path:'stat',component:MychartComponent},
    {path:'remind',component:RemindComponent}

  ] },
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/event", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"forms", component:FormsComponent},
      {path:"table", component:ProductComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"event", 
    children:[
      {path:'', component:EventComponent},
      {path:'stat',component:MychartComponent}

    ]},
      {path:"details-event/:id", component:DetailsEventComponent},
      {path:"espace-user", component:EspaceUserComponent},
      
    ]
  },

  {path:"", redirectTo:"/event", pathMatch:"full"},
  {path:"**", redirectTo:"/event", pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
