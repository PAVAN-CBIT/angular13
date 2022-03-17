 “app.module.ts”
=======================================================================================================================================================================
import { MatFormFieldModule } from
'@angular/material/form-field';
import { MatInputModule } from
'@angular/material/input';
@NgModule({
 imports: [
 BrowserModule,
 FormsModule,
 BrowserAnimationsModule,
 MatFormFieldModule,
 MatInputModule
 ],
})
==========================================================================================================================================
“component.html”
=====================================================================================================================================================
<div class="container">
 <h2>Material Demo</h2>
 <mat-form-field appearance="legacy"
class="block-style" >
 <mat-label>User Name</mat-label>
 <input [(ngModel)]="UserName"
type="text" matInput placeholder="Enter
User Name">
 <mat-hint>Name in Block Letters</mathint>
 <mat-error>Name Required</materror>
 </mat-form-field>
 <h3>Hello ! {{UserName}} </h3>
</div>
======================================================================================================================================
 Component.css
================================================================================================================================================
.block-style {
 width: 100%;
}
