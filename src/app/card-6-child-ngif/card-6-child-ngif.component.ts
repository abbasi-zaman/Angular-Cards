import { Component, Input } from '@angular/core';
import { post } from '../models/post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card7DirecticeAppClassDirective } from '../Directives/card-7-directice-app-class.directive';

@Component({
  selector: 'app-card-6-child-ngif',
  imports: [CommonModule,FormsModule,Card7DirecticeAppClassDirective],
  templateUrl: './card-6-child-ngif.component.html',
  styleUrl: './card-6-child-ngif.component.css'
})
export class Card6ChildNgifComponent {
  @Input() posts :post[] = [];
  searchvalue :string ='';
}
