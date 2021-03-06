import React from 'react';
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
