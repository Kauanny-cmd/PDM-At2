import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { DataProps } from '../../data/transactions';

type props = {
  index?: number;
}

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content:center;
  align-items:center;
`;

export const ViewContainer = styled.View`
 align-items: center;
`;

export const Title = styled.Text`
  font-size:30px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 40px;
  margin-bottom:40px;
  color:${({ theme }) => theme.colors.shape}
  padding:10px 20px;
  text-align:center;
`;

export const Touch = styled.TouchableOpacity`
  padding: 10px 20px;
  background:${({ theme }) => theme.colors.background};
  border-radius: 10px;
`
export const TitleTouch = styled.Text`
  font-size:16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color:${({ theme }) => theme.colors.text_dark};
  padding:10px 20px;
  text-align:center;
`;