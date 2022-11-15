import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { PromptComponent } from '../utilities/popups/prompt/prompt.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount:any

  constructor(private _du: DesignUtilityService) { 
    this._du.cartCount.subscribe((res: number) => {
      this.cartCount = res;
    })
  }

  ngOnInit(): void {
  }

  onLogOut() {
    this._du.openPrompt();
  }

}
