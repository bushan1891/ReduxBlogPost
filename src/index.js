import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router , browserHistory} from 'react-router';
import routes from './routes';
// router controlls what is going to display
// browserHistory watchs for url change
//www.blog.post/detail -> www.blog.post/detail/post
// hashHistory looks for changes for hash changes   www.blog.post/#detail
// memoryHistory is not used for url changes
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
