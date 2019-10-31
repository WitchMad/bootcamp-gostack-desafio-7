import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ItemCount>3</ItemCount>
      </BasketContainer>
    </Container>
  );
}
