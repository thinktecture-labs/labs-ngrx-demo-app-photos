import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Photo} from '../models/photo';

const MOCK_DATA = new Array(42).fill(0).map((_, index) => {
  const id = index + 1;
  return ({
    id: `${id}`,
    title: `${id} Title`,
    subTitle: `${id} subTitle`,
    description: `${id} Description`,
    avatarUrl: 'https://www.gravatar.com/avatar/bdf3dd08b9c2a5f3792dd103a192a765?s=400',
    url: `https://github.com/konstantindenerz/photos/raw/main/small/photo${id}.jpg`,
  } as Photo)
});


@Injectable({providedIn: 'root'})
export class PhotoService {
  load(index: number, count: number): Observable<Photo[]> {
    return of(MOCK_DATA.splice(index * count, count));
  }

  loadPhotoCount(): Observable<number> {
    return of(MOCK_DATA.length);
  }
}
