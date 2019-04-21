import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; 
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import { PostLoginModule } from './PostLogin/postLogin.module';
import { PreLoginModule } from './PreLogin/preLogin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';  

import { LocalStorageService } from './Services/localStorageService'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PreLoginModule,
    PostLoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot(),
    AppRoutingModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
