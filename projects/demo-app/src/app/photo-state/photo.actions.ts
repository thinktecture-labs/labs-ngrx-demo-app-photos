import {createAction, props} from '@ngrx/store';


export const loadPhotosCount = createAction('[Photo/API] Load Photos Count');
export const loadPhotosCountSuccess = createAction(
  '[Photo/API] Load Photos Count Success',
  props<{ photoCount: number }>()
);

export const updateViewProgress = createAction('[Photo] Update View Progress',
  props<{ viewProgress: number }>())
export const updatePhotoViewed = createAction('[Photo] Update Photo Viewed',
  props<{ id: string, viewed: boolean }>())
