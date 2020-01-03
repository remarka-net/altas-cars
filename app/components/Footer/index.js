import React from 'react';
import { FormattedMessage } from 'react-intl';

import './index.css';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import ItemList from './ItemList';
import ItemList1 from './ItemList1';
import ItemList2 from './ItemList2';
import Social from './social';

function Footer() {
  return (
    <Wrapper>
      <ItemList />
      <ItemList1 />
      <ItemList2 />
      <Social />
    </Wrapper>
  );
}

export default Footer;
