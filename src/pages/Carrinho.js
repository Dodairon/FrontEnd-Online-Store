import React from 'react';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('cartItems')),
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
  }

  deleteCard({ target }) {
    const { products } = this.state;
    const name = target.parentNode.parentNode.firstChild.innerText;
    console.log(name);
    const i = products.findIndex((card) => card.title === name);
    products.splice(i, 1);
    this.setState({ products });
    localStorage.setItem('cartItems', JSON.stringify([...products]));
  }

  changeQtd({ target }) {
    const operator = target.id;
    const { products } = this.state;
    const name = target.parentNode.parentNode.id;
    const i = products.findIndex((e) => e.id === name);
    if (operator === '+') {
      products[i].order += 1;
      this.setState({ products });
      localStorage.setItem('cartItems', JSON.stringify([...products]));
    } else {
      if (products[i].order >= 1) products[i].order -= 1;
      this.setState({ products });
      localStorage.setItem('cartItems', JSON.stringify([...products]));
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products !== null && products.length > 0 ? (
          products.map((product) => (
            <div
              data-testid="shopping-cart-button"
              id={ product.id }
              key={ product.id }
              className="product"
            >
              <h4 data-testid="shopping-cart-product-name">{ product.title }</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>
                <i>R$: </i>
                { product.price }
              </p>
              <p data-testid="shopping-cart-product-quantity">
                <i>Qtd.</i>
                { product.order }
              </p>
              <div>
                <button
                  type="button"
                  id="+"
                  onClick={ this.changeQtd }
                  data-testid="product-increase-quantity"
                >
                  +
                </button>
                <button
                  type="button"
                  id="-"
                  onClick={ this.changeQtd }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>
                <button type="button" onClick={ this.deleteCard }>remover</button>
              </div>
            </div>
          ))
        )
          : (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
      </div>
    );
  }
}
//   render() {
//     const { carrinho, total } = this.state;
//     return (
//       <div>
//         {carrinho !== null ? (
//           carrinho.map((item) => (
//             <div key={ item.id }>
//               <p>{ item.id }</p>
//               <h3
//                 data-testid="shopping-cart-product-name"
//               >
//                 {item.title}
//               </h3>
//               <img src={ item.thumbnail } alt={ item.title } />
//               <p>
//                 <i>R$: </i>
//                 { item.price }
//               </p>
//             </div>
//           ))
//         )
//           : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
//         <div>
//           <h2>Resumo do pedido</h2>
//           <h3>
//             <i>Total: </i>
//             { total }
//           </h3>
//           <button type="button">Continuar</button>
//         </div>
//       </div>
// );

Carrinho.propTypes = {
  location: PropTypes.shape({
    ItensCart: PropTypes.shape({}),
  }).isRequired,
};

export default Carrinho;
