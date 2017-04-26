import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from './my-home/my-home.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [MyHomeComponent, HomeComponent],
  entryComponents: [MyHomeComponent, HomeComponent]
})
export class HomeModule { }
