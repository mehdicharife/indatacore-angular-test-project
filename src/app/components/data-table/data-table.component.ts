import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Dataset } from '../../interfaces/dataset';




@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, FormsModule, ToastModule, ButtonModule, CommonModule, ToolbarModule, DialogModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  observations : Array<any> = [];
  labels : Array<string> = [];
  labelPercentage : string = "";
  isRowCreationFormVisible : boolean = false;
  newRowFormFields : Array<string> = [];

  constructor(private httpClient : HttpClient, private formBuilder : FormBuilder) {}
  
  ngOnInit(): void {
      this.httpClient.get<Array<any>>("http://localhost:8089/datasets/")
      .subscribe({
        next : value => {
          this.observations = value;
        },
        error : err => console.log(err)
      })

      this.httpClient.get<Array<string>>("http://localhost:8089/labels/")
      .subscribe({
        next : value => {
          this.labels = value;
          this.labelPercentage = "" + 100/(this.labels.length + 1) + "%"; 
        },
        error : err => console.log(err)
      })
  }

  onRowEditCancel(_t19: any,_t16: any) {
    throw new Error('Method not implemented.');
  }

  onRowEditSave(row: any) {
    
    this.httpClient.put<any>(`http://localhost:8089/datasets/${row.id}`, {
      "id" : row.id,
      "label" : row.label,
      "data" : row.data
    }).subscribe({

    });
  }

  onRowEditInit(_t19: any) {
    throw new Error('Method not implemented.');
  }

  showDialog() {
    this.isRowCreationFormVisible = true;
    console.log(this.isRowCreationFormVisible);
  }

  saveRow() {
    let dataset : Dataset = {
      label: this.newRowFormFields[0],
      data : Array.from(this.newRowFormFields.slice(1), Number),
    };

    this.httpClient.post<Dataset>("http://localhost:8089/datasets/", dataset).subscribe({
      next : dataset => this.observations.push(dataset),
      error : err => console.log(err)
    })
    
  }




  

}
