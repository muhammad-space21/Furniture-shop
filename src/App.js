import React, { lazy, Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import history from './history';

const HomePage = lazy(() => import('./pages/homepage'));
const CommentPage = lazy(() => import('./pages/CommentsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

class App extends React.Component {

  render () {
  return (
    <div className="App">
    <Router history={history}>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/comment' component={CommentPage} />
            <Route exact path='/order' component={OrderPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
    </div>
  );
  }
}

export default App;
