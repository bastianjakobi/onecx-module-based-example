import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PortalPageComponent } from '@onecx/angular-utils';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
  },
]

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    PortalPageComponent,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class DetailModule { }
