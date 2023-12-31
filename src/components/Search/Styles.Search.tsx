import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  position: relative;
  width: 90%;
  margin-top: 10px;
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
export const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  position: absolute;
  right: 10px;
  top: 12px;
`;
