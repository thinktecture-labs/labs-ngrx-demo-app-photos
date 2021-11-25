import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DashboardStore} from './dashboard.store';

@Component({
  selector: 'labs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardStore]
})
export class DashboardComponent {

  readonly photos$ = this.dashboardStore.photos$;

  constructor(private readonly dashboardStore: DashboardStore) {
    this.dashboardStore.load();
  }
}
