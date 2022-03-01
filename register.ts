 register.component.ts
=====================================================================================

import { Component } from "@angular/core";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent
{
    title:string = 'Register User';
}


===================================================================================
register.component.html
======================================================================

<div id="container">
    <form>
        <h3><span class="bi bi-person-fill"></span>{{title}}</h3>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" class="form-control"></dd>
            <dt>Password</dt>
            <dd><input type="password" class="form-control"></dd>
            <dt>Email</dt>
            <dd><input type="email" class="form-control"></dd>
        </dl>
        <button class="btn btn-primary w-100">Register</button>
    </form>
  </div>
          
          ===========================================================================
          register.component.css
          =======================================================================================
          
          /* You can add global styles to this file, and also import other style files */
@import  '../../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
       
          ===============================================================================
          index.html
          =================================================================================
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
  <app-register></app-register>
</body>
</html>

          
