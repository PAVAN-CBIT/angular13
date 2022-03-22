materialsdemo.component.ts
==========================================================================================================================================================
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialsdemo',
  templateUrl: './materialsdemo.component.html',
  styleUrls: ['./materialsdemo.component.css']
})
export class MaterialsdemoComponent implements OnInit {

  products:any[]=[];

    
   
 


 

  constructor() { }

  ngOnInit(): void {
    fetch('http://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data =>{
      this.products = data;
    })
  }

}
==================================================================================================================================================
materialsdemo.component.html
==============================================================================================================================
<div class="container">
    <h2>Lazy Loading - Virtual Scrolling</h2>
    <cdk-virtual-scroll-viewport itemSize="100" class="view-port" style="border: 2px solid red; width: 200px; height: 400px;">
       <div *cdkVirtualFor="let item of products">
    <img src="item.image" alt="" width="150" height="150">
       </div>
    </cdk-virtual-scroll-viewport>
 </div>
 
