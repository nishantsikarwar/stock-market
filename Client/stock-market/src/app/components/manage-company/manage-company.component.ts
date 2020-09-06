import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Company } from '../../Models/Company'

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  companies: Company[];

  constructor() { }

  isShow = false;
  editCompanyForm = new FormGroup({
    id: new FormControl(''),
    companyName: new FormControl(''),
    turnover: new FormControl(''),
    ceo: new FormControl(''),
    stockExchange: new FormControl(''),
    boardDirector: new FormControl(''),
    sector: new FormControl(''),
    writeup: new FormControl(''),
    companyCode: new FormControl('')
  });

  ngOnInit(): void {
    this.companies = [
      {
        id:1,
        name: "Societe Generale",
        description:"Good Company",
        ceo:"NoIdea"
      }
    ]
  }

  updateCompany() {
    // let userInput: any = {
    //   id: this.editCompanyForm.get('id').value,
    //   companyName: this.editCompanyForm.get('companyName').value,
    //   turnover: this.editCompanyForm.get('turnover').value,
    //   ceo: this.editCompanyForm.get('ceo').value,
    //   stockExchange: this.editCompanyForm.get('stockExchange').value,
    //   boardDirector: this.editCompanyForm.get('boardDirector').value,
    //   sector: this.editCompanyForm.get('sector').value,
    //   writeup: this.editCompanyForm.get('writeup').value,
    //   companyCode: this.editCompanyForm.get('companyCode').value
    // };
    // this.companyService.updateCompany(userInput).subscribe(
    //   resp => {
    //     if (resp === 'successful') {
    //       this.isShow = true;
    //     }
    //   });

  }

}
