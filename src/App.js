import Home from "./components/Home";
import CustomNav from "./components/layout/CustomNav";
import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react"
import Photos from "./components/photos/Photos";
import UsersList from "./components/users/UsersList";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProtectedRoute from "./components/routers/ProtectedRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) login()
  }, [])

  return (
    <Router>
      <div className="App">
        <CustomNav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/photos"
            component={Photos}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;