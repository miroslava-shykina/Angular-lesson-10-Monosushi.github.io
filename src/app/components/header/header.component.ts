import { Component, OnInit } from '@angular/core';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

public isFavorite=false;
  public total = 0;
  private basket: Array<IProductResponse> = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  
  removeClass():void{
    if(this.isFavorite == false){
      this.isFavorite=true;
    }else{this.isFavorite=false;
    }
  }

  loadBasket(): void {
    if(localStorage.length > 0 && localStorage.getItem('basket')){
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.total = this.basket
      .reduce((total: number, prod: IProductResponse) => total + prod.count * prod.price, 0);
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }

}
