indexdemo.component.ts
=============================================================================================================================================================================
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexdemo',
  templateUrl: './indexdemo.component.html',
  styleUrls: ['./indexdemo.component.css']
})
export class IndexdemoComponent implements OnInit {

  products:any[] = [];
  productName:string = '';
  productPrice:number = 0;
  product:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  RegisterClick(){
     this.product = {
        Name: this.productName,
        Price: this.productPrice
     }
     this.products.push(this.product);
     alert('Product Registered..');
     this.productName = '';
     this.productPrice = 0;
  }
  DeleteClick(index:number){
      let flag = confirm('Are you sure, want to Delete?');
      if(flag==true) {
        this.products.splice(index,1);
      }
  }

}
=============================================================================================================================================================================

indexdemo.component.html
===================================================================================================================================================================================
<div class="container-fluid">
  <div class="row">
     <div class="col-3">
        <h2>Register Product</h2>
        <dl>
            <dt>Name</dt>
            <dd><input type="text" [(ngModel)]="productName" class="form-control"></dd>
            <dt>Price</dt>
            <dd><input type="text" [(ngModel)]="productPrice" class="form-control"></dd>
        </dl>
        <button (click)="RegisterClick()" class="btn btn-primary w-100">Register</button>
     </div>
     <div class="col-9">
        <h2>Product Details</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr [class.even-style]="even" [class.odd-style]="odd" *ngFor="let item of products; let i=index; let even=even; let odd=odd">
                    <td>{{item.Name}}</td>
                    <td>{{item.Price}}</td>
                    <td>
                        <button (click)="DeleteClick(i)"  class="btn btn-danger">
                            <span class="bi bi-trash-fill"></span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
     </div>
  </div>
</div>
===========================================================================================================================================================
indexdemo.component.css
================================================================================================================================


.even-style
{
    background-color: rgb(209, 252, 209);
}
.odd-style {
    background-color: rgb(250, 194, 194);
}
