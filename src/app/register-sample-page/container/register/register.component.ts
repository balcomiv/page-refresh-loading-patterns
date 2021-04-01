import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  template: `
    <app-register-view
      [registerData]="registerData | async"
    ></app-register-view>
  `,
  styles: [],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit {
  registerData = this.registerService.registerData;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}
}
