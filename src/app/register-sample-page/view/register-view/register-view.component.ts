import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-view',
  template: ` <p>Register Data: {{ registerData }}</p> `,
  styles: [],
})
export class RegisterViewComponent implements OnInit {
  @Input() registerData: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
