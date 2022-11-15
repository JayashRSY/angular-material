import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
  }

  count = 0
  onAdd() {
    this.count++;
    this._du.cartCount.next(this.count)
  }
  onRemove() {
    if(this.count>0) {
      this.count--;
      this._du.cartCount.next(this.count)
    }
  }

}
