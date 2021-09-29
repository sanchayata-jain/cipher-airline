//import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './homepage.js';
import ViewDestinations from './viewDestinations.js';
import Navbar from '../components/navbar.js';
import AllAvailableFlights from './allAvailableFlights.js';
import ContactUs from './contact.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/destinations" component={ViewDestinations} exact />
        <Route path="/all-flights" component={AllAvailableFlights} exact />
        <Route path="/contact-us" component={ContactUs} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


