fordemo.component.ts
=========================================================================================================================================================

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  data:any[] = [
    {Category: "Electronics", Products: ["TV", "Mobile"]},
    {Category: "Footwear", Products:["Nike Casuals", "Lee Boot"]}
  ];
 
  constructor() { }

  ngOnInit(): void {
   
  }

}
======================================================================================================================================================================


fordemo.component.html
================================================================================================================================================================================
<div class="container-fluid">
    <h2>NgFor Nested Demo</h2>
    <div class="row">
        <div class="col">
            <ol>
                <li *ngFor="let item of data">
                    {{item.Category}}
                    <ul>
                        <li *ngFor="let product of item.Products">
                            {{product}}
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
        <div class="col">
            <select class="form-select">
                <optgroup *ngFor="let item of data" [label]="item.Category">
                    <option *ngFor="let product of item.Products">
                      {{product}}
                    </option>
                </optgroup>
            </select>
        </div>
    </div>
</div>
