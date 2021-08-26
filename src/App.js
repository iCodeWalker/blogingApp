
import {Route} from 'react-router';
import { Router,Switch } from 'react-router-dom';
import BlogList from './screens/blogList';

import BlogDetail from './screens/blogDetail';
import LoginScreen from './screens/loginScreen';
import history from './history';
import './App.css';

function App() {
  return (

    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={BlogList}/>
            <Route path="/blog-detail/:index" exact component={BlogDetail}/>
            <Route path = "/login" exact component={LoginScreen} />
          </Switch>
        </div>
      </Router>
    
      
    </div>
  );
}

export default App;
