import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';

// dont forget to wrap everything in a BrowserRouter!
const App = () => (
  <BrowserRouter>
  <main>
    <NavBar />
    <Route exact path="/">
        <Home />
      </Route>
      <Route path="/bk">
        <BurgerKing />
      </Route>
      <Route path="/plk">
        <Popeyes />
      </Route>
      <Route path="/th:adjective">
        <TimHortons />
      </Route>
  </main>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
