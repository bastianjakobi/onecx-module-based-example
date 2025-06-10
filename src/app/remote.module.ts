import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addInitializeModuleGuard } from '@onecx/angular-integration-interface';
import { remoteRoutes } from './app.routes';
import { AppEntrypointComponent } from './app-entrypoint.component';

@NgModule({
  declarations: [AppEntrypointComponent],
  imports: [RouterModule.forRoot(addInitializeModuleGuard(remoteRoutes))],
})
export class RemoteModule {}
