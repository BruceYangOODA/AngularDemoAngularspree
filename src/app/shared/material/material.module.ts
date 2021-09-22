import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxJsonLdModule } from 'ngx-json-ld'; 
import { NgProgressModule } from 'ngx-progressbar';  
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

const materials: any = [
  CommonModule,
  FormsModule,
  RouterModule,
  ToastrModule.forRoot(),
  BsDropdownModule,
  NgxJsonLdModule,
  NgProgressModule,
  TypeaheadModule
]


@NgModule({
  declarations: [],
  imports: [ materials ],
  exports: [ materials ]
})
export class MaterialModule { }
