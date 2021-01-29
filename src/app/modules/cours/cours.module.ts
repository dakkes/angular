import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { PersonneComponent } from './personne/personne.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonneComponent],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CoursModule { }
