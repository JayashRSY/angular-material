import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSingleToggle(val: any) {
    console.log(val.checked);
  }
  onGroupToggle(val: any) {
    console.log(val.value);
  }

  fontStyle: any;
  fontStyleControl = new FormControl()

}
