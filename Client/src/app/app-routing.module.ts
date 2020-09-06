import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service'
import { LoggedInAuthGuardService } from './services/logged-in-auth-guard.service'

import { HomeComponent } from 'src/app/components/home/home.component'
import { ImportExcelComponent } from 'src/app/components/import-excel/import-excel.component';
import { ManageCompanyComponent } from 'src/app/components/manage-company/manage-company.component';
import { ManageStockExchangeComponent } from 'src/app/components/manage-stock-exchange/manage-stock-exchange.component';
import { ManageIpoComponent } from 'src/app/components/manage-ipo/manage-ipo.component';
import { CreateCompanyComponent } from 'src/app/components/create-company/create-company.component';
import { ComparisonComponent } from 'src/app/components/comparison/comparison.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { LogoutComponent } from 'src/app/components/logout/logout.component'


const routes: Routes = [
  {path:'', component:HomeComponent, canActivate:[AuthGaurdService]},
  {path:'import', component:ImportExcelComponent, canActivate:[AuthGaurdService]},
  {path:'company', component:ManageCompanyComponent, canActivate:[AuthGaurdService]},
  {path:'stockexchange', component:ManageStockExchangeComponent, canActivate:[AuthGaurdService]},
  {path:'ipo', component:ManageIpoComponent, canActivate:[AuthGaurdService]},
  {path:'createcompany', component:CreateCompanyComponent, canActivate:[AuthGaurdService]},
  {path:'compare', component:ComparisonComponent, canActivate:[AuthGaurdService]},
  {path:'login', component:LoginComponent, canActivate:[LoggedInAuthGuardService]},
  {path:'register', component:SignupComponent, canActivate:[LoggedInAuthGuardService]},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
