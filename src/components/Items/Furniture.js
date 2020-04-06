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
    name: "Crystal Furnitech Claris Charger Bed Engineered Wood Queen Box Bed",
    img: "https://rukminim1.flixcart.com/image/128/128/jkcwakw0/bed/w/t/8/queen-na-particle-board-fk-531-crystal-furnitech-dark-elm-original-imaf7qdwhxgzprsx.jpeg?q=70",
    price: 21200
  },
  {
    id: 2,
    name: "Flipkart Perfect Homes Opera Engineered Wood Queen Box Bed (Brown)",
    img:  "https://rukminim1.flixcart.com/image/128/128/k1118cw0/bed/6/g/s/queen-grey-particle-board-bdqu1fd001-flipkart-perfect-homes-grey-original-imafkpf52gttzzst.jpeg?q=70",
    price: 25599
  },


  {
    id: 3,
    name: "Nilkamal Edwina 02 Engineered Wood Queen Bed  (Finish Color - Brown)",
    img: "https://rukminim1.flixcart.com/image/128/128/jdhp47k0/bed/q/z/t/queen-na-particle-board-iedwin02quebedbrn-nilkamal-brown-original-imaf2az4vw6g3g3t.jpeg?q=70",
    price: 17990
  },

  {
    id: 4,
    name: "HomeTown Swirl Engineered Wood King Box Bed  (Denver Oak & Urban Teak)",
    img: "https://rukminim1.flixcart.com/image/128/128/k8ho0i80/bed/h/r/t/king-na-particle-board-600364353001-hometown-denver-oak-urban-original-imafqhpyu8d6fudx.jpeg?q=70",
    price: 19999
  },


  {
    id: 5,
    name: "Muebles Casa Leatherette 3 Seater Sofa  (Finish Color - Beige)",
    img: "https://rukminim1.flixcart.com/image/128/128/jvtujrk0/sofa-sectional/z/w/h/light-brown-na-colton-letheratte-light-brown-three-seater-sofa-original-imafghzgwdznm33t.jpeg?q=70",
    price: 17790
  },
  {
    id: 6,
    name: "Flipkart Perfect Homes Kotor Fabric 4 Seater Sofa  (Finish Color - Grey)",
    img: "https://rukminim1.flixcart.com/image/128/128/jk2w7m80/sofa-sectional/p/p/k/grey-polycotton-ul-sf-2l-8687-wells-sofa-grey-perfect-homes-by-original-imaf7ghhwbhrxmzk.jpeg?q=70",
    price: 20990
  },
  {
    id: 7,
    name: "Muebles Casa Leatherette 3 Seater Sofa  (Finish Color - Tan Brown)",
    img: "https://rukminim1.flixcart.com/image/128/128/jvv9zm80/sofa-sectional/v/5/g/beige-cotton-blend-croma-3-seater-sofa-in-beige-brown-color-original-imafghzgtnyjpaum.jpeg?q=70",
    price: 17790
  },
  {
    id: 8,
    name: "Muebles Casa Leatherette 6 Seater Sofa  (Finish Color - Beige)",
    img: "https://rukminim1.flixcart.com/image/128/128/jmgmmq80/sofa-sectional/y/j/f/beige-leatherette-marco-rhs-l-shape-muebles-casa-beige-original-imaf9cxzhq7j4uhc.jpeg?q=70",
    price: 33290
  },
  {
    id: 9,
    name: "Crystal Furnitech Engineered Wood Coffee Table  (Finish Color - wallnut + wenge)",
    img: "https://rukminim1.flixcart.com/image/128/128/jgv5jm80/coffee-table/b/d/e/particle-board-fk-504-crystal-furnitech-wallnut-wenge-original-imaf49qffp4df8qj.jpeg?q=70",
    price: 3790
  },
  {
    id: 10,
    name: "Induscraft Sheesham Wood Coffee Table  (Finish Color - Honey-Brown)",
    img: "https://rukminim1.flixcart.com/image/128/128/jsaocy80/coffee-table/5/e/9/rosewood-sheesham-inlct21-induscraft-honey-brown-original-imafdwgayz4fqahr.jpeg?q=70",
    price: 13290
  },
  {
    id: 11,
    name: "RoyalOak Stacy Solid Wood Coffee Table  (Finish Color - Brown)",
    img: "https://rukminim1.flixcart.com/image/128/128/jufu4y80/coffee-table/h/u/3/rubber-wood-ct6001-royaloak-brown-original-imaffhy7byfdqavz.jpeg?q=70",
    price: 5590
  },
  {
    id: 12,
    name: "Flipkart Perfect PureWood Sheesham Table  (Finish Color - Espresso) ",
    img: "https://rukminim1.flixcart.com/image/128/128/jkmwdjk0/coffee-table/n/z/c/rosewood-sheesham-ctss005sw5esd3-flipkart-perfect-homes-espresso-original-imaf7y54g468a7wb.jpeg?q=70",
    price: 14190
  },
  {
    id: 13,
    name: "Flipkart Perfect Homes Luzon Metal 6 Seater Dining Set  (Finish Color - Black)",
    img: "https://rukminim1.flixcart.com/image/128/128/jf2uqa80/dining-set/h/f/g/6-seater-black-tempered-glass-ds6m1bla06ac1f-perfect-homes-by-original-imaf3mamraxnqfee.jpeg?q=70",
    price: 16490
  },
  {
    id: 14,
    name: "Flipkart Perfect Homes Atiu Metal 4 Seater Dining Set  (Finish Color - Black) ",
    img: "https://rukminim1.flixcart.com/image/128/128/jf2uqa80/dining-set/f/v/k/4-seater-black-tempered-glass-ds4c1bla06ac2f-perfect-homes-by-original-imaf3mamcwvfgaby.jpeg?q=70",
    price: 14390
  },
  {
    id: 15,
    name: "@home by Nilkamal Solid Wood 6 Seater Dining Set  (Finish Color - Brown)",
    img: "https://rukminim1.flixcart.com/image/128/128/jm573ww0/dining-set/h/f/u/6-seater-brown-rubber-wood-fidsfernkit6strbwn-home-by-nilkamal-original-imaf9499nhsye69j.jpeg?q=70",
    price: 25090
  },
  {
    id: 16,
    name: "Flipkart Perfect Homes Wood 4 Seater Dining Set  (Finish Color - Honey Teak)",
    img: "https://rukminim1.flixcart.com/image/128/128/jjolt3k0/dining-set/p/6/b/4-seater-beige-acacia-kasia-ds4achs0505d2-flipkart-perfect-homes-original-imaf776tspyyvfaz.jpeg?q=70",
    price: 20590
  }

  
 
];


class Furniture extends Component {
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

export default Furniture;