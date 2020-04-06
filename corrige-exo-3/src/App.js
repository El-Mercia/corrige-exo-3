import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




import CreateComment from './pages/CreateComment';

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/comments/create" component={CreateComment} />
      </Switch>
    </Router>
  );
}

export default App;