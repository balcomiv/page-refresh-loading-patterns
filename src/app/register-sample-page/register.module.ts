import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './container/register/register.component';
import { RegisterViewComponent } from './view/register-view/register-view.component';

@NgModule({
  declarations: [RegisterComponent, RegisterViewComponent],
  imports: [CommonModule],
})
export class RegisterModule {}
