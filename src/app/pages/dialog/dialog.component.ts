import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { PromptComponent } from 'src/app/includes/utilities/popups/prompt/prompt.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { Dialog3Component } from './dialog3/dialog3.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private _du: DesignUtilityService) { }

  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(Dialog1Component);
  }
  openDialog2() {
    const dialogRef = this.dialog.open(Dialog2Component)
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res === 'install action') {
        console.log('something done');
      }
    })
  }

  animal!: string;
  name!: string;
  openDialog3() {
    const dialogRef = this.dialog.open(Dialog3Component, {
      data: this.name
    })
    dialogRef.afterClosed().subscribe(res => {
      this.animal = res;
    })
  }

  promptResult!:boolean
  openDialog4() {
    this._du.openPrompt()
  }
}
