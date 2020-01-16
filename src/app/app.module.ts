import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManualComponent} from './manual/manual';
import { ExternalComponent } from './external/external.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './parents/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // ManualComponent,
    ExternalComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
