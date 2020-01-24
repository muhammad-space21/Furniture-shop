import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import CommentPage from './pages/comment-page/comment-page';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/comment-page' component={CommentPage} />
        
      </Switch>
    </div>
  );
  }
}

export default App;
