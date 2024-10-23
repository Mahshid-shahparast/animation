import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('open-close', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'close',
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'blue',
        })
      ),
      transition('open => close', animate('1s')),
      transition('close => open', animate('0.5s')),
    ]),
    trigger('open-close-text', [
      state(
        'open',
        style({
          color: 'black',
        })
      ),
      state(
        'close',
        style({
          color: 'white',
        })
      ),
      transition('open => close', animate('1s')),
      transition('close => open', animate('0.5s')),
    ]),
  ],
})
export class AppComponent {
  isOpen: boolean = false;
}
