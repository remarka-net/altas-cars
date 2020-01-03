import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #040638;
  border-bottom: 1px solid #040638;
  padding-bottom: 1em;
  min-width: 135px;

  &:active {
    color: #fff;
  }
`;
