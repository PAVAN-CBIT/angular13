Materialsdemo.html
==========================================================
<div class="container-fluid">
  
<h2>Bootstrap UI</h2>
<form action="" class="w-25">
    <div class="mt-2 mb-2">
        <label class="form-label" for="UserName">User Name</label>
        <div>
            <input name="UserName" class="form-control" type="text">
        </div>
    </div>
</form>
<h2>Material UI</h2>
<form action="" class="w-25">
    <mat-form-field appearance="standard">
        <mat-label>User Name</mat-label>

     <input  type="text"  matInput placeholder="Enter your name">
    </mat-form-field>
</form>
<h2>Hello  ! </h2>
</div>
  =====================================================================================================
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
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body class="mat-typography">
  <app-materialsdemo></app-materialsdemo>

</body>
</html>
=====================================================================================================================
    app.module.ts
    =================================================================================================
    import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { SComponent } from './components/s/s.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialsdemoComponent } from './components/materialsdemo/materialsdemo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ElectronicsComponent,
    SComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    FilterComponent,
    MaterialdemoComponent,
    MaterialComponent,
    MaterialsdemoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [MaterialsdemoComponent]
})
export class AppModule { }

