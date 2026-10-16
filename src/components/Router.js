import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'


export default class Router extends Component {
  render() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
        </Routes>
    </BrowserRouter>
    
  }
}
