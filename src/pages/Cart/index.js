import React from 'react';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Ant from 'react-native-vector-icons/AntDesign';
import numeral from 'numeral';
import {
  Container,
  Products,
  Item,
  Product,
  ProductImage,
  InfoProduct,
  TitleProduct,
  Price,
  ButtonRemove,
  SubTotal,
  AmountContainer,
  ButtonDecrement,
  ButtonIncrement,
  Amount,
  SubPrice,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  ButtonFinalize,
  ButtonFinalizeText,
  CartEmpty,
  CartEmptyText,
} from './styles';
import 'numeral/locales/pt-br';
import * as CartActions from '../../store/modules/cart/actions';

numeral.locale('pt-br');

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }
  return (
    <Container>
      {cart.length === 0 ? (
        <CartEmpty>
          <Ant name="shoppingcart" size={70} color="#666" />
          <CartEmptyText>Seu carrinho está vazio...</CartEmptyText>
        </CartEmpty>
      ) : (
        <Products
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <Product>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                  alt={item.title}
                />
                <InfoProduct>
                  <TitleProduct>{item.title}</TitleProduct>
                  <Price>{item.priceFormatted}</Price>
                </InfoProduct>
                <ButtonRemove onPress={() => removeFromCart(item.id)}>
                  <Icon name="trash-can" size={20} color="#7159c1" />
                </ButtonRemove>
              </Product>
              <SubTotal>
                <AmountContainer>
                  <ButtonDecrement onPress={() => decrement(item)}>
                    <Ant name="minuscircleo" color="#7159c1" size={20} />
                  </ButtonDecrement>
                  <Amount>{item.amount}</Amount>
                  <ButtonIncrement onPress={() => increment(item)}>
                    <Ant name="pluscircleo" color="#7159c1" size={20} />
                  </ButtonIncrement>
                </AmountContainer>
                <SubPrice>
                  {numeral(item.amount * item.price).format('$ 0,0.00')}
                </SubPrice>
              </SubTotal>
            </Item>
          )}
        />
      )}
      <TotalContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalPrice>{total}</TotalPrice>
        <ButtonFinalize>
          <ButtonFinalizeText>Finalizar o Pedido</ButtonFinalizeText>
        </ButtonFinalize>
      </TotalContainer>
    </Container>
  );
}

// Pega as informações do state e mapeia como propriedade do componente
const mapStateToProps = state => ({
  cart: state.cart,
  total: numeral(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ).format('$ 0,0.00'),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
