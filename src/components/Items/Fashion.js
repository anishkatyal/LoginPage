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
    name: "Jack & Jones Men Round Red T-Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/jxdkpzk0/t-shirt/n/d/c/xl-12163502-jack-jones-original-imafhuuajk4byvaw.jpeg?q=70",
    price: 650
  },
  {
    id: 2,
    name: "Flying Machine Men Round T-shirt",
    img:  "https://rukminim1.flixcart.com/image/128/128/jm9hfgw0/t-shirt/c/p/d/m-fmts8205-flying-machine-original-imaf95fnzyhekkcn.jpeg?q=70",
    price: 750
  },


  {
    id: 3,
    name: "ADIDAS Men Round Neck Blue T-Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/k7p37gw0/t-shirt/m/n/b/m-fl0241-adidas-original-imafpvgfp5dyt64y.jpeg?q=70",
    price: 1599
  },

  {
    id: 4,
    name: "United Colors of Benetton Men Polo T-Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/k0lbdzk0/t-shirt/v/n/f/m-17a3d89j1241i-252-united-colors-of-benetton-original-imafkcnhxyre9gjq.jpeg?q=70",
    price: 599
  },


  {
    id: 5,
    name: "Louis Philippe Men Printed Casual Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/k4vmxzk0/shirt/v/v/f/38-lrsfcssfk07750-louis-philippe-original-imafnzkey6zbfn5d.jpeg?q=70",
    price: 1699
  },
  {
    id: 6,
    name: "Arrow Men Solid Formal Shirt, Grey",
    img: "https://rukminim1.flixcart.com/image/128/128/jvtujrk0/shirt/w/g/z/38-ares0857b-arrow-original-imafghrhu2kpknnx.jpeg?q=70",
    price: 1399
  },
  {
    id: 7,
    name: "Raymond Men Solid Formal Cut Away Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/k4k7f680/shirt/u/t/e/40-rmsz09871-k8-raymond-original-imafneqms8zceadz.jpeg?q=70",
    price: 999
  },
  {
    id: 8,
    name: "Mufti Men Printed Casual Spread Shirt",
    img: "https://rukminim1.flixcart.com/image/128/128/k2w6xe80/shirt/z/z/h/l-fls-0179-06-khaki-mufti-original-imafm4yqr2gncehp.jpeg?q=70",
    price: 1199
  },
  {
    id: 9,
    name: "Wrangler Slim Men Dark Blue Jeans",
    img: "https://rukminim1.flixcart.com/image/128/128/jxxkvww0/jean/n/g/c/32-w34947w22smu-wrangler-original-imafgad5gx3ysexv.jpeg?q=70",
    price: 2299
  },
  {
    id: 10,
    name: "Flying Machine Skinny Men Light Blue Jeans",
    img: "https://rukminim1.flixcart.com/image/128/128/k7tdj0w0/jean/z/5/z/32-fmjno1121-flying-machine-original-imafpwhyzbgmbhgs.jpeg?q=70",
    price: 2499
  },
  {
    id: 11,
    name: "Levi's Tapered Fit Men Navy Blue Jeans",
    img: "https://rukminim1.flixcart.com/image/128/128/k66sh3k0/jean/w/v/h/32-36087-0269-levi-s-original-imafzzw5hyrh3rym.jpeg?q=70",
    price: 1699
  },
  {
    id: 12,
    name: "Metronaut Slim Men Sky Blue Jeans",
    img: "https://rukminim1.flixcart.com/image/128/128/k0zlsi80/jean/p/8/s/32-maw19jn053-metronaut-original-imafkmgssjwsmghj.jpeg?q=70",
    price: 899
  },
  {
    id: 13,
    name: "Nike TODOS Running Shoe For Men  (White)",
    img: "https://rukminim1.flixcart.com/image/128/128/k3xcdjk0pkrrdj/shoe/y/z/p/9-todos-nike-shofenfkwgk6ckht-original-imafjjr4ggpsa4z2.jpeg?q=70",
    price: 2726
  },
  {
    id: 14,
    name: "ADIDAS Sedna M Running Shoes For Men  (Grey)",
    img: "https://rukminim1.flixcart.com/image/128/128/k3xcdjk0pkrrdj/shoe/b/f/c/9-sedna-m-adidas-shofhwpegsxqbge9-original-imafgmuzyrgfzvmg.jpeg?q=70",
    price: 1719
  },
  {
    id: 15,
    name: "Puma Sneakers For Men  (Grey)",
    img: "https://rukminim1.flixcart.com/image/128/128/k3t21zk0/shoe/m/f/w/371232-7-puma-castlerock-original-imafmuk9jw6hxkzp.jpeg?q=70",
    price: 1750
  },
  {
    id: 16,
    name: "Woodland Casuals For Men",
    img: "https://rukminim1.flixcart.com/image/128/128/jc6jl3k0/shoe/2/v/4/ogc-1496114-42-woodland-blue-peacoat-original-imaffdcfdhgrpxhq.jpeg?q=70",
    price: 2199
  }

  
 
];


class Fashion extends Component {
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

export default Fashion;