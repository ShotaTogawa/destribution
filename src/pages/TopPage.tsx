// FCはfunctional componentを作るためのモジュール
import React, { FC } from 'react';
import TopHeader from '../components/topPage/TopHeader';
import TopMain from './TopMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
        <Route path="/search/:keyword" exact>
          検索結果
        </Route>
      </Switch>
    </Router>
  );
};

export default TopPage;
