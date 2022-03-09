 fordemo.component.ts
 ==================================================================================================================================================================================
 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  categories:any[] = [];

  GetCategories(){
     fetch('http://fakestoreapi.com/products/categories&#39;)
     .then(response=> response.json())
     .then(data=> {
        data.unshift("all")
        this.categories = data;
     })
  }

  constructor() { }

  ngOnInit(): void {
    this.GetCategories();
  }

}
=====================================================================================================================================================================================
fordemo.component.html
==================================================================================================================================================================================
<div class="container-fluid">
    <h2>NgFor Demo</h2>
    <div class="row">
        <div class="col">
            <ol>
                <li *ngFor="let item of categories">
                    {{item}}
                </li>
            </ol>
        </div>
        <div class="col">
            <select class="form-select">
                <option *ngFor="let item of categories">
                    {{item}}
                </option>
            </select>
        </div>
        <div class="col">
            <div class="p-4" style="height: 80px; border:2px solid black; overflow: auto;">
                <ul class="list-unstyled">
                    <li *ngFor="let item of categories">
                        <input type="checkbox"> {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of categories">
                        <td>{{item}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
