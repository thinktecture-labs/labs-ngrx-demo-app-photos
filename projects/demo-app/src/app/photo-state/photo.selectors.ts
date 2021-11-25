import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PhotoState} from './photo.reducer';

export const PHOTO_STATE = 'photo';

export const selectPhotoState = createFeatureSelector<PhotoState>(PHOTO_STATE)
export const selectPhotoCount = createSelector(selectPhotoState, ({photoCount}) => photoCount);
export const selectViewProgress = createSelector(selectPhotoState, ({viewedMap, photoCount}) => {
  return Object.values(viewedMap).filter(value => value).length / photoCount * 100
});
