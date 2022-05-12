import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { DashactualityComponent } from './components/dashactuality/dashactuality.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgChartsModule } from 'ng2-charts';
import { ActiveuserComponent } from './components/activeuser/activeuser.component';
import { WorstpubComponent } from './components/worstpub/worstpub.component';
import { BestpubComponent } from './components/bestpub/bestpub.component';







@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    DashactualityComponent,
    ActiveuserComponent,
    WorstpubComponent,
    BestpubComponent, 
 
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
     MatInputModule, 
     MatButtonModule, 
     MatCardModule, 
     MatFormFieldModule,
     Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
