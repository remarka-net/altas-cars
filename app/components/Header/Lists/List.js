import React from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from '../HeaderLink';

const scope = 'boilerplate.components.';

export default function TodoList({ topics, selection }) {
  return (
    <ul className="todoList">
      {topics.map(topic => {
        const footerId = scope + topic.title;

        if (
          selection === true &&
          (topic.title === 'about' ||
            topic.title === 'entrance' ||
            topic.title === 'teachers' ||
            topic.title === 'studing_process' ||
            topic.title === 'scientificWork')
        ) {
          return (
            <li key={topic.id}>
              <HeaderLink to={topic.link}>
                <FormattedMessage id={footerId} />
                <div className="tringledown" />
              </HeaderLink>
            </li>
          );
        }
        return (
          <li key={topic.id}>
            <HeaderLink to={topic.link}>
              <FormattedMessage id={footerId} />
            </HeaderLink>
          </li>
        );
      })}
    </ul>
  );
}
