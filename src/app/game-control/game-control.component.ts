import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  
  intervalId = 0;
  @Output() countEvent = new EventEmitter<number>();
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() { this.clearTimer(); }

  startTimer() {
    console.log('startTimer...');
    this.countDown();
  }

  stopTimer() {
    console.log('stopTimer...');
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.count++;
      this.countEvent.emit(this.count);
    }, 1000);
  }

  clearTimer() { clearInterval(this.intervalId); }
}