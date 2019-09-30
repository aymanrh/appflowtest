import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any;
  constructor() {
    this.items = [
      {title: 'test', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 1', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 2', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 3', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 4', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
    ];
  }

}
