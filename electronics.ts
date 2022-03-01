

electronics.component.ts
=================================================================================================================================================================

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   title =' Electronics - Home';
}


=========================================================================================================================
electronics.component.html

===============================================================================================================================
<div class="container-fluid">

    <h2>{{title}}</h2>


</div>
=======================================================================================================================
electronics.component.css
======================================================================================================


h2{
    text-align: center;
}



=============================================================================================================
app.module.ts
===================================================================

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ElectronicsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ElectronicsComponent]
})
export class AppModule { }

==========================================================================================================
index.html
====================================================================================
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
  <app-electronics></app-electronics>
</body>
</html>
