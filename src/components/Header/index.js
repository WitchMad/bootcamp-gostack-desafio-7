import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, Logo, BasketContainer, ItemCount } from './styles';

// O cart vem como uma propriedade
function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

// A função connect recebe o state inteiro do redux
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
