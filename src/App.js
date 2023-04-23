import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./BookingConfirmation";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
      <Router>
      <Switch>
        <Route exact path="/">
          <BookingForm />
        </Route>
        <Route path="/confirmed">
          <ConfirmedBooking />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
//Step 1: Set up the initial semantic structure



//Step 2: Break the sections down into React components

// Step 3: Add the logo and navigation elements
