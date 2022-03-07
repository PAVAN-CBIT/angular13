switchdemo.component.html
===================================================================================================================================================================================
<div class="container-fluid">
    <div [ngSwitch]="'case4'">
        <div *ngSwitchCase="'case1'">
            Container Case-1
        </div>
        <div *ngSwitchCase="'case2'">
            Container Case-2
        </div>
        <div *ngSwitchCase="'case3'">
            Container Case-3
        </div>
        <div *ngSwitchDefault>
            Container Case Default
        </div>
    </div>
</div>
==============================================================================================================================================================================
switchdemo.component.ts
============================================================================================================================================================================
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

=============================================================================================================================================
index.html
==============================================================================================================================================
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Shopping</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-switchdemo></app-switchdemo>

</body>
</html>
