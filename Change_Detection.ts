 child.component.ts
=============================================================================================================================================================================
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() username:string = '';
  previousvalue:string = '';
  currentvalue:string = '';
  msg:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(var property in changes)
    {
       let change = changes[property];
       this.currentvalue = change.currentValue;
       this.previousvalue = change.previousValue;
    }
    if(this.currentvalue==this.previousvalue) {
       this.msg = "No Change Detected";
    } else {
      this.msg = "Change Detected";
    }
  }
 
}
==================================================================================================================================================================================
 child.component.html
==================================================================================================================================================================================
<div class="bg-dark text-white p-4" style="height: 250px; width: 800px;">
  <h3>Child Component</h3>
  <p>Hello ! {{username}}</p>
  <h3>{{msg}}</h3>
  <p>
    Previous Value  : {{(previousvalue==undefined)?"Undefined":previousvalue}} <br>
    Current Value   : {{currentvalue}}
  </p>
</div>
======================================================================================================================================================================================
 parent.component.ts
=======================================================================================================================================================================================
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
  })
  export class ParentComponent implements OnInit {
   

    constructor() { }

    ngOnInit(): void {
    }
    UserName:any = 'David';
  }

=================================================================================================================================================================================
 parent.component.html
==============================================================================================================================================================================
<div class="container-fluid bg-danger m-4 p-4 text-white" style="height: 400px; width: 1000px;">
  <h2>Parent Component</h2>
  <dl>
    <dt>User Name</dt>
    <dd><input [(ngModel)]="UserName" type="text"></dd>
  </dl>
  <app-child [username]="UserName"></app-child>
</div>
