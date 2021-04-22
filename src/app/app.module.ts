import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShounenComponent } from './pages/shounen/shounen.component';
import { SeinenComponent } from './pages/seinen/seinen.component';

@NgModule({
  declarations: [
    AppComponent,
    ShounenComponent,
    SeinenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
