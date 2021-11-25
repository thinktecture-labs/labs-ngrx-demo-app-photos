import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoComponent} from './photo.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PhotoModule {
}
