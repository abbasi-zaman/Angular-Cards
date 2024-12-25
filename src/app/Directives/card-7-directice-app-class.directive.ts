////>> Directice --//Renderer -- //HostBinding  --//HostListener
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appCard7DirecticeAppClass]'
})
export class Card7DirecticeAppClassDirective {
  // constructor(private eleref :ElementRef , private renderer :Renderer2) 
  // {
  ////>> Learning  Directice
  // this.eleref.nativeElement.style.background ='green';
  
  ////or
  ////>> Learning Renderer 
  
  //this.renderer.setStyle(this.eleref.nativeElement,'background','green')
  //}

  ////>>>>**Learning @HostListener ->use renderer
  // @HostListener('mouseenter') onMouseOver1(){
  //   this.renderer.setStyle(this.eleref.nativeElement,'background','red')
  // }
  // @HostListener('mouseleave') onMouseOut1(){
  //   this.renderer.setStyle(this.eleref.nativeElement,'background','yellow')
  // }

  ////>>Learning @HostBinding -> Not using  ElementRef & Renderer & Inject To constructor 
  @HostBinding('style.background') mybackground: string ='green';
  
  ////>>>>Learning @HostListener ->use HostBinding
  @HostListener('mouseenter') onMouseOver2(){
    this.mybackground= 'red';
  }
  @HostListener('mouseleave') onMouseOut2(){
    this.mybackground= 'yellow';
  }
}
