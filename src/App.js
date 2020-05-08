import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';

const HomePage = lazy(() => import('./pages/homepage'));
const CommentPage = lazy(() => import('./pages/CommentsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

class App extends React.Component {

  render () {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/comment-page' component={CommentPage} />
            <Route exact path='/order-page' component={OrderPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
  }
}

export default App;
