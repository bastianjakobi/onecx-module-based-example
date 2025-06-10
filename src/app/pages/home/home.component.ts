import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalMessageService } from '@onecx/angular-integration-interface';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  private readonly router = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly navigationService = inject(NavigationService)
  private readonly portalMessageService = inject(PortalMessageService);
  constructor() {
    console.log('HomeComponent initialized');
  }
  navigateToDetails() {
    this.navigationService.navigate(this.router, this.activeRoute, 'detail');
  }
  showPortalMessage() {
    this.portalMessageService.info({
      summaryKey: 'MESSAGE.SUMMARY',
      summaryParameters: { name: 'Home Page' },
      detailKey: 'MESSAGE.DETAIL',
    })
  }
}
