import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <LocaleToggle />
      </section>
      <section  style={{backgroundColor: "blue"}}>
        <hr />
        <p>Footer</p>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://google.com">Pavel</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
