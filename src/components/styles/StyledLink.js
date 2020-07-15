import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, GREEN } from 'constants/AppColours';

export default styled(Link)`
  text-decoration: none;
  color: ${BLACK};
  transition: 0.15s ease;

  &:hover {
    color: ${GREEN};
    text-decoration: none;
  }
`;