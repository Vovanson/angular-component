import { from } from 'rxjs';
import { Component } from '@angular/core';

@Component({
    selector: 'app-component-manually',
    templateUrl: `<h1>Hello Word!
    <p>This template definition spans
              multiple lines1.</p>`,
    styleUrls:['h1 { font-weight: normal; }']
})

export class ComponentManuallyComponent {

}