import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AdminModule } from './admin.module';
import { AdminComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AdminModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AdminComponent],
})
export class AppServerModule {}
