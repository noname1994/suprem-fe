import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Metarial
 */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule } from '@angular/material';
/**
 * Routes
 */
import { Routing } from './routes/routing-app';

/**
 * Component
 */
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
