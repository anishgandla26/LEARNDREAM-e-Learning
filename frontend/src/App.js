import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container} from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import VideoPlayer from './components/VideoPlayer'
import VideoPlayer1 from './components/VideoPlayer1';


function App() {
  return (
    <Router>
    <Header />
    <main>
      <Container>
        <Route path = '/login' component = {LoginScreen}/>
      <Route path = '/register' component = {RegisterScreen}/>
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/' component={HomeScreen} exact/>
      <Route path = '/videos' component = {VideoPlayer}  />
      <h1></h1>
      <h2></h2>
      
      <Route path = '/videos' component = {VideoPlayer1}  />

      </Container>
      </main>
      <Footer />
</Router>
  );
}

export default App;
