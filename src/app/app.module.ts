import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { addInitializeModuleGuard } from '@onecx/angular-integration-interface';
import { standaloneRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(addInitializeModuleGuard(standaloneRoutes))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
