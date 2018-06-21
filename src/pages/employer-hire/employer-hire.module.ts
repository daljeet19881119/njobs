import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployerHirePage } from './employer-hire';

@NgModule({
  declarations: [
    EmployerHirePage,
  ],
  imports: [
    IonicPageModule.forChild(EmployerHirePage),
  ],
})
export class EmployerHirePageModule {}
