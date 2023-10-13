import React from 'react';
import './App.css';
import Header from './header';
import { YTvideos } from './videocard';
import Footer from './footer';
import ViewPosts from './postcard';
import LoginForm from './loginform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Header />
        <YTvideos/>
        <ViewPosts/>
        <Footer />
      </div>
  );
}

export default App;
