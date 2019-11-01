import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
export const LogoContainer = styled.TouchableOpacity``;
export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const BasketContainer = styled.TouchableOpacity``;
export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
