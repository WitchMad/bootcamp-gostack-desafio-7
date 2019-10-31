import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px;
  background: #fff;
  border-radius: 4px;
`;
export const Products = styled.ScrollView.attrs({
  vertical: true,
})`
  max-height: 340px;
`;
export const Item = styled.View`
  flex: 1;
  padding: 10px;
`;
export const Product = styled.View`
  flex-direction: row;
  flex: 1;
`;
export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
`;
export const InfoProduct = styled.View`
  justify-content: center;
`;
export const TitleProduct = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #666;
`;
export const Price = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;
export const ButtonRemove = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin-left: auto;
`;
export const SubTotal = styled.View`
  margin-top: 10px;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;
  justify-content: space-between;
  border-radius: 4px;
`;
export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonDecrement = styled.TouchableOpacity``;
export const ButtonIncrement = styled.TouchableOpacity``;
export const Amount = styled.Text`
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  margin: 0 5px;
  font-size: 16px;
`;
export const SubPrice = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 18px;
`;
export const TotalContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #c9c9c9;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const TotalTitle = styled.Text`
  font-size: 14px;
`;
export const TotalPrice = styled.Text`
  font-size: 34px;
  color: #000;
  font-weight: bold;
`;
export const ButtonFinalize = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const ButtonFinalizeText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
