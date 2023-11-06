import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  //This function is used to print the error messsage
  public static getValidationErrorMessage(validatorName: string, validatorValue?: any, labelName?: string): any {
    const config:any = {
      required: `Field is required.`,
      isbnErr:'Invalid ISBN'
    };

    return config[validatorName];
  }
  
  //This function is used to check the value is in ISBN
  public static isbnValidate(control:any) {
    if (
      control.value.match(
        '^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$'
      )
    ) {
      return null;
    } else {
      return { isbnErr: true };
    }
  }

}
