import { NgModule } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    {provide: MATERIAL_SANITY_CHECKS, useValue: false}
  ]
})

export class MaterialModule {}
