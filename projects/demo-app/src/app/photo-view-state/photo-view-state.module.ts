import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotoViewStateDirective} from './photo-view-state.directive';

@NgModule({
  declarations: [
    PhotoViewStateDirective
  ],
  exports: [
    PhotoViewStateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoViewStateModule {
}
