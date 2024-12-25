import { Component } from '@angular/core';
import { Card4ChildInterfaceComponent } from '../card-4-child-interface/card-4-child-interface.component';
import { post } from '../models/post';

@Component({
  selector: 'app-card-4-parent-interface',
  imports: [Card4ChildInterfaceComponent],
  templateUrl: './card-4-parent-interface.component.html',
  styleUrl: './card-4-parent-interface.component.css'
})
export class Card4ParentInterfaceComponent {
 post :post = {
   name:'John Smith',
   title:'biking',
   imageurl:'./../assets/images/biking.jpeg',
   description:'biking Lorem ipsum dolor sit amet, consectetur adipiscing elit \
    Phasellus nec iaculis mauris.' ,
    show:true
  }
}
