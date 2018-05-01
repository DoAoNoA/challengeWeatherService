import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { UserService } from './services/user.service'
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { BoardsComponent } from './components/boards/boards.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
