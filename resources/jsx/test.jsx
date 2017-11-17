import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../jsx/Home.jsx'
import brooklyn from '../jsx/brooklyn.jsx'
import explore from '../jsx/explore.jsx'
var Greeting = () => (
    <Router>
	<div className="row">	
	<div className="col-sm-9 col-md-9" id="mainBody">
  
		<Route exact path="/" component={Home}/>
		<Route exact path="/brooklyn" component={brooklyn}/>
		<Route exact path="/explore" component={explore}/>		
   
   </div>
   <div className="col-sm-3 col-md-3">
 		<div id="navbar" className="vertical-menu middleDivs">
                    <nav>
                      <ul className="navULClass">
                        <li className="liClass"><Link to="/">Home</Link></li>
                         <li className="liClass"><Link to="/brooklyn">Parks in Brooklyn</Link></li>
                          <li className="liClass"><Link to="/explore">Explore more</Link></li>
                      </ul>
                    </nav>
                </div>   
	</div>
	</div>
	</Router>
);
export default Greeting;
