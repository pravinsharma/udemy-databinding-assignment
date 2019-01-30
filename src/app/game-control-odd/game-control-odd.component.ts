import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control-odd',
  template: `<p *ngFor="let count of counts">
    {{count}}
  </p>`,
  styleUrls: ['./game-control-odd.component.css']
})
export class GameControlOddComponent implements OnInit {
  counts: Array<number> = new Array();

  constructor() { }

  ngOnInit() {
  }

  onCountEvent(count: number) {
    console.log('count', count);
    this.counts.push(count);
  }
}