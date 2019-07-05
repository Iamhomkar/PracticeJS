import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eats';
  cart={}
  cartQty=0;
  cartVisibility=true;
  items= [{
    id:"1",
    name:"Pizza",
    price:100,
    imgPath:"assets/pizza.jpg",
    canBuy:true,
    reviews:[{
      stars:4,
      desc:"lorem ipsum"
    },{
      stars:4,
      desc:"lorem ipsum"
    },{
      stars:4,
      desc:"lorem ipsum"
    }]
  },{
    id:"2",
    name:"Chicken Sizzlers",
    price:200,
    imgPath:"assets/Chicken-Sizzler.jpg",
    canBuy:true,
    reviews:[{
      stars:3,
      desc:"lorem ipsum"
    },{
      stars:4,
      desc:"lorem ipsum"
    },{
      stars:8,
      desc:"lorem ipsum"
    }]
  },{
    id:"4",
    name:"Burger",
    price:300,
    imgPath:"assets/burger.png",
    canBuy:true,
    reviews:[{
      stars:2,
      desc:"lorem ipsum"
    },{
      stars:4,
      desc:"lorem ipsum"
    }]
  },{
    id:"7",
    name:"Non-Veg",
    price:500,
    imgPath:"assets/Peri-Peri-Fries.jpg",
    canBuy:true,
    reviews:[{
      stars:3,
      desc:"lorem ipsum"
    },{
      stars:4,
      desc:"lorem ipsum"
    }]
  }];

  addToCart(event) {
    let { item } = event;
    let { id } = item;
    let itemLine = this.cart[id];
    if (itemLine) {
      itemLine = { item, qty: itemLine.qty + 1 }
    } else {
      itemLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: itemLine }
    this.cartQty = Object.keys(this.cart).length;
  }
  displayCart(event)
  {
    if(event.visible)
    {
      this.cartVisibility=true;
    }else
    {
      this.cartVisibility=false;
    }
  }
}