import React from 'react';
import { List } from 'semantic-ui-react';
import HeaderLink from './HeaderLink';

const ItemList = () => (
  <List>
    <List.Item>
      <List.Header>
          <HeaderLink className="footer_headline" to="/ServicesPage">
               Услуги
          </HeaderLink>
      </List.Header>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Компьютерная диагностика
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Шиномонтаж
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Заправка кондиционеров
      </HeaderLink>
    </List.Item>
    <List.Item>
    <HeaderLink to="/ServicesPage">
      Замена масла
      </HeaderLink>
    </List.Item>
  </List>
);

export default ItemList;
