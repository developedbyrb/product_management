import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Output() ratingClickEvent: EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;
  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  OnClick(): void {
    this.ratingClickEvent.emit(`The rating ${this.rating} is clicked!`);
  }
}
