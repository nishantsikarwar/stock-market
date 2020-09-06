import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormUploaderService } from './services/form-uploader.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportExcelComponent } from './components/import-excel/import-excel.component';
import { ManageCompanyComponent } from './components/manage-company/manage-company.component';
import { ManageIpoComponent } from './components/manage-ipo/manage-ipo.component';
import { ManageStockExchangeComponent } from './components/manage-stock-exchange/manage-stock-exchange.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    ManageCompanyComponent,
    ManageIpoComponent,
    ManageStockExchangeComponent,
    CreateCompanyComponent,
    ComparisonComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    LogoutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [FormUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
