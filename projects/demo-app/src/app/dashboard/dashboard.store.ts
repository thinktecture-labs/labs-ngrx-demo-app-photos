import {ComponentStore} from '@ngrx/component-store';
import {Photo} from '../models/photo';
import {Observable, switchMap, tap} from 'rxjs';
import {PhotoService} from '../shared/photo.service';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

export interface DashboardState {
  photos: Photo[]
}

@Injectable()
export class DashboardStore extends ComponentStore<DashboardState> {
  readonly load = this.effect((loadAll$: Observable<void>) =>
    loadAll$.pipe(
      switchMap(() => this.photoService.load(0, 13)),
      tap(photos => {
        this.patchState({photos});
      }),
    ));

  readonly photos$ = this.select(this.state$, ({photos}) => {
    return [...photos]
  });

  constructor(private readonly photoService: PhotoService, private readonly store: Store) {
    super({photos: []});
  }
}
