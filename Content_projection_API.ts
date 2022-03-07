ifdemo.component.ts

===================================================================================================================================================================================

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  product:any = {};

  GetData(id:number) {
     fetch(`http://fakestoreapi.com/products/${id}`)
     .then(response=>response.json())
     .then(data => {
       this.product = data;
     })
  }
  count:number = 1;
  ButtonText:string = 'Price | Rating';
  ToggleTemplate:TemplateRef<any>|null = null;

  @ViewChild('DescriptionTemplate', {static: true}) DescriptionTemplate:TemplateRef<any>|null = null;
  @ViewChild('RatingTemplate', {static:true}) RatingTemplate:TemplateRef<any>|null = null;

  constructor() { }

  ngOnInit(): void {
    this.GetData(this.count);
    this.ToggleTemplate = this.DescriptionTemplate;
  }
  NextClick(){
    this.count++;
    this.GetData(this.count);
  }
  PreviousClick(){
    this.count--;
    this.GetData(this.count);
  }
  ToggleDetails(){
    this.ToggleTemplate = (this.ToggleTemplate==this.DescriptionTemplate)?this.RatingTemplate: this.DescriptionTemplate;
    this.ButtonText = (this.ButtonText=='Price | Rating')?'Description':'Price | Rating';
  }
 
}
    
    

==================================================================================================================================================================================
ifdemo.component.html
================================================================================================================================================================================
<div class="container-fluid">
   <div class="mt-3 btn-group">
    <button (click)="PreviousClick()" class="btn btn-danger"> &laquo; </button>
    <button (click)="NextClick()" class="btn btn-warning"> &raquo; </button>
   </div>
   <div class="card w-25 m-2 p-2">
      <img [src]="product.image" height="200" class="card-img-top">
      <div class="card-header" style="height: 170px;">
         <h5>{{product.title}}</h5>
      </div>
   </div>
   <div class="details">
       <button (click)="ToggleDetails()" class="btn btn-primary">
          <span class="bi bi-eye-fill"></span>
          {{ButtonText}}
       </button>
       <div *ngIf="true; then ToggleTemplate"></div>
       <ng-template #DescriptionTemplate>
          <h2>Product Description</h2>
          <p>{{product.description}}</p>
       </ng-template>
       <ng-template #RatingTemplate>
          <h2>Product Price | Rating</h2>
          <dl>
             <dt>Price</dt>
             <dd>{{product.price}}</dd>
             <dt>Rating</dt>
             <dd>
                <span class="bi bi-star-fill text-success"></span>
                {{product.rating.rate}} [<span class="text-dark">{{product.rating.count}}</span>]
             </dd>
          </dl>
       </ng-template>
   </div>
</div>
=============================================================================================================================================================================
ifdemo.component.css
========================================================================================================================================================================================
.details {
    position: fixed;
    right: 320px;
    top: 100px;
    width: 400px;
}
