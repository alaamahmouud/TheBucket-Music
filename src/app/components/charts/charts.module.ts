import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { LayoutModule } from '../layout/layout.module';

const routes : Routes = [
  {path : 'chart' , component : ChartComponent}
]

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),LayoutModule
  ]
})
export class ChartsModule { }
