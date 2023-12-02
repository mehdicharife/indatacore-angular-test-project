import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, FormsModule, ToastModule, ButtonModule, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  observations : Array<any> = [];
  labels : Array<string> = [];
  labelPercentage : string = "";

  constructor(private httpClient : HttpClient) {}
  
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



  

}
