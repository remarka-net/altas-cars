import React from 'react';
import { List } from 'semantic-ui-react';
import HeaderLink from './HeaderLink';

const ItemList1 = () => (
  <List>
    <List.Item>
      <List.Header>
          <HeaderLink className="footer_headline" to="/ServicesPage">
               Регламент ТО
          </HeaderLink>
      </List.Header>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Сроки ТО
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Проверка авто
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      ТО по километражу
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Нормы тех. обслуживания
      </HeaderLink>
    </List.Item>
  </List>
);

export default ItemList1;
