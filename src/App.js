import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/404';
import About from './pages/About';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Header from './components/Header';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>

          <Header />
          <Home />
        </Route>
        <Route path='/pokedex'>
          <Header />
          <Pokedex />
        </Route>
        <Route path='/about'>
          <Header />
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
