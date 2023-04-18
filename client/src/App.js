import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { Component } from 'react'
import './App.css';
import Recipes from './components/Recipes'
import CreateRecipe from './components/CreateRecipe'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from "react-redux"




class App extends Component {


render() {


  return (
    <Router>
    <div className="App">   
      <Container style={{marginTop:"5%"}}>
        <Routes>
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/createrecipe" element={<CreateRecipe />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </div>
  </Router>
    )}

  }

export default App;
