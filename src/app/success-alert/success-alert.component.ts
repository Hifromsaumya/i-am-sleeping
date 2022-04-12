import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  // templateUrl: './success-alert.component.html',
  template:`
  <div class="success-msg">
    <i class="fa fa-success"></i> This is a success message.
</div>
  `,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
