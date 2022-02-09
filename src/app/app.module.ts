import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { authInterceptor } from './authInterceptor';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { LikeButtonComponent } from './component/like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashBoardComponent,
    UserProfileComponent,
    LikeButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
