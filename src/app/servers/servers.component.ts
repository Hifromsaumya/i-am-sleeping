import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',  //selector if changes from app-server to [app-server], will become an attribute 
  // selector: '.app-servers',  // also can be selected by a class 
  template: `
  <app-server></app-server>  
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
