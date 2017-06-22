import React from 'react';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';


 import Main from '../Main';
 import Create from '../Create';
 import Login from '../Login';
 import Personal from '../Personal';
 import Success from '../success';


const Routes = (
    <Router>
        <Route path="/" component={Create}>
	        <Route path="/Main" component={Main}/>
	        <Route path="/login" component={Login}/>
	        <Route path="/personal" component={Personal}/>
	        <Route path="/Success" component={Success}/>
        </Route>
    </Router>
);


export default Routes;