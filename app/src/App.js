import React from "react"
import Signup from "./components/Auth/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Login from "./components/Auth/Login"
import PrivateRoute from "./components/Auth/PrivateRoute"
import ForgotPassword from "./components/Auth/ForgotPassword"
import UpdateProfile from "./components/Auth/UpdateProfile"
import Dashboard from './components/cloud_storage/Dashboard'
import './App.css'
import NavBarComponent from "./components/cloud_storage/NavBarComponent"


function App() {
  return (
        <Router>
          <AuthProvider>
            <NavBarComponent />
            <Switch>
              {/* Cloud storage */}
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

              {/* private */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              
              {/* Auth */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App
