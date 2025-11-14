import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counter = signal(2);
  increment() {
    this.counter.update((cur) => cur + 1);
  }
  reset() {
    this.counter.set(0);
  }
  decrement = () => this.counter.update((cur) => (cur > 0 ? cur - 1 : cur));
}
