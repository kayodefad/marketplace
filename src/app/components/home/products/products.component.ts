import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() title!: string;
  @Input() background!: string;
  faHeart = faHeart;

  items = [
    {
      category: 'Shirt',
      img: 'shirt_1',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 12,
    },
    {
      category: 'Shirt',
      img: 'shirt_2',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 16,
    },
    {
      category: 'Shirt',
      img: 'shirt_3',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 18,
    },
    {
      category: 'Shirt',
      img: 'shirt_4',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 32,
    },
    {
      category: 'Shirt',
      img: 'shirt_5',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 22,
    },
    {
      category: 'Shirt',
      img: 'shirt_6',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 56,
    },
    {
      category: 'Shirt',
      img: 'shirt_7',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 10,
    },
    {
      category: 'Shirt',
      img: 'shirt_8',
      desc: "Essentials Men's Short-Sleeve Crewneck T-Shirt",
      price: 14,
    },
  ];
}
