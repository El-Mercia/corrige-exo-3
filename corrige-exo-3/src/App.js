import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




import CreateComment from './pages/CreateComment';
import DeleteComment from './pages/DeleteComment';

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/comments/create" component={CreateComment} />
        <Route path="/comments/delete" component={DeleteComment} />
      </Switch>
    </Router>
  );
}

export default App;