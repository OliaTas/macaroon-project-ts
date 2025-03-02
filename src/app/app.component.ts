import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';
import { AdvantageType } from './types/advantage.type';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showPresent: boolean = true;
  public phone: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';  

  public advantages: AdvantageType[] = [
    {title: 'Лучшие продукты',
    description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },

    {title: 'Много вкусов',
    description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },

    {title: 'Бисквитное тесто',
    description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    
    {title: 'Честный продукт',
    description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
    
  ]

  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '375293689868',
  }

  constructor(private productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public  scrollTo (target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    // this.cartService.count++;
    this.cartService.addToCart(product.price); 
    alert(`${product.title} добавлен в корзину!`);
  }

  public createOrder(): void {
    if (! this.formValues.productTitle) {
        alert('Заполните пиццу');
        return;
    }
    if (! this.formValues.name) {
        alert('Заполните имя');
        return;
    }
    if (!this.formValues.phone) {
        alert('Заполните телефон');
        return;
    }
    console.log('Спасибо за заказ');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }

    this.phone = '';
  }

  cleanPhoneNumber(event: any) {
    let input = event.target.value;

    input = input.replace(/\D/g, '');

    this.formValues.phone = input;
  }
}
