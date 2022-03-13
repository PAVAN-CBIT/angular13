 child.component.ts
=====================================================================================================================================================================
 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message:string|null = 'waiting for message from parent..';
  @Input() obj:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
================================================================================================================================================================================
 child.component.html
==========================================================================================================================================================
<div class="bg-dark text-white p-4" style="height: 200px; width: 800px;">
  <h3>Child Component</h3>
  <p>{{message}}</p>
  <p>Name : {{obj.Name}} <br> Price : {{obj.Price}}</p>
</div>
====================================================================================================================================================================
parent.component.ts
=====================================================================================================================================================================
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  messageToChild:string|null =null;
  objectToChild:any = {};
  constructor() { }

  ngOnInit(): void {
  }
  SendClick(){
    this.messageToChild = 'Hello ! from parent';
    this.objectToChild = {
      'Name': 'TV',
      'Price': 45500.33
    }
  }

}

====================================================================================================================================================================================
parent.component.html
===============================================================================================================================================================================
<div class="container-fluid bg-danger m-4 p-4 text-white" style="height: 400px; width: 1000px;">
  <h2>Parent Component</h2>
   <div class="mb-3">
       <button (click)="SendClick()" class="btn btn-dark">Send Message to Child</button>
   </div>
  <app-child [obj]="objectToChild" [message]="messageToChild"></app-child>
</div>
