import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';



@NgModule({
  declarations: [
    PromptComponent

  ],
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    PromptComponent
  ]
})
export class DesignUtilityModule { }
