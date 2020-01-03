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
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 3px;
  color: #040638;
  padding-bottom: 1em;
  min-width: 35px;

  &:active {
    color: #fff;
  }
`;
