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
  border: 2px solid black;
  padding: 0px 0px;
  width: 100%;
  height: 50px;

  padding: 8px;
`;
export const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  position: absolute;
  right: 10px;
  top: 8px;
`;
