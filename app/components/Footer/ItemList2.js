
import React from 'react';
import { List } from 'semantic-ui-react';
import HeaderLink from './HeaderLink';

const ItemList2 = () => (
  <List>
    <List.Item>
      <List.Header>
          <HeaderLink className="footer_headline" to="/ServicesPage">
               О нас
          </HeaderLink>
      </List.Header>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Почему мы?
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
     Контакты
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
     Наши партнеры
      </HeaderLink>
    </List.Item>
  </List>
);

export default ItemList2;
