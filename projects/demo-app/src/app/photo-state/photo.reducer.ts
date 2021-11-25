import {createReducer, on} from '@ngrx/store';
import {loadPhotosCountSuccess, updatePhotoViewed, updateViewProgress} from './photo.actions';

export interface PhotoState {
  photoCount: number,
  viewProgress: number
  viewedMap: { [key: string]: boolean }
}

export const initialPhotoState: PhotoState = {
  photoCount: 0,
  viewProgress: 0,
  viewedMap: {}
}

export const photoReducer = createReducer(
  initialPhotoState,
  on(loadPhotosCountSuccess, (state, {photoCount}) => {
    return {...state, photoCount}
  }),
  on(updateViewProgress, (state, {viewProgress}) => {
    return {...state, viewProgress}
  }),
  on(updatePhotoViewed, (state, {id, viewed}) => {
    return {...state, viewedMap: {...state.viewedMap, [id]: viewed}}
  })
)

