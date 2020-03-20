import React from 'react';
import { List } from 'semantic-ui-react';
import HeaderLink from './HeaderLink';
import { HashLink as Link } from 'react-router-hash-link';

const ItemList = () => (
  <List>
    <List.Item>
      <List.Header>
      <Link className="footer_headline" to="/ServicesPage#Info_id">Услуги</Link>
      </List.Header>
    </List.Item>
    <List.Item>
    <Link to="/ServicesPage#Comp_diagnostic"> Компьютерная диагностика</Link>
    </List.Item>
    <List.Item>
    <Link to="/ServicesPage#Tires">Шиномонтаж</Link>
    </List.Item>
    <List.Item>
     <Link to="/ServicesPage#">Заправка кондиционеров</Link>  {/* Вставь идентификатор в конце */}
    </List.Item>
    <List.Item>
    <Link to="/ServicesPage#Oil">Замена масла</Link>
    </List.Item>
  </List>

);

export default ItemList;
