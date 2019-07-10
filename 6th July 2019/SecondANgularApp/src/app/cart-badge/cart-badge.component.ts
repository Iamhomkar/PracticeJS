import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  @Output() 
  cartVisibility = new EventEmitter();
  @Input() value;
  isCartVisible=true;
  constructor() { }

  ngOnInit() {
  }
  showCart(event)
  {
    // console.log("before........"+this.isCartVisible)
    if(this.isCartVisible)
    {
      this.isCartVisible=false;
    }else
    {
      this.isCartVisible=true;
    }
    // console.log("after........"+this.isCartVisible)
    this.cartVisibility.emit({visible:this.isCartVisible});
  }
}
