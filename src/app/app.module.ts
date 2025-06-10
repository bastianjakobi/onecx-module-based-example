import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { addInitializeModuleGuard } from '@onecx/angular-integration-interface';
import { provideStandaloneProviders, StandaloneShellModule } from '@onecx/standalone-shell';
import { standaloneRoutes } from './app.routes';
import { commonImports, commonProviders } from './remote.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...commonImports,
    StandaloneShellModule,
    RouterModule.forRoot(addInitializeModuleGuard(standaloneRoutes))
  ],
  providers: [
    ...commonProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
