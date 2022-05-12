import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'


// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { DetailsEventComponent } from './details-event/details-event.component';
import { RouterModule } from '@angular/router';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EspaceUserComponent } from './espace-user/espace-user.component';
 


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    DetailsEventComponent,
    MynavbarComponent,
    EspaceUserComponent,
   
  
    
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,                                   
    RouterModule,
    BsDatepickerModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: DateAdapter,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
