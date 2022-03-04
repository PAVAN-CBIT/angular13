ifdemo.component.ts
=============================================================================================================================================================================

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = {
    Name: 'Nike Casuals',
    Price: 6000.44,
    Preview: 'assets/shoe.jpg'
  }

}

============================================================================================================================================================================================

ifdemo.component.html
======================================================================================================================================================================================

<div class="container-fluid">
    <h2>Product Details</h2>
    <dl>
        <dt>Name</dt>
        <dd>{{product.Name}}</dd>
        <dt>Price</dt>
        <dd>{{product.Price}}</dd>
        <dt class="form-switch">
           <input name="preview" ngModel #preview="ngModel" class="form-check-input" type="checkbox"> {{(preview.value)?'Hide Preview':'Show Preview'}}
        </dt>
        <dd *ngIf="preview.value">
            <img [src]="product.Preview" width="200" height="200">
        </dd>
    </dl>
</div>
