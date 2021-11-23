import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { title, image, price, id, handleClick } = this.props;
    return (
      <div className="product" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product-detail/${id}` }
        >
          { title }
        </Link>
        <img src={ image } alt={ title } />
        <p>
          R$:
          { price }
        </p>
        <button
          type="button"
          id={ id }
          onClick={ handleClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Products.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Products;
