import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullComponent } from "./layouts/full/full.component";
import { FooterComponent } from "./components/footer/footer.component";

import { DemoFlexyModule } from "./demo-flexy-module";
import { MatSidenavModule } from "@angular/material/sidenav";
// Modules
import { DashboardModule } from "./dashboard/dashboard.module";
import { ComponentsModule } from "./components/components.module";
import { ComplaintsComponent } from "./components/complaints/complaints.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchfilterPipe } from "./searchfilter.pipe";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DataTablesModule } from "angular-datatables";
import { PieComponent } from "./components/pie/pie.component";
import { NgxPaginationModule } from "ngx-pagination";
import { MostComplainerComponent } from "./components/most-complainer/most-complainer.component";
import { MomentModule } from 'ngx-moment';
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ComplaintsComponent,
    SearchfilterPipe,
    PieComponent,
    MostComplainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule, // <-- Added Table Module
    MatPaginatorModule, // <-- Added Paginator Module
    MatProgressBarModule,
    DataTablesModule,
    NgxPaginationModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
