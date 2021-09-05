import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { DefaultService } from 'src/app/layout/default.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  chart = [];

  constructor(private data: DefaultService) { }

  ngOnInit() {
    this.data.getTableData().subscribe((res: any[]) => {
      let labels = res.map((x: { employee: string; }) => x.employee);
      let values = res.map((x: { salary: number; }) => x.salary);
      
      var ctx = document.getElementById('radarChart') as HTMLCanvasElement;
      var barChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [
            { 
              label: 'Employee Salary',
              data: values,
              backgroundColor: ["red"],
              borderColor: ["blue"],
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }, 
          animation: {
            // easing: "easeInSine", 
            duration: 2000
          }
        }
      });
      
    })
  }
}