import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Photo} from '../models/photo';


@Injectable({providedIn: 'root'})
export class PhotoService {
  loadAll(): Observable<Photo[]> {
    return of(new Array(15).map((_, index) => {
      const i = index + 1;
      return ({
        title: `${i} Title`,
        subTitle: `${i} subTitle`,
        description: `${i} Description`,
        avatarUrl: 'https://www.gravatar.com/avatar/bdf3dd08b9c2a5f3792dd103a192a765?s=400',
        url: `https://github.com/konstantindenerz/photos/raw/main/photo${i}.jpg`,
      })
    })).pipe(delay(1000));
  }
}
