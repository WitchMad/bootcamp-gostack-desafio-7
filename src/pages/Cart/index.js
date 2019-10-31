import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Ant from 'react-native-vector-icons/AntDesign';
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

function Cart({ cart }) {
  return (
    <Container>
      {cart.length === 0 ? (
        <CartEmpty>
          <Ant name="shoppingcart" size={70} color="#666" />
          <CartEmptyText>Seu carrinho está vazio</CartEmptyText>
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
                <ButtonRemove>
                  <Icon name="trash-can" size={20} color="#7159c1" />
                </ButtonRemove>
              </Product>
              <SubTotal>
                <AmountContainer>
                  <ButtonDecrement>
                    <Ant name="minuscircleo" color="#7159c1" size={20} />
                  </ButtonDecrement>
                  <Amount>{item.amount}</Amount>
                  <ButtonIncrement>
                    <Ant name="pluscircleo" color="#7159c1" size={20} />
                  </ButtonIncrement>
                </AmountContainer>
                <SubPrice>R$ 415,00</SubPrice>
              </SubTotal>
            </Item>
          )}
        />
      )}
      <TotalContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalPrice>R$ 1994,39</TotalPrice>
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
});
export default connect(mapStateToProps)(Cart);
