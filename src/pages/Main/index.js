import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// Conecta o componente com o estado do redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  List,
  Title,
  Item,
  ProductImage,
  ButtonAdd,
  ButtonAddText,
  Price,
  ButtonView,
  Amount,
} from './styles';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import 'numeral/locales/pt-br';

class Main extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
  };

  async componentDidMount() {
    const response = await api.get('/products');
    numeral.locale('pt-br');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: `${numeral(product.price).format('$ 0,0.00')}`,
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    // Serve para disparar uma action no redux
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <ProductImage source={{ uri: item.image }} alt={item.title} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
                <ButtonView>
                  <Icon name="add-shopping-cart" color="#fff" size={16} />
                  <Amount>{amount[item.id] || 0}</Amount>
                </ButtonView>
                <ButtonAddText>Adicionar ao Carrinho</ButtonAddText>
              </ButtonAdd>
            </Item>
          )}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
// Converte actions do componente em props
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
