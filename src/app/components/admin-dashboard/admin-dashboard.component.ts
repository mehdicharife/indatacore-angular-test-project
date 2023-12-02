import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Dataset } from '../../interfaces/dataset';
import { RandomColorGeneratorService } from '../../services/random-color-generator.service';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from '../../services/dataset.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  dataSets : Array<Dataset> = [];
  labels: Array<string> = ["ha", "ho", "hi", "hz"];
  chartJsData : any = {};
  chartJsOptions : any = {};

  constructor(private randomColorGeneratorService : RandomColorGeneratorService, private datasetService : DatasetService) {}

  ngOnInit(): void {
      this.datasetService.getDatasets().subscribe({
        next : datasets => {
          this.dataSets = datasets;
          this.setChartJSData();
          this.setChartJSOptions();
        },
        error : err => console.log(err)
      });

  }

  setChartJSData() : any {
    let data : {[k: string]: any} = {};
    data['datasets'] = this.dataSets.map(
      dataset => ({...dataset, backgroundColor: this.randomColorGeneratorService.getRandomColor()})
    );
    data['labels'] = this.labels;

    this.chartJsData = data;
  }

  setChartJSOptions() : any {
    let options = { 
      plugins: { 
          legend: { 
              labels: { 
                  color: "#black"
              } 
          } 
      },

      responsive: true,
      scales: { 
          x: { 
              stacked: true, 
              ticks: { 
                  color: "#black"
              }, 
              grid: { 
                  color: "rgba(255,255,255,0.2)"
              } 
          }, 
          y: { 
              stacked: true, 
              ticks: { 
                  color: "#black"
              }, 
              grid: { 
                  color: "rgba(255,255,255,0.2)"
              } 
          } 
      } 
    };
    
    this.chartJsOptions = options;
  }
}
