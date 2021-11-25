import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {PhotoModule} from '../photo/photo.module';
import {PhotoViewStateModule} from '../photo-view-state/photo-view-state.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    PhotoModule,
    PhotoViewStateModule,
  ]
})
export class DashboardModule {
}
