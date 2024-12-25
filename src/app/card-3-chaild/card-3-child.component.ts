import { Component, Input } from '@angular/core';
 //Two Way Binding
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-3-child',
  imports: [FormsModule],
  templateUrl: './card-3-child.component.html',
  styleUrl: './card-3-child.component.css'
})
export class Card3ChildComponent {
  @Input() postname='';
  @Input() posttitle='';
  @Input() postimageurl='';
  @Input() postdescription='';
 //Two Way Binding
 name = '';
}
