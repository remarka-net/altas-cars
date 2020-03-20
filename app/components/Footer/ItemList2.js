
import React from 'react';
import { List } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import HeaderLink from './HeaderLink';


const ItemList2 = () => (
  <List>
    <List.Item>
      <List.Header>
      <Link className="footer_headline" to="/About#Info_id">О нас</Link> 
      </List.Header>
    </List.Item>
    <List.Item>
    <Link to="/About#Info_id">Почему мы?</Link> 
    </List.Item>
    <List.Item>
    <Link to="/About#contacts"> Контакты</Link> 
    </List.Item>
    <List.Item>
    <Link to="/About#">Наши партнеры</Link> {/* Вставь идентификатор в конце */}
    </List.Item>
  </List>
);

export default ItemList2;
