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
    name: "Apple Iphone 11 128 GB",
    img: "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/g/m/4/iphone-11-64-u-mwlt2hn-a-apple-0-original-imafkg24rhgyf5ch.jpeg?q=70&quot",
    price: 69990
  },
  {
    id: 2,
    name: "Redmi Note 8 Pro 64 GB",
    img:  "https://rukminim1.flixcart.com/image/128/128/k87nxjk0/mobile/g/z/h/redmi-note-8-pro-mzb8309in-original-imafqaf3fp6tmwg3.jpeg?q=70&quot",
    price: 134
  },


  {
    id: 3,
    name: "Samsung Galaxy S9 64 GB",
    img: "https://rukminim1.flixcart.com/image/128/128/jeiukcw0/mobile/q/g/h/samsung-galaxy-s9-plus-sm-g965fzbdins-original-imaf372gzm4hg4eh.jpeg?q=70",
    price: 28999
  },

  {
    id: 4,
    name: "Huawei 20i 128 GB",
    img: "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/9/u/h/20i-128-u-hry-al00ta-honor-4-original-imafgk2ugv6s5xez.jpeg?q=70",
    price: 18999
  },


  {
    id: 5,
    name: "LG 108cm (43 inch) Ultra HD (4K) LED Smart TV  ",
    img: "https://rukminim1.flixcart.com/image/128/128/k1s6ljk0/television/9/b/4/lg-43um7300pta-original-imafha3g5gnbqyqm.jpeg?q=70",
    price: 38999
  },
  {
    id: 6,
    name: "Mi Ultra HD Smart TV 4A Pro 108 cm (43) with Android",
    img: "https://rukminim1.flixcart.com/image/128/128/jqqy6q80/television/c/m/e/mi-l43m5-an-original-imafczyg6hbhrke9.jpeg?q=70",
    price: 21999
  },
  {
    id: 7,
    name: "Samsung Series 4 80cm (32 inch) HD Ready LED Smart TV",
    img: "https://rukminim1.flixcart.com/image/128/128/k0vbgy80pkrrdj/television-refurbished/k/3/g/a-ua32n4305arxxl-samsung-original-imafgxd4kzpddhbp.jpeg?q=70",
    price: 13999
  },
  {
    id: 8,
    name: "Thomson 123.2cm (49 inch) Ultra HD (4K) LED Smart Android",
    img: "https://rukminim1.flixcart.com/image/128/128/jws547k0/television/j/f/n/thomson-49-oath-9000-original-imafhdxb4ycanrzk.jpeg?q=70",
    price: 25500
  },
  {
    id: 9,
    name: "LG 668 L Frost Free Side by Side Refrigerator  (Noble Steel, GC-X247CSAV)",
    img: "https://rukminim1.flixcart.com/image/128/128/jnamvm80/refrigerator-new/u/h/v/gc-x247csav-na-lg-original-imafayk2gxxcueyz.jpeg?q=70",
    price: 159000
  },
  {
    id: 10,
    name: "Whirlpool 300 L Frost Free Triple Door Refrigerator  (Steel Onyx, FP 313D Protton)",
    img: "https://rukminim1.flixcart.com/image/128/128/k3xcdjk0/refrigerator-new/e/t/z/fp-313d-protton-roy-na-whirlpool-original-imafmxvkrc4n9va4.jpeg?q=70",
    price: 37250
  },
  {
    id: 11,
    name: "Samsung 523 L Frost Free Double Door 3 Star (2019) Refrigerator, Easy Clean Steel",
    img: "https://rukminim1.flixcart.com/image/128/128/jgzfv680/refrigerator-new/a/9/z/rt54k6558sl-tl-3-samsung-original-imaev66f5nzgebuu.jpeg?q=70",
    price: 59550
  },
  {
    id: 12,
    name: "Haier 565 L Frost Free Side by Side (2019) Refrigerator, Silver",
    img: "https://rukminim1.flixcart.com/image/128/128/jzsqky80/refrigerator-new/v/b/n/hrf-619ss-na-haier-original-imafjqchjt9dghxs.jpeg?q=70",
    price: 49990
  },
  {
    id: 13,
    name: "LG 8 kg Inverter, Smart diagnosis system Fully Automatic Front Load with In-built Heater Silver",
    img: "https://rukminim1.flixcart.com/image/128/128/jjylw280/washing-machine-new/m/h/a/fh2g6tdnl42-lg-original-imaf7fy9swhzpcqg.jpeg?q=70",
    price: 33999
  },
  {
    id: 14,
    name: "Samsung 8 kg Inverter with Ecobubble Fully Automatic Front Load with In-built Heater White",
    img: "https://rukminim1.flixcart.com/image/128/128/jlcmavk0/washing-machine-new/j/y/y/ww80j4243mw-tl-samsung-original-imaf8hzrqybtzth4.jpeg?q=70",
    price: 32100
  },
  {
    id: 15,
    name: "Whirlpool 8 kg Fully Automatic Front Load White, Power Dry Technology  (Supreme Care)",
    img: "https://rukminim1.flixcart.com/image/128/128/jbfe7ww0-1/washing-machine-new/e/z/g/supreme-care-8014-whirlpool-original-imafysb8zcebezyt.jpeg?q=70",
    price: 29900
  },
  {
    id: 16,
    name: "Bosch 8 kg Fully Automatic Top Load Grey Supersoak Technology (WOE802D0IN)",
    img: "https://rukminim1.flixcart.com/image/128/128/jlph9jk0/washing-machine-new/z/j/g/woe802d0in-bosch-original-imaf8syqdzd7tjvb.jpeg?q=70",
    price: 23000
  }

  
 
];


class Electronics extends Component {
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

export default Electronics;