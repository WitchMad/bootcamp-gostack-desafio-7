import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

// O cart vem como uma propriedade
function Header({ navigation, cartSize }) {
  Header.propTypes = {
    navigation: PropTypes.shape().isRequired,
    cartSize: PropTypes.number.isRequired,
  };

  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoContainer>
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
