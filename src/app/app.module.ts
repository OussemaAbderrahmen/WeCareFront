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
import { DemoFlexyModule } from './demo-flexy-module'
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ToastrModule} from 'ngx-toastr';// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { PostComponent } from './components/forum/update-post/update-post.component';
import { AddPostComponent } from './components/forum/add-post/add-post.component';
import { ForumFrontComponent } from './forum-front/forum-front.component';
import { AddDictionaryComponent } from './components/forum/add-dictionary/add-dictionary.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    PostComponent,
    AddPostComponent,
    ForumFrontComponent,
    AddDictionaryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
