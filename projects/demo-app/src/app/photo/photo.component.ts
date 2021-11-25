import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Photo} from '../models/photo';

@Component({
  selector: 'labs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @Input() photo?: Photo;
}
