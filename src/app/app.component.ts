// Bring in Component and OnInit packages from '@angular/core'
import { Component } from '@angular/core';

// Typescript decorator that contains metadata for the component: (selector, templateUrl, styleUrls).
@Component({
  selector: 'app-root',
  // Points to the HTML.
  templateUrl: './app.component.html',
  // Points to the CSS.
  styleUrls: ['./app.component.css']
})

export class AppComponent{

}
