import {FormControl} from '@angular/forms';

export class DateFormControl extends FormControl {

  //Override(Hijacking) the setValue()
  setValue(value: string | any, options: any) {

    if(!value) {
       super.setValue('', {...options, emitModelToViewChange: true});
        return;
    }

    //handle the case to let the user enters numbers or \ only
      if (value.match(/[^0-9|\/]/gi)) {
        super.setValue(this.value, {...options, emitModelToViewChange: true});
        return;
      }

      if (value.length > 5) {
        super.setValue(this.value, {...options, emitModelToViewChange: true});
        return;
      }

      if (value.length === 2 && this.value.length === 3) {
        super.setValue(value, {...options, emitModelToViewChange: true});
        return;
      }

      if (value.length === 2) {
          super.setValue(value + '/', {...options, emitModelToViewChange: true}); //call the defualt FormControl setValue function to be able to use the validators
          return;
        }
       super.setValue(value , {...options, emitModelToViewChange: true});
  }

}
