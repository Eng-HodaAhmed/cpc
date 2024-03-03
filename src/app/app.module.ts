import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { DepositsComponent } from './deposits/deposits.component';
import { RouterModule } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { IonicModule } from '@ionic/angular';

const Routes=[
  {path:'',component:AdminHomePageComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'deposits',component:DepositsComponent},
  {path:'settings',component:SettingsComponent},
  {path:'reports',component:ReportsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    DepositsComponent,
    AdminHomePageComponent,
    SettingsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes,{useHash:true}),
    IonicModule.forRoot()
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
