/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import RepairPage from 'containers/RepairPage/Loadable';
import NewsPage from 'containers/NewsPage/Loadable';
import TradePage from 'containers/TradePage/Loadable';
import About from 'containers/About/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Page from '../Page';
import { apiEndpoint } from '../../prismic-configuration';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1024 * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ServicesPage" component={ServicesPage} />
        <Route path="/RepairPage" component={RepairPage} />
        <Route path="/NewsPage" component={NewsPage} />
        <Route path="/TradePage" component={TradePage} />
        <Route path="/About" component={About} />
        <Route exact path="/page/:uid" component={Page} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
