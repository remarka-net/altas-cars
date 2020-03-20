import React from 'react';
import { List } from 'semantic-ui-react';
import HeaderLink from './HeaderLink';
import { HashLink as Link } from 'react-router-hash-link';

const ItemList1 = () => (
  <List>
    <List.Item>
      <List.Header>
      <Link className="footer_headline" to="/RepairPage#Info_id">Регламент ТО</Link>
      </List.Header>
    </List.Item>
    <List.Item>
    <Link to="/RepairPage#">Сроки ТО</Link>  {/* Вставь идентификатор в конце */}
    </List.Item>
    <List.Item>
    <Link to="/RepairPage#">Проверка авто</Link>  {/* Вставь идентификатор в конце */}
    </List.Item>
    <List.Item>
      <Link to="/RepairPage#">ТО по километражу</Link>  {/* Вставь идентификатор в конце */}
    </List.Item>
    <List.Item>
      <Link to="/RepairPage#"> Нормы тех. обслуживания</Link>  {/* Вставь идентификатор в конце */}
    </List.Item>
  </List>
);

export default ItemList1;
