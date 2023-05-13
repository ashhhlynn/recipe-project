import './App.css';
import axios from "axios";
import React, { Component } from 'react'
import './App.css';
import Recipes from './components/Recipes'
import CreateRi from './components/Notusin/CreateRi'
import CreateIngredients from './components/CreateIngredients'
import CreateRecipe from './components/CreateRecipe'
import Profile from './components/Profile'
import Login from './components/Login'
import Home from './components/Notusin/Home'
import Signup from './components/Signup'
import Favorites from './components/Favorites'
import { fetchRecipes } from "./components/actions/rootActions"
import Head from './components/Head'
import { checkUser } from "./components/actions/rootActions"
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from "react-redux"

class App extends Component {

  componentDidMount = () => {
    if (localStorage.token) {
      const token = localStorage.token;
      console.log(token)
      axios
      .get("/api/v1/profile.json")
      .then((response) => {
          if (response.message) {
              localStorage.removeItem("token")
          }
          else {
          console.log(response);
          this.props.checkUser(response.user)
        }
      })
      .catch((error) => console.log(error));
    }
    axios
    .get("api/v1/recipes.json")
      .then((response) => {
          console.log(response);
          this.props.fetchRecipes(response.data)
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
          <Route exact path="/createingredients" element={<CreateIngredients />} />
          <Route exact path="/profile" element={<Profile />} />
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
    fetchRecipes: (recipes) =>  { dispatch(fetchRecipes(recipes)) }, 
  }
}

export default connect(null, mapDispatchToProps)(App)