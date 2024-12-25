import { Component } from '@angular/core';
 //Two Way Binding
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-2-binding',
  //Two Way Binding
  imports: [FormsModule],
  templateUrl: './card-2-binding.component.html',
  styleUrl: './card-2-binding.component.css'
})
export class Card2BindingComponent {
  post={name: 'John Smith' ,title:'biking' , imageurl:'./../assets/images/biking.jpeg' , description:'biking Lorem ipsum dolor sit amet, consectetur adipiscing elit \
        Phasellus nec iaculis mauris.' }
 //Two Way Binding
 name = '';
}


