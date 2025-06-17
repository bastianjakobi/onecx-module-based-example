import {
  APP_INITIALIZER,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  addInitializeModuleGuard,
  AppStateService,
} from '@onecx/angular-integration-interface';
import { remoteRoutes } from './app.routes';
import { AppEntrypointComponent } from './app-entrypoint.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularAuthModule } from '@onecx/angular-auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  createTranslateLoader,
  provideAngularUtils,
  TRANSLATION_PATH,
  translationPathFactory,
} from '@onecx/angular-utils';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  createAppEntrypoint,
  initializeRouter,
} from '@onecx/angular-webcomponents';

export const commonImports = [
  BrowserModule,
  BrowserAnimationsModule,
  AngularAuthModule,
  TranslateModule.forRoot({
    isolate: false,
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient],
    },
  }),
];

export const commonProviders = [
  provideHttpClient(withInterceptorsFromDi()),
  provideAngularUtils({
    contentType: 'microfrontend',
  }),
];

@NgModule({
  declarations: [AppEntrypointComponent],
  imports: [
    ...commonImports,
    RouterModule.forRoot(addInitializeModuleGuard(remoteRoutes)),
  ],
  providers: [
    ...commonProviders,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeRouter,
      multi: true,
      deps: [Router, AppStateService],
    },
    {
      provide: TRANSLATION_PATH,
      useFactory: (appStateService: AppStateService) =>
        translationPathFactory('assets/i18n/')(appStateService),
      multi: true,
      deps: [AppStateService],
    },
  ],
})
export class RemoteModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}
  ngDoBootstrap(): void {
    createAppEntrypoint(
      AppEntrypointComponent,
      'onecx-module-based-example',
      this.injector,
      { usePortalLayoutStyles: false }
    );
  }
}
