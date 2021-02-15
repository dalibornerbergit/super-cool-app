import Home from "./components/Home";
import CustomNav from "./components/layout/CustomNav";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Photos from "./components/photos/Photos";
import UsersList from "./components/users/UsersList";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;