 animationdemo.component.ts
=======================================================================================================================================================
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationsdemo',
  templateUrl: './animationsdemo.component.html',
  styleUrls: ['./animationsdemo.component.css'],
  animations: [
      trigger('zoom', [
         state('initial', style(
            {
              'width': '100px',
              'height': '100px',
              'transform': 'rotate(0deg)'
            }
         )),
         state('final', style({
           'width': '300px',
           'height': '300px',
           'transform': 'rotate(360deg)'
         })),
         transition('initial=>final', animate(4000)),
         transition('final=>initial', animate(3000))
      ])
  ]
})
export class AnimationsdemoComponent implements OnInit {

  animationState:any = 'initial';
  buttonText:string = 'In';
  constructor() { }

  ngOnInit(): void {
  }
  ZoomClick(){
    this.animationState = (this.animationState=='initial')?'final':'initial';
    this.buttonText = (this.buttonText=='In')?'Out':'In';
  }
  ZoomInClick(){
    this.animationState = 'final';
  }
  ZoomOutClick(){
    this.animationState = 'initial';
  }

}
===================================================================================================================================================================
 animationdemo.component.html
================================================================================================================================================================
<div class="container-fluid text-center">
    <div class="mb-3 mt-3">
        <div class="btn-group">
            <button (click)="ZoomOutClick()" class="btn btn-primary">-</button>
            <button (click)="ZoomClick()" class="btn btn-dark">Zoom {{buttonText}}</button>
            <button (click)="ZoomInClick()" class="btn btn-primary">+</button>
        </div>
    </div>
</div>
<div class="d-flex container-fluid justify-content-center align-items-center" style="height: 400px;">
    <div>
     
        <div>
            <img (mouseover)="ZoomInClick()" (mouseout)="ZoomOutClick()" [@zoom]="animationState" src="assets/shoe.jpg" width="100" height="100">
        </div>
       
    </div>
</div>
