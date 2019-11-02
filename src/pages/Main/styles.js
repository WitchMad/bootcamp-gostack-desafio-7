import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
  justify-content: center;
  align-items: center;
`;
export const List = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
export const Item = styled.View`
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin-left: 10px;
  max-width: 250px;
`;
export const Title = styled.Text`
  font-weight: bold;
  color: #666;
`;
export const Price = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 12px;
`;
export const ProductImage = styled.Image`
  width: 230px;
  height: 230px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 4px;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;
export const ButtonAddText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
export const ButtonView = styled.View`
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  flex-direction: row;
`;
export const Amount = styled.Text`
  color: #fff;
  margin-left: 3px;
`;
