import { Inject, Injectable, Optional } from '@angular/core';
import {
  MatMomentDateAdapterOptions,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

/**
 * @description custom date adapter which we can customize on our needs. Currently only needed to display in calendar the local date from PC ignoring the useUtc configuration
 */
@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {
  constructor(
    @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string,
    @Optional() @Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS) adapterOptions: MatMomentDateAdapterOptions
  ) {
    super(dateLocale, adapterOptions);
  }
  /**
   * @description overwrite the method from Moment Date Adapter
   * @returns  the current date as date from PC ignoring the "useUtc" configuration
   */
  override today(): any {
    return moment();
  }
}
