import React, { Component } from 'react';
import { render } from 'react-dom';

import AddCart from "../AddCart";
import DashHeader from '../Header/DashHeader';
import DashFooter from '../Footer/DashFooter';
import Items from '../Items/Items';
import './Grocery.css';

const products = [

 {

    id: 1,
    name: "Surf Excel Easy Wash",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_27070.jpg",
    price: 437
  },

  {
    id: 2,
    name: "Vim Dish Wash Gel",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_18575.jpg",
    price: 134
  },


  {
    id: 3,
    name: "Harpic Toilet Cleaner",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_401161.jpg",
    price: 232
  },

  {
    id: 4,
    name: "Colin Glass Cleaner",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_233781.jpg",
    price: 87
  },


  {
    id: 5,
    name: "Hit Lime Fresh Fragrance ",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_409774.jpg",
    price: 269
  },
  {
    id: 6,
    name: "Parachute Coconut Oil",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_409768.jpg",
    price: 234
  },
  {
    id: 7,
    name: "Tresemme Conditioner",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_63194.jpg",
    price: 194
  },
  {
    id: 8,
    name: "Listerine Mouthwash",
    img: "https://cdn.grofers.com/app/images/products/full_screen/pro_963.jpg",
    price: 135
  }
 
];


class Grocery extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
            
            <div className="grocery"><DashHeader />
            <Items /> 
            <main className="pa3 pa5-ns flex flex-wrap">

            {
          products.map(p => <AddCart key={p.id} {...p} />)
        }
           </main>
              <DashFooter />
              </div>
 
    );
  }
}

export default Grocery;