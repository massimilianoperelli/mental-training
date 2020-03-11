import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mental-trainer';
  isStarted = false;
  currentClass = 'b-black';
  private heartBeatTimer: any = undefined;

  onStart(event: any): void {
    if (this.heartBeatTimer == null) {
      this.isStarted = true;
      this.heartBeatTimer = setInterval(() => this.pickNextColor(), 3 * 1000);
    }
    event.stopPropagation();
  }

  onStop(): void {
    if (this.heartBeatTimer != null) {
      this.isStarted = false;
      clearInterval(this.heartBeatTimer);
      this.currentClass = 'b-black';
      this.heartBeatTimer = null;
    }
  }

  private pickNextColor() {
    const nextIndex = Math.floor(Math.random() * (3 - 0) ) + 0;
    switch (nextIndex) {
      case 0: {
        this.currentClass = 'b-red';
        break;
      }
      case 1: {
        this.currentClass = 'b-blue';
        break;
      }
      case 2: {
        this.currentClass = 'b-yellow';
        break;
      }
      case 3: {
        this.currentClass = 'b-green';
        break;
      }
      default: {
        this.currentClass = 'b-blue';
        break;
      }
    }
    setTimeout( () => { this.currentClass = 'b-black'; }, 1500 );
  }
}
