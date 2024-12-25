import { Component } from '@angular/core';
import { Card5ChildNgFortolistComponent } from "../card-5-child-ng-fortolist/card-5-child-ng-fortolist.component";
import { post } from '../models/post';

@Component({
  selector: 'app-card-5-parent-ng-fortolist',
  imports: [Card5ChildNgFortolistComponent],
  templateUrl: './card-5-parent-ng-fortolist.component.html',
  styleUrl: './card-5-parent-ng-fortolist.component.css'
})
export class Card5ParentNgFortolistComponent {
  posts :post[] = [
    {
    name:'Mohammad Abbasi',
    title:'tree',
    imageurl:'./../assets/images/tree.jpeg',
    description:'tree Lorem ipsum dolor sit amet, consectetur adipiscing elit \
     Phasellus nec iaculis mauris.' ,
     show:true
   },
   {
    name:'Pegah Abbasi ',
    title:'biking',
    imageurl:'./../assets/images/biking.jpeg',
    description:'biking Lorem ipsum dolor sit amet, consectetur adipiscing elit \
     Phasellus nec iaculis mauris.' ,
     show:false
   },
   {
    name:'Mahdi Abbasi',
    title:'mountain',
    imageurl:'./../assets/images/mountain.jpeg',
    description:'mountain Lorem ipsum dolor sit amet, consectetur adipiscing elit \
     Phasellus nec iaculis mauris.' ,
     show:true
   },
  ]
}
