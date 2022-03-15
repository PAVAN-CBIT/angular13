filter.component.ts
=================================================================================================================================================================================
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() AllCount:number = 0;
  @Input() ElectronicsCount:number = 0;
  @Input() JeweleryCount:number = 0;
  @Input() MensClothingCount:number = 0;
  @Input() WomensClothingCount:number = 0;


  @Output() FilterChanged:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  FilterButtonClick(e:any){
     this.FilterChanged.emit(e.target.value);
  }

}

=================================================================================================================================================================================
 filter.component.html
=========================================================================================================================================================================
<div style="text-align:left; font: size 25px;">
<h3>Product Categories</h3>
<ul class="list-unstyled">

    <li><input (change)="FilterButtonClick($event)" type="radio" name="category" value="all">All[{{AllCount}}]</li>
    <li><input (change)="FilterButtonClick($event)" type="radio" name="category" value="electronics">Electronics[{{ElectronicsCount}}]</li>
    <li><input (change)="FilterButtonClick($event)" type="radio" name="category" value="jewelery">Jewelery[{{JeweleryCount}}]</li>
    <li><input (change)="FilterButtonClick($event)" type="radio" name="category" value="men's clothing">Men's Wear[{{MensClothingCount}}]</li>
    <li><input (change)="FilterButtonClick($event)" type="radio" name="category" value="women's clothing">Women's Wear[{{WomensClothingCount}}]</li>

</ul>

</div>

    
================================================================================================================================================================================
4. products.component.ts
=========================================================================================================================================================================
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = [];

  allCount:number = 0;
  electronicsCount:number = 0;
  jeweleryCount:number = 0;
  mensCount:number = 0;
  womensCount:number = 0;

  GetProducts(){
    fetch('http://fakestoreapi.com/products')
    .then(response=> response.json())
    .then(data=>{
        this.products = data;
        this.allCount = data.length;
        this.electronicsCount = data.filter((product:any)=> product.category=='electronics').length;
        this.jeweleryCount = data.filter((product:any)=> product.category=='jewelery').length;
        this.mensCount = data.filter((product:any)=> product.category==`men's clothing`).length;
        this.womensCount = data.filter((product:any)=>product.category==`women's clothing`).length;
       
    })
  }
  constructor() { }

  ngOnInit(): void {
    this.GetProducts();
  }
  categoryName:string = 'all';
  GetCategoryName(e:any){
     this.categoryName = e;
     if(this.categoryName=='all') {
         this.GetProducts();
     } else {
      fetch(`http://fakestoreapi.com/products/category/${this.categoryName}`)
      .then(response=>response.json())
      .then(data=>{
        this.products = data;
      })
     }
  }

}

==============================================================================================================================================================================
products.component.html
===========================================================================================================================================================================
<div class="container-fluid">
   <header class="bg-danger text-white text-center p-2 mb-2">
       <h2>Fake Store - Online Shopping</h2>
   </header>
   <section class="row">
       <nav class="col-3">
          <app-filter (FilterChanged)="GetCategoryName($event)" [AllCount]="allCount" [ElectronicsCount]="electronicsCount" [JeweleryCount]="jeweleryCount" [MensClothingCount]="mensCount" [WomensClothingCount]="womensCount" ></app-filter>
       </nav>    
       <main class="col-9">
          <div class="d-flex flex-wrap overflow-auto" style="height: 500px;">
             <div *ngFor="let item of products" class="card m-2 p-2" style="width: 200px;">
                 <img [src]="item.image" height="200" class="card-img-top">
                 <div class="card-header" style="height: 170px;">
                    <p>{{item.title}}</p>
                 </div>
                 <div class="card-footer">
                    <p>{{item.price}}</p>
                 </div>
             </div>
          </div>
       </main>
   </section>
</div>
