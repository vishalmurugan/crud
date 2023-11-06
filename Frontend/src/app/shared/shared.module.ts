import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    ControlMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ControlMessagesComponent,
  FormsModule,
  ReactiveFormsModule
],
providers:[ApiService]

})
export class SharedModule { }
