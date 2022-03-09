fordemo.component.ts
===================================================================================================================================================================================

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {


  MarsObject:any = {};

  GetMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39;)
    .then(response=> response.json())
    .then(data=> {
        this.MarsObject = data;
    })
  }
 
  constructor() { }

  ngOnInit(): void {
    this.GetMarsPhotos();
  }

}

==============================================================================================================================================================================
fordemo.component.html
========================================================================================================================================================================
<div class="container-fluid">
    <h2>Mars Photos</h2>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Photo Id</th>
                <th>Camera Name</th>
                <th>Image</th>
                <th>Rover Name</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of MarsObject.photos">
                <td>{{item.id}}</td>
                <td>{{item.camera.full_name}}</td>
                <td>
                    <img [src]="item.img_src" width="100" height="100">
                </td>
                <td>
                    {{item.rover.name}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
