import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import MenuComponent from './MenuComponent'
import CrearCoche from './CrearCoche'
import UpdateCoche from './UpdateCoche'
import Eliminar from './Eliminar'


export default class Router extends Component {
  render() {

    function UpdateCocheElement() {
      const { id } = useParams();
      return <UpdateCoche id={id} />;
    }

    function EliminarElement() {
      const { id } = useParams();
      return <Eliminar id={id} />;
    }

    function HomeElement() {
      const { cancelar } = useParams();
      return <HomeComponent cancelar={cancelar} />;
    }


    return(
    <BrowserRouter>
        <MenuComponent/>
        <Routes>
            <Route path="/:cancelar?" element={<HomeElement />} />
            <Route path="/crear" element={<CrearCoche />} />
            <Route path="/update/:id" element={<UpdateCocheElement />} />
            <Route path="/delete/:id" element={<EliminarElement />} />
        </Routes>
    </BrowserRouter>
    )
  }
}
