import { Component, Input } from '@angular/core';
import { post } from '../models/post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card-4-child-interface',
  imports: [CommonModule,FormsModule],
  templateUrl: './card-4-child-interface.component.html',
  styleUrl: './card-4-child-interface.component.css'
})
export class Card4ChildInterfaceComponent {
@Input() post :post={} as post ;

//Two Way Binding
name = '';
}
