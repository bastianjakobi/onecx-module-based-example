import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalMessageService } from '@onecx/angular-integration-interface';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  private readonly router = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly navigationService = inject(NavigationService)
  private readonly portalMessageService = inject(PortalMessageService);
  navigateToHome() {
    this.navigationService.navigate(this.router, this.activeRoute, '../');
  }
    showPortalMessage() {
    this.portalMessageService.info({
      summaryKey: 'MESSAGE.SUMMARY',
      summaryParameters: { name: 'Detail Page' },
      detailKey: 'MESSAGE.DETAIL',
    })
  }
}
