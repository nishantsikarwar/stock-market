import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormUploaderService } from '../../services/form-uploader.service'

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {

  message: string = "Select file to be uploaded";
  userFile: File = null;
  constructor(private service: FormUploaderService) { }

  ngOnInit(): void {
  }

  onSelectFile(event){
    const file = event.target.files[0]
    this.message = file.name;
    console.log(file)
    this.userFile = file;
  }

  uploadFile(uploadForm: NgForm){
    const formData = new FormData();
    formData.append('file', this.userFile);
    this.service.uploadExcelFile(formData).subscribe(
      data=>{
        console.log(data);
      },
      error => {

      }
    )
  }
}
