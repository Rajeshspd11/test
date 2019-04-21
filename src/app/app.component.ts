import { Component, ElementRef } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES, EventTargetInterruptSource} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  idleState: string;
  timedout; lastPing;

  constructor(private idle:Idle, private keepAlive: Keepalive,private element: ElementRef){
  }/*
    idle.setIdle(15);
    idle.setTimeout(15);

    idle.setInterrupts([
      new EventTargetInterruptSource(
        this.element.nativeElement, 'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll')]);


        idle.onIdleEnd.subscribe(() => {
          this.idleState = 'NO_LONGER_IDLE';
          console.log("No longer Idle");
        });

        idle.onTimeout.subscribe(() => {
          this.idleState = 'TIMED_OUT';
          this.timedout = true;
        });

        idle.onIdleStart.subscribe(() => {
          this.idleState = 'IDLE_START';
          console.log("Idle");
        });

        idle.onTimeoutWarning.subscribe((countdown: any) => {
          this.idleState = 'IDLE_TIME_IN_PROGRESS';
           });

           keepAlive.interval(5);
           this.reset();
  }

      reset(){
        this.idle.watch();
      this.idleState = 'Started.';
      this.timedout = false;
      }

      logout() {
       this.resetTimeOut();
      }

      resetTimeOut() {
        this.idle.stop();
        this.idle.onIdleStart.unsubscribe();
        this.idle.onTimeoutWarning.unsubscribe();
        this.idle.onIdleEnd.unsubscribe();
        this.idle.onIdleEnd.unsubscribe();
      }*/
    }