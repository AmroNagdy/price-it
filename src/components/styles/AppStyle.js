import styled from 'styled-components';
import { BLACK, WHITE } from '../../constants/AppColours';

const AppStyle = styled.div`
  background-color: ${WHITE};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${BLACK};
`;

export default AppStyle;