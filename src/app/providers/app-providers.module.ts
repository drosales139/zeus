import { NgModule } from '@angular/core';
import {
  MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material/form-field';
import {
  MatSnackBarConfig
} from '@angular/material/snack-bar';

import { environment } from 'src/environments/environment';
import { API_ENDPOINT_PROVIDER } from './tokens';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,MAT_RIPPLE_GLOBAL_OPTIONS} from '@angular/material/core'

const snackBarConfig: MatSnackBarConfig = {
  duration: 5000,
  horizontalPosition: 'end',
};

const matFormFieldConfig: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};
const labelGlobalOptions: any = {
  float: 'always',
};



// const matDialogConfig: MatDialogConfig = {};

@NgModule({
  imports: [],
  providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    // },

    
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldConfig,
    },
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: labelGlobalOptions,
    },
    {
      provide: API_ENDPOINT_PROVIDER,
      useValue: environment.api,
    },
  ],
})
export class AppProvidersModule {}
