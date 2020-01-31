import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageNavigationAnimation } from './animations';
var Trianglify = require('trianglify');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ pageNavigationAnimation ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    // Create the Trianglify pattern
    // var pattern = Trianglify({
    //   cell_size: 35,
    //   variance: 1,
    //   x_colors: ['#D16bA5','#C777B9', '#ba83ca', '#aa8fd8', '#9a9ae1', '#8aa7ec', '#79b3f4', '#69bff8', '#52cffe', '#41dfff', '#46eefa', '#5ffbf1'],
    //   // y_colors: 'match_x',
    //   palette: Trianglify.colorbrewer,
    //   stroke_width: 1.51,
    // });

    // // Serialize the SVG object to a String
    // var m = new XMLSerializer().serializeToString(pattern.svg());

    // // Perform the base64 encoding of the String
    // var k = window.btoa(m);

    // // Query the element to set the background image property
    // var element = document.getElementsByClassName('triangles')[0];

    // // Set the background image property, including the encoding type header
    // element.style.backgroundImage = 'url("data:image/svg+xml;base64,' + k + '")';
  }

}
