import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div><h1>{{title}}</h1>
  <app-product-list></app-product-list></div>
  `,
})
export class AppComponent {
  title: string = 'Product Management';
}
