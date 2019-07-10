import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  itemCount=0;
  @Input("cartQty") cartQty;
  ngOnInit() {
  }
  @Input("value") item;
  @Output() buy = new EventEmitter();
  currentTab=0;
  isTabSelected(tabIndex){
    return this.currentTab===tabIndex;
  }
  changeTab(event,tabIndex)
  {
    event.preventDefault();
    this.currentTab=tabIndex;
  }
  handleBuy(event)
  {
    this.itemCount++;
    // console.log(this.itemCount);
    this.buy.emit({ item: this.item });
  }
}
