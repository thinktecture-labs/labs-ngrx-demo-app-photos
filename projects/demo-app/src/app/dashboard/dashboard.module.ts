import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {PhotoModule} from '../photo/photo.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    PhotoModule,
  ]
})
export class DashboardModule {
}
