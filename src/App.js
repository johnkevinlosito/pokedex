import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Loading from './components/Loading';

const About = React.lazy(() => import('./pages/About'))
const Home = React.lazy(() => import('./pages/Home'))
const Pokedex = React.lazy(() => import('./pages/Pokedex'))
const NotFound = React.lazy(() => import('./pages/404'))
function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
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
        </Switch></Suspense>
    </Layout>
  );
}

export default App;
