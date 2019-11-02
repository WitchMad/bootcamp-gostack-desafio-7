import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';
// Conecta o componente com o estado do redux
import { useDispatch, useSelector } from 'react-redux';
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
import rocket from '../../assets/animations/1712-bms-rocket.json';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      numeral.locale('pt-br');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: `${numeral(product.price).format('$ 0,0.00')}`,
      }));
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  const amount = useSelector(state =>
    state.cart.reduce((amountValue, product) => {
      amountValue[product.id] = product.amount;
      return amountValue;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    // Serve para disparar uma action no redux
    dispatch(CartActions.addToCartRequest(id));
  }
  return (
    <Container>
      {loading ? (
        <Lottie
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
          source={rocket}
          autoPlay
          loop
        />
      ) : (
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Item>
              <ProductImage source={{ uri: item.image }} alt={item.title} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <ButtonAdd onPress={() => handleAddProduct(item.id)}>
                <ButtonView>
                  <Icon name="add-shopping-cart" color="#fff" size={16} />
                  <Amount>{amount[item.id] || 0}</Amount>
                </ButtonView>
                <ButtonAddText>Adicionar ao Carrinho</ButtonAddText>
              </ButtonAdd>
            </Item>
          )}
        />
      )}
    </Container>
  );
}
