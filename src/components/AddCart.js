import React from 'react';
import './AddCart.css';
const AddCart = ({id, name, img, price }) => {

  return (
  <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
        <img src={img} class="br-100 h4 w4 dib ba b--black-05 pa2" title={name} />
        <h1 className="f3 mb2">{name}</h1>
        <p><b>₹ {price}</b></p>

        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">Add to Cart</button>
      </div>
    </article>
   
  );
};

export default AddCart;