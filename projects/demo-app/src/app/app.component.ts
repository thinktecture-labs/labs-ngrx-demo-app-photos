import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {PhotoState} from './photo-state/photo.reducer';
import {selectPhotoCount, selectViewProgress} from './photo-state/photo.selectors';
import {SCROLL_CONTAINER_PROVIDER} from './shared/scroll-container.token';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SCROLL_CONTAINER_PROVIDER
  ]
})
export class AppComponent {
  count$ = this.store.select(selectPhotoCount);
  viewProgress$ = this.store.select(selectViewProgress).pipe(debounceTime(100));

  constructor(private readonly store: Store<PhotoState>) {
  }
}
