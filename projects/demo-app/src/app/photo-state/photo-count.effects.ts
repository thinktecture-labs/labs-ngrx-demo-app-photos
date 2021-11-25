import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {PhotoService} from '../shared/photo.service';
import {loadPhotosCount, loadPhotosCountSuccess} from './photo.actions';
import {map, switchMap} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class PhotoCountEffects implements OnInitEffects {
  readonly photosCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotosCount),
      switchMap(() => this.photoService.loadPhotoCount()),
      map(photoCount => loadPhotosCountSuccess({photoCount})),
    )
  );

  constructor(private readonly actions$: Actions,
              private readonly photoService: PhotoService) {
  }

  ngrxOnInitEffects(): Action {
    return loadPhotosCount();
  }
}
