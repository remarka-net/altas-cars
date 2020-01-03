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
    <div>
    <Wrapper>
      <div id="footer_content">
      <ItemList />
      <ItemList1 />
      <ItemList2 />
      <Social />
      </div>

      <p className="copyright">Copyright © ALTAS Ltd. Все права защищены</p>
    </Wrapper>


    </div>
  );
}

export default Footer;
