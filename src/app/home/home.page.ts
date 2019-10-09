import { Component } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ImageCrop } from 'capacitor-image-crop';
import { NavController } from '@ionic/angular';

const { Camera } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any;

  cropper: ImageCrop;
  src = '';

  constructor(public navCtrl: NavController) {
    this.items = [
      {title: 'test', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 1', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      {title: 'test 2', image: '../assets/imgs/road-sign-361513_960_720.jpg'},
      // {title: 'test 3', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
      // {title: 'test 4', image: '../assets/imgs/arrange.svg'},
    ];
    this.cropper = new ImageCrop();
  }

  showCrop() {
    this.cropper
      .show({
        source: '~/assets/imgs/road-sign-361513_960_720.jpg',
        width: 300,
        height: 300
      })
      .then(v => {
        this.src = v.value;
      });
  }

  async takePhotoAndShowCrop() {
    try {
      await Camera.requestPermissions();
      const result = await Camera.getPhoto({resultType: CameraResultType.Uri});
      const cropped = await this.cropper
        .show({
          source: result.path.replace('file://',''),
          width: 300,
          height: 300
        });
      this.src = cropped.value;
    } catch (e) {

    }
  }
}


