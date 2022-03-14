1. child.component.ts

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message:string|null = 'waiting for message from parent..';
  @Input() obj:any = {};
  messageToParent = 'Hello ! from Child';

  @Output() ChildComponentClick:EventEmitter<string> = new EventEmitter<string>();
  @Output() ChildComponentSendObjectClick:EventEmitter<any> = new EventEmitter<any>();

  product:any  = {'Name': 'Nike Casuals', 'Price': 6600.33};
  constructor() { }

  ngOnInit(): void {
  }

  SendClick(){
    this.ChildComponentClick.emit(this.messageToParent);
    this.ChildComponentSendObjectClick.emit(this.product);
  }

}


2. child.component.html

<div class="bg-dark text-white p-4" style="height: 250px; width: 800px;">
  <h3>Child Component</h3>
  <p>{{message}}</p>
  <p>Name : {{obj.Name}} <br> Price : {{obj.Price}}</p>
  <button (click)="SendClick()" class="btn btn-danger">Send Message to Parent</button>
</div>

3. parent.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  messageToChild:string|null =null;
  objectToChild:any = {};
  message:string|null = null;
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
  SendToParent(e:any) {
    this.message = e;
  }
  Name:string = '';
  Price:number = 0;
  SendObject(e:any) {
     this.Name = e.Name;
     this.Price = e.Price;
  }
}

4. parent.component.html

<div class="container-fluid bg-danger m-4 p-4 text-white" style="height: 400px; width: 1000px;">
  <h2>Parent Component</h2>
   <div class="mb-3">
       <button (click)="SendClick()" class="btn btn-dark">Send Message to Child</button>
       {{message}} -  {{Name}} : {{Price}}
   </div>
  <app-child (ChildComponentSendObjectClick)="SendObject($event)" (ChildComponentClick)="SendToParent($event)" [obj]="objectToChild" [message]="messageToChild"></app-child>
</div>
