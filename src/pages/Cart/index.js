import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Item>
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
              alt="Têncis muito massa"
            />
            <InfoProduct>
              <TitleProduct>Tênis muito massa</TitleProduct>
              <Price>R$ 139,00</Price>
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
              <Amount>3</Amount>
              <ButtonIncrement>
                <Ant name="pluscircleo" color="#7159c1" size={20} />
              </ButtonIncrement>
            </AmountContainer>
            <SubPrice>R$ 415,00</SubPrice>
          </SubTotal>
        </Item>
        <Item>
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
              alt="Têncis muito massa"
            />
            <InfoProduct>
              <TitleProduct>Tênis muito massa</TitleProduct>
              <Price>R$ 139,00</Price>
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
              <Amount>3</Amount>
              <ButtonIncrement>
                <Ant name="pluscircleo" color="#7159c1" size={20} />
              </ButtonIncrement>
            </AmountContainer>
            <SubPrice>R$ 123,00</SubPrice>
          </SubTotal>
        </Item>
        <Item>
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
              alt="Têncis muito massa"
            />
            <InfoProduct>
              <TitleProduct>Tênis muito massa</TitleProduct>
              <Price>R$ 139,00</Price>
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
              <Amount>3</Amount>
              <ButtonIncrement>
                <Ant name="pluscircleo" color="#7159c1" size={20} />
              </ButtonIncrement>
            </AmountContainer>
            <SubPrice>R$ 123,00</SubPrice>
          </SubTotal>
        </Item>
      </Products>
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
