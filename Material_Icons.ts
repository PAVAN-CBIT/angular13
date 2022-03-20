app.module.ts
==============================================================================================
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
import { MatNativeDateModule } from '@angular/material/core';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';




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
    MaterialsdemoComponent,

  

    


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule

    


  ],
  providers: [],
  bootstrap: [MaterialsdemoComponent]
})
export class AppModule { }

=============================================================================================================================
materialsdemo.component.html
======================================================================================================
<button>
   
    Home<mat-icon>home</mat-icon>
 </button>


