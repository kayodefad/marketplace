import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.3s', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ImgGalleryComponent {
  faHeart = faHeart;
  tabs = [
    { title: 'Tab 1', image: 'assets/images/shirts/shirt_1/thumb_1.png' },
    { title: 'Tab 2', image: 'assets/images/shirts/shirt_1/thumb_2.png' },
    { title: 'Tab 3', image: 'assets/images/shirts/shirt_1/thumb_3.png' },
    { title: 'Tab 4', image: 'assets/images/shirts/shirt_1/thumb_4.png' },
  ];
  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
