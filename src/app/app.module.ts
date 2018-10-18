import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// importing firebase module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {InputComponent} from './input/input.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
