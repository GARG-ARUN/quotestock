
import './styles/style.css';
import './styles/stylepoetrypage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Quote from "./pages/quote";
import Home from "./pages/home";
import Navbar from "./pages/data";
import Smile from "./pages/smile";
import Life from "./pages/life";
import Inspirational from "./pages/inspirational";
import Positive from "./pages/positive";
import Emotional from "./pages/emotional";
import love from "./pages/love";
import down from "./pages/download";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/quotestock' exact component={Home} />
        <Route path='/home'  component={Home} />
        <Route path='/quote' component={Quote} />
        <Route path='/smile' component={Smile} />
        <Route path='/inspirational' component={Inspirational} />
        <Route path='/positive' component={Positive} />
        <Route path='/life' component={Life} />
        <Route path='/love' component={love} />
        <Route path='/emotional' component={Emotional} />
        <Route path='/downQuotes' component={down} />
      </Switch>
      
    </Router>
  );
}

export default App;
