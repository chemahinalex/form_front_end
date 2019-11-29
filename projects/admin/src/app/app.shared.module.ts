import {ModuleWithProviders, NgModule} from "@angular/core";
import { AdminModule } from "./admin.module";

@NgModule({})
export class AdminSharedModule {
  static forRoot(providers = []): ModuleWithProviders {
    return {
      ngModule: AdminModule,
      providers: providers
    }
  }
}
