import logo from './logo.svg';
import './App.css';
import MiniForm from './containers/MiniForm';
import {Route, Switch } from 'react-router-dom';
import Results from './containers/Results';


function App() {
  return (
    <Switch>
      <Route path="/" component={MiniForm} exact />
      <Route path="/user" component={Results} />
    </Switch>
  );
}

export default App;
