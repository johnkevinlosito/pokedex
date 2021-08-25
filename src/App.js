import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/pokedex'>
          <Pokedex />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
