import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from "./card-1/card-1.component";
import { Card2BindingComponent } from "./card-2-binding/card-2-binding.component";
import { Card3ParentComponent } from "./card-3-parent/card-3-parent.component";
import { Card4ParentInterfaceComponent } from "./card-4-parent-interface/card-4-parent-interface.component";
import { Card5ParentNgFortolistComponent } from "./card-5-parent-ng-fortolist/card-5-parent-ng-fortolist.component";
import { Card6ParentNgifComponent } from "./card-6-parent-ngif/card-6-parent-ngif.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card1Component, Card2BindingComponent, Card3ParentComponent, Card4ParentInterfaceComponent, Card5ParentNgFortolistComponent, Card6ParentNgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'Well Come';
}
