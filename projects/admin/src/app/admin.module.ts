import { NgModule } from '@angular/core';
import { AdminComponent } from './app.component';
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AdminComponent]
})

export class AdminModule { }
