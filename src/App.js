import logo from './logo.svg';
import './App.css';
import MiniForm from './containers/MiniForm';
import {Route, Switch } from 'react-router-dom';
import Results from './containers/Results';
import ConfirmationPage from './containers/ConfirmationPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={MiniForm} exact />
      <Route path="/user" component={Results} />
      <Route path="/confirmation" component={ConfirmationPage} />
    </Switch>
  );
}

export default App;
