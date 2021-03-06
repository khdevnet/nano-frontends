import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [WelcomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
  constructor(injector: Injector) {
    const features = createCustomElement(WelcomeComponent, {injector: injector});
    customElements.define('app-welcome', features);
  }
  ngDoBootstrap() {}
}
