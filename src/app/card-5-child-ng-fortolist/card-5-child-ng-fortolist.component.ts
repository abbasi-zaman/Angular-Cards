import { Component, Input, input } from '@angular/core';
import { post } from '../models/post';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-card-5-child-ng-fortolist',
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './card-5-child-ng-fortolist.component.html',
  styleUrl: './card-5-child-ng-fortolist.component.css'
})
export class Card5ChildNgFortolistComponent {
 @Input() posts :post[] = [];
}
