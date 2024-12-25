import { Component } from '@angular/core';
import { post } from '../models/post';
import { Card6ChildNgifComponent } from "../card-6-child-ngif/card-6-child-ngif.component";

@Component({
  selector: 'app-card-6-parent-ngif',
  imports: [Card6ChildNgifComponent],
  templateUrl: './card-6-parent-ngif.component.html',
  styleUrl: './card-6-parent-ngif.component.css'
})
export class Card6ParentNgifComponent {
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
