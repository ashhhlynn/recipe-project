import './App.css';
import axios from "axios";
import React, { Component } from 'react'
import './App.css';
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'
import Login from './components/Login'
import Signup from './components/Signup'
import Favorites from './components/Favorites'
import Head from './components/Head'
import { checkUser } from "./components/actions/rootActions"
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from "react-redux"
import { fetchFavorites } from "./components/actions/rootActions"

class App extends Component {

  componentDidMount = () => {
    axios
    .get("/api/v1/profile.json")
    .then((response) => {
      if (response.message) {
        console.log(response.message)
      }
      else {
        this.props.checkUser(response.data.user)
      }
    })
    .catch((error) => console.log(error));

    axios
    .get("api/v1/favorites")
    .then((response) => {
        this.props.fetchFavorites(response.data)
    })
    .catch((error) => console.log(error));
  }
  
render() {
  return (
    <Router>
    <div className="App">   
      <Head />
      <Container style={{marginTop:"1.3%"}}>
        <Routes>
          <Route exact path="/" element={<Recipes />} />
          <Route exact path="/createrecipe" element={<CreateRecipe />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </div>
  </Router>
  )}
}
  
const mapDispatchToProps = (dispatch) => {
  return { 
    checkUser: (user) =>  { dispatch(checkUser(user)) },
    fetchFavorites: ( favorites) =>  { dispatch(fetchFavorites(favorites)) }, 
  }
}

export default connect(null, mapDispatchToProps)(App)