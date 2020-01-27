import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManualComponent} from './manual/manual';
import { ExternalComponent } from './external/external.component';
import { ChildComponent } from './child/child.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parents/parent.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { TemplateComponent } from './template/template.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExternalComponent,
    ChildComponent,
    ParentComponent,
    DatadrivenComponent,
    TemplateComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
