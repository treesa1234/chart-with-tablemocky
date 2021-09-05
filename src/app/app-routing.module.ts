import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultComponent } from './layout/default/default.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: '', component: RadarChartComponent },
    { path: 'charts/radar-chart', component: RadarChartComponent}, 
  { path: 'tables/table', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }