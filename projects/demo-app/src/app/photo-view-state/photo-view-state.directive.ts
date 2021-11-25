import {ChangeDetectorRef, Directive, ElementRef, HostBinding, Inject, Input, OnInit} from '@angular/core';
import {SCROLL_CONTAINER_INTERSECTION_OBSERVER_TOKEN} from '../shared/scroll-container.token';
import {Photo} from '../models/photo';
import {Store} from '@ngrx/store';
import {PhotoState} from '../photo-state/photo.reducer';
import {updatePhotoViewed} from '../photo-state/photo.actions';

@Directive({
  selector: 'labs-photo'
})
export class PhotoViewStateDirective implements OnInit {
  @Input() photo?: Photo;
  @HostBinding('class.viewed')
  viewed = false;

  constructor(@Inject(SCROLL_CONTAINER_INTERSECTION_OBSERVER_TOKEN) private readonly scrollContainer: ElementRef,
              private readonly elementRef: ElementRef,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly store: Store<PhotoState>) {

  }


  ngOnInit(): void {
    const observer = new IntersectionObserver((data) => {
      const entry = data[0];
      this.viewed = entry.isIntersecting || entry.boundingClientRect.top < 0;
      this.store.dispatch(updatePhotoViewed({id: this.photo!.id, viewed: this.viewed}))
      this.changeDetectorRef.markForCheck();
    }, {
      root: this.scrollContainer.nativeElement,
      rootMargin: '0px',
      threshold: 0.01
    });

    observer.observe(this.elementRef.nativeElement);
  }

}
