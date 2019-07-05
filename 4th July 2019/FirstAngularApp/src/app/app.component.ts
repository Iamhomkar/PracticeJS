import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  currentTab = 1;
  items= [{
    id:"1",
    name:"Pizza",
    price:100,
    imgPath:"assets/pizza.jpg",
    canBuy:true
  },{
    id:"2",
    name:"Chicken Sizzlers",
    price:200,
    imgPath:"assets/Chicken-Sizzler.jpg",
    canBuy:true
  },{
    id:"4",
    name:"Burger",
    price:300,
    imgPath:"assets/burger.png",
    canBuy:true
  },{
    id:"7",
    name:"Non-Veg",
    price:500,
    imgPath:"assets/Peri-Peri-Fries.jpg",
    canBuy:true
  }]

  isTabSelected(tabIndex){
    // debugger;
    return this.currentTab===tabIndex;
  }
  changeTab(event,tabIndex)
  {
    // debugger;
    event.preventDefault();
    this.currentTab=tabIndex;
  }
}