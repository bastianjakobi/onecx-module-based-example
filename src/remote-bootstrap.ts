import { bootstrapModule } from '@onecx/angular-webcomponents'
import { RemoteModule } from './app/remote.module' 
import { environment } from './environments/environment'
 
bootstrapModule(RemoteModule, 'microfrontend', environment.isProduction)