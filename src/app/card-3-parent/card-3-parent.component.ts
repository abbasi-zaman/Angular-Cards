import { Component } from '@angular/core';
import { Card3ChildComponent } from "../card-3-chaild/card-3-child.component";

@Component({
  selector: 'app-card-3-parent',
  imports: [Card3ChildComponent, Card3ChildComponent],
  templateUrl: './card-3-parent.component.html',
  styleUrl: './card-3-parent.component.css'
})
export class Card3ParentComponent {
  post={name: 'John Smith' ,title:'biking' , imageurl:'./../assets/images/biking.jpeg' , description:'biking Lorem ipsum dolor sit amet, consectetur adipiscing elit \
    Phasellus nec iaculis mauris.' }
//Two Way Binding
name = '';
}
