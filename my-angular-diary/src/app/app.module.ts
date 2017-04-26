import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HomeModule} from './home/home.module';
import {MyHomeComponent} from './home/my-home/my-home.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule }   from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
