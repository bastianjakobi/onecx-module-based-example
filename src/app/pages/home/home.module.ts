import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PortalPageComponent } from '@onecx/angular-utils';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    PortalPageComponent,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class HomeModule { }
