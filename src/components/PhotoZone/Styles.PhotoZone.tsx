import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  position: relative;
  width: 90%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const SearchInput = styled.TextInput`
  background: #ebebeb;
  border-radius: 5px;

  padding: 0px 0px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #9f9f9f;
  padding: 8px;
`;

export const I = styled(Image)`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 8px;
`;
