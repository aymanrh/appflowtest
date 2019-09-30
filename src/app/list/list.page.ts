import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'page-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  icons: string[];
  items: Array<{title: string, note: string, icon: string, showDetails?: boolean}>;
  showDetails = false;
  constructor(public navCtrl: NavController) {
    this.icons = ['../assets/imgs/road-sign-361513_960_720.jpg', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    item.showDetails=!item.showDetails;
    this.items.forEach(i => {
      if (i.title !== item.title) {
          i.showDetails = false;
      }
    });  
  }

  itemDetailsTapped(event, item){
    this.navCtrl.navigateForward(['/details', item.title], {state: {data: item}});
  }
}
