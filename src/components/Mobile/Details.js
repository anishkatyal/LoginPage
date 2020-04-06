import React, {Component} from 'react';
import { render } from '@testing-library/react';

class Details extends Component {
    render() {
        var text = "something:";
        return(
            <div>
                <p>I'm new Component</p>
        <p>Your name is: {this.PaymentResponse.name}, Age is: {this.PaymentResponse.age}</p>
                </div>
        );
    }
}

export default Details;