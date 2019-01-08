import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatToolbarModule,
} from '@angular/material';

const SHARED_MODULES = [
  ReactiveFormsModule,
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSliderModule,
  MatFormFieldModule
];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES]
})
export class SharedModule {}
