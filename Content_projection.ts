ifdemo.component.ts
===================================================================================================================================================================

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  thenBlock:TemplateRef<any>|null = null;
  isVisible:boolean = true;

  @ViewChild('Block1', {static:true}) Block1:TemplateRef<any>|null = null;
  @ViewChild('Block2', {static:true}) Block2:TemplateRef<any>|null = null;

  constructor() { }

  ngOnInit(): void {
    this.thenBlock = this.Block1;
  }
  SwitchClick(){
     this.thenBlock = (this.thenBlock==this.Block1)?this.Block2:this.Block1;
  }
}

====================================================================================================================================================================
    
ifdemo.component.html
    
======================================================================================================================================================    

<div class="container-fluid">
    <button (click)="SwitchClick()">
        Switch Then Block
    </button>
    <div *ngIf="isVisible; then thenBlock; else elseBlock"></div>
    <ng-template #Block1>
        Then Block1
    </ng-template>
    <ng-template #Block2>
        Then Block2
    </ng-template>
    <ng-template #elseBlock>
        else block
    </ng-template>
</div>
