/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import List from './List';
import ListItem from './ListItem';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Услуги</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>Наши услуги</H1>
      <List>
        <ListItem>
          <p>Hello world1</p>
          <p>Hello world2</p>
        </ListItem>

        <ListItem>
          <p>HelloWorld4</p>
          <p>Hello World5</p>
        </ListItem>

        <ListItem>
          <p>HelloWorld6</p>
          <p>HelloWorld7</p>
        </ListItem>

        <ListItem>
          <p>Helloworld8</p>
          <p>HelloWorld9</p>
        </ListItem>

        <ListItem>
          <p>HelloWorld10</p>
          <p>HelloWorld11</p>
        </ListItem>
      </List>
    </div>
  );
}
