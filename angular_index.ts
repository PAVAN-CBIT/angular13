
 home.component.ts
=================================================================================================================================================


import { Component } from '@angular/core';

@Component({
   selector: 'app-home',
   template: `
     <h2>{{title}}</h2>
     <p>Online Shopping Application</p>
   `,
   styles:['h2{text-align:center; background-color:tomato; color:white}']
})
export class HomeComponent
{
    title:string = 'Shopping Home';
}




===========================================================================================================================================================
app.module.ts
=============================================================================================================================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
==============================================================================================================================================================================
index.html
===============================================================================================================================================================
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
  <app-home></app-home>
</body>
</html>
