import React from 'react';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: [],
    };
  }

  render() {
    return (
      <section>
        <p>Shopping Cart</p>
        <ul>
          { this.props.phoneId.map((phoneId, i) => (
          <li className="phones__btn-buy-wrapper"
             key={i}>{phoneId}
            <botton className="btn btn-success"
              onClick={() => {
                this.props.deleteFromBasket(i)
              }}>
                X
              </botton>
            </li>
        )) }
        </ul>
      </section>
    );
  };
}

export default Basket;
