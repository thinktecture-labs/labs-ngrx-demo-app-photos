import {ElementRef, InjectFlags, InjectionToken, Injector, StaticProvider} from '@angular/core';

export const SCROLL_CONTAINER_INTERSECTION_OBSERVER_TOKEN = new InjectionToken<{ elementRef: ElementRef }>('to access scroll container');

export const SCROLL_CONTAINER_PROVIDER: StaticProvider = {
  provide: SCROLL_CONTAINER_INTERSECTION_OBSERVER_TOKEN,
  useFactory: (injector: Injector) => injector.get(ElementRef, null, InjectFlags.Self),
  deps: [Injector]
}
