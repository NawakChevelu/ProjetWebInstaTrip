/**
 * Commenter ce qui n'est pas utile dans l'application
 * le Tree Shaking fera le reste
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {PlatformModule} from '@angular/cdk/platform';


import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';


import {
  MatFormFieldModule,
  // MatAutocompleteModule,
  MatStepperModule ,
  MatBadgeModule,
  // MatBottomSheetModule,
  MatButtonModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  // MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  // MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  // MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  // MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule
  ],
  exports: [
    PlatformModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule ,
    MatDialogModule,
    MatChipsModule,
    MatNativeDateModule,  // or MatMomentDateModule
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule
  ]
})
export class MaterialFeaturesModule { }
