import React, { Component } from 'react'
import ServicesCoches from '../services/ServicesCoches'
import { Navigate } from 'react-router-dom';

export default class UpdateCoche extends Component {
  service = new ServicesCoches();

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    coche: null,
    status1: false,
    status2: false
  }

  updateCoche = (e) => {
    e.preventDefault();
    let coche = {
      idCoche: parseInt(this.cajaId.current.value),
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value
    }
    this.service.updateCoches(coche).then(result => {
      this.setState({
        status2: true
      })
    })
  }

  getCoche = () => {
    this.service.getDetalles(this.props.id).then(result => {
      console.log(result);
      this.setState({
        coche: result,
        status1: true
      })
    })
  }

  componentDidMount = () => {
    this.getCoche();
  }

  render() {
    if (this.state.status1 == false) {
      return (<div className="flex flex-col items-center justify-center min-h-[300px] w-full p-6">
        <img
          src="../assets/loading.png"
          alt="Cargando..."
          className="w-16 h-16 animate-spin object-contain"
        />
        <p className="mt-4 text-sm font-medium text-gray-500 animate-pulse">
          Cargando datos...
        </p>
      </div>);
    } else {
      return (
        <div className="max-w-xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
          {
            this.state.status2 == true &&
            (<Navigate to="/" />)
          }
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
            Modificar coche
          </h1>

          <form onSubmit={this.updateCoche} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ID
              </label>
              <input
                type="number"
                value={this.props.id}
                disabled
                ref={this.cajaId}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 bg-gray-100 cursor-not-allowed focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Marca
              </label>
              <input
                type="text"
                defaultValue={this.state.coche.marca}
                ref={this.cajaMarca}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Modelo
              </label>
              <input
                type="text"
                defaultValue={this.state.coche.modelo}
                ref={this.cajaModelo}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Conductor
              </label>
              <input
                type="text"
                defaultValue={this.state.coche.conductor}
                ref={this.cajaConductor}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                URL Imagen
              </label>
              <input
                type="text"
                defaultValue={this.state.coche.imagen}
                ref={this.cajaImagen}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 cursor-pointer"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      )
    }
  }
}
