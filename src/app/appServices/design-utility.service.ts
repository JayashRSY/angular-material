import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(public dialog: MatDialog) { }
  //OPEN PROMPT
  openPrompt(promptData: string) {
    const dialogRef = this.dialog.open(PromptComponent, {
      data: promptData
    })
    return dialogRef.afterClosed();
  }

  cartCount = new BehaviorSubject<number>(0);
}
