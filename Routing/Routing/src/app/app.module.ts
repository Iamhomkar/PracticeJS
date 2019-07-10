import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModuleComponent } from './first-module/first-module.component';
import { SecondModuleComponent } from './second-module/second-module.component';
import { ThirdModuleComponent } from './third-module/third-module.component';
import { FourthModuleComponent } from './fourth-module/fourth-module.component';
import { RouterModule, Routes } from '@angular/router';


var routes:Routes = [
  {path:'first',component:FirstModuleComponent},
  {path:'second',component:SecondModuleComponent},
  {path:'third',component:ThirdModuleComponent},
  {path:'fourth',component:FourthModuleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstModuleComponent,
    SecondModuleComponent,
    ThirdModuleComponent,
    FourthModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
