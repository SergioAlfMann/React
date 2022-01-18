//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar from './components/NavBar';
import React, { Component } from 'react'
import ItemListContainer from './components/ItemListContainer';

 

function App() {
  return (
    <>
        <NavBar></NavBar>
        <ItemListContainer name="ItemListContainer" ></ItemListContainer>
     </>
  );
}


export default App;
