import React from 'react';
import phone1 from '../images/note8.png';
import '../Mobile/Note8.css';
import DashHeader from '../Header/DashHeader';
import DashFooter from '../Footer/DashFooter';
import Items from '../Items/Items';

const Note8 = () => {
    return(
        <div>
            <DashHeader />
            <Items />
            <div className="Note8">
            <img src={phone1} height="300px" width="200px" />
            <button> Add to Cart </button>
            </div>
            <DashFooter />
        </div>
    )
}

export default Note8;