import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent {
  @Input()
  public control!: UntypedFormControl;
  @Input()
  public labelName?: string;
  /**
  **	To show the errorMessage
  **/
  get errorMessage(): any {
    if(this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched)) {
          return ValidationService.getValidationErrorMessage(
            propertyName,
            this.control.errors[propertyName],
            this.labelName,
          );
        }
      }
    }
    return undefined;
  }
}
