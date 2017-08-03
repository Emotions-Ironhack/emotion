import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

// Routes
import { RouterModule } from '@angular/router';
import {routes} from './routes';
// Route Guard
import { LoggedInService } from '../services/loggein.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { FileSelectDirective } from "ng2-file-upload";
import { AddPhotoEmotionComponent } from './add-photo-emotion/add-photo-emotion.component';
import { EmotionListComponent } from './emotion-list/emotion-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FileSelectDirective,
    AddPhotoEmotionComponent,
    EmotionListComponent,
    SignupComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, LoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
