import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index-component/index-component';
import { RouterModule } from '@angular/router';
import { applicationRouter } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(applicationRouter),
    AgmCoreModule.forRoot({
      apiKey: environment.API
    })

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule {}