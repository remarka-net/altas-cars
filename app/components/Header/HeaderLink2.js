import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  &:active {
    color: #fff;
  }
`;
