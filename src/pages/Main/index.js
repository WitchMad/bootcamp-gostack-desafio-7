import React, { Component } from 'react';
// Conecta o componente com o estado do redux
import { connect } from 'react-redux';
import { Text } from 'react-native';
import numeral from 'numeral';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  List,
  Item,
  ProductImage,
  ButtonAdd,
  ButtonAddText,
  Price,
  ButtonView,
  Amount,
} from './styles';
import api from '../../services/api';
import 'numeral/locales/pt-br';

class Main extends Component {
  state = {
    products: [],
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

  handleAddProduct = product => {
    // Serve para disparar uma action no redux
    const { dispatch } = this.props;

    dispatch({
      // Type tem que estar declarado no reducer
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <ProductImage source={{ uri: item.image }} alt={item.title} />
              <Text>{item.title}</Text>
              <Price>{item.priceFormatted}</Price>
              <ButtonAdd onPress={() => this.handleAddProduct(item)}>
                <ButtonView>
                  <Icon name="add-shopping-cart" color="#fff" size={16} />
                  <Amount>3</Amount>
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

export default connect()(Main);
