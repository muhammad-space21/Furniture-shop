import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage';
import CommentPage from './pages/CommentsPage';
import OrderPage from './pages/OrderPage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/comment-page' component={CommentPage} />
        <Route exact path='/order-page' component={OrderPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
