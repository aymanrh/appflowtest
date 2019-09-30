import { Component, Input } from '@angular/core';

/**
 * Generated class for the HorizontalScrollComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'horizontal-scroll',
  templateUrl: 'horizontal-scroll.html',
  styleUrls: ['horizontal-scroll.scss']
})
export class HorizontalScrollComponent {

  @Input()
  items: {image: string , title: string}[];

  constructor() {

  }

}
