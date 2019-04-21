import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/localStorageService';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcome: string; searchVal: string; searchLen: number;
  arrayForSearch = ['one', 'two', 'twowo'];
  arrayToDisplay = ['tes'];
  display= false;
  result=false;
  @ViewChild('search') searchV: ElementRef;


  ngOnInit() {
    this.welcome = this.localService.getValue();

  }
  ngAfterViewInit(){
    
  }

  onSearch() {
    this.searchVal = this.searchV.nativeElement.value;
    this.searchLen = this.searchVal.length;
    console.log("Searching" + this.searchVal +" "+this.searchLen);
        this.arrayToDisplay=this.arrayToDisplay.splice(0,0);


    for (let i = 0; i < this.arrayForSearch.length; i++) {
  /*    for (let j = 0; j < this.arrayToDisplay.length; j++) {
        if (!this.searchVal.nativeElement.value == this.arrayToDisplay[j].slice(0, this.searchVal.nativeElement.value.length)) {
    */    if (this.searchVal== this.arrayForSearch[i].slice(0, this.searchLen)) {
            console.log(this.searchVal + " * " + this.arrayForSearch[i].slice(0, this.searchLen));
            this.arrayToDisplay.push(this.arrayForSearch[i]);
            this.display=true;
            console.log(this.display);
           }
        }
  /*    }
    }
    
/*
   for (let i = 0; i < this.arrayForSearch.length; i++) {
  //  for (let j = 0; j < this.arrayToDisplay.length; j++) {
  //    if (!this.searchVal == this.arrayToDisplay[j].slice(0, this.searchLen)) {
        if (this.searchVal == this.arrayForSearch[i].slice(0, this.searchLen)) {
          console.log(this.searchVal+ " * " + this.arrayForSearch[i].slice(0, this.searchVal.nativeElement.value.length));
          this.arrayToDisplay.push(this.arrayForSearch[i]);
   //      }
 //     }
    }
  }
*/

    console.log("Resultset " + this.arrayToDisplay);
    if(this.arrayToDisplay.length==0)
      this.result=true;
  }


  title = 'Demo';
  idleState: string;
  timedout; lastPing; logback;

  constructor(private localService: LocalStorageService, private idle: Idle,
    private keepAlive: Keepalive, private element: ElementRef,
    private router: Router) {

    idle.setIdle(30);
    idle.setTimeout(30);

    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    /*   idle.setInterrupts([
         new EventTargetInterruptSource(
           this.element.nativeElement, 'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll')]);
   */

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NO_LONGER_IDLE';
      console.log("No longer Idle");
    });

    idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.timedout = true;
      console.log("Time out");
      localService.removeValue();
      this.router.navigate(['login']);

    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE_START';
      console.log("Idle");
      this.logback=alert("You will be logged out in 30 secs");
      console.log(this.logback);

      /* if(this.logback==undefined)
       idle.setIdle(5);
       //idle.watch();
       console.log("Watching idle")*/
      /*/*var w = window.open('','','width=100,height=100')
           w.document.write('You will be logged out in 30 secs. Click anywhere to stay logged in')
           w.focus()
     setTimeout(function() {w.close();}, 5000)*/
    });



    idle.onTimeoutWarning.subscribe((countdown: any) => {
      this.idleState = 'IDLE_TIME_IN_PROGRESS';
    });

    keepAlive.interval(5);
    this.reset();
  }

  onLogOut() {
    if (window.confirm('Are sure you want to logout ?')) {
      this.localService.removeValue();
      this.router.navigate(['login']);
    }

  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedout = false;
  }

  logout() {
    this.resetTimeOut();
  }

  resetTimeOut() {
    this.idle.stop();
    /* this.idle.onIdleStart.unsubscribe();
     this.idle.onTimeoutWarning.unsubscribe();
     this.idle.onIdleEnd.unsubscribe();
     this.idle.onIdleEnd.unsubscribe();*/
  }
  ngOnDestroy() {
    this.resetTimeOut();

  }




}
