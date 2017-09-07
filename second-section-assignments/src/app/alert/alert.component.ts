import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alertBackground:string;
  @Input() alertColor:string;
  @Input() alertMessage:string;
  @Input() alertBorder:string;

  constructor() { }

  ngOnInit() {
  }

}
