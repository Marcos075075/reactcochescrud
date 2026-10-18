import React, { Component } from 'react'
import ServicesCoches from '../services/ServicesCoches'
import { Navigate } from 'react-router-dom';

export default class CrearCoche extends Component {
    service = new ServicesCoches();

    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        mensaje: null,
        status: false
    }

    crearCoche = (e) => {
        e.preventDefault();

        let coche = {
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }

        this.service.insertCoche(coche).then(respuesta => {
            console.log("si");
            
            this.setState({
                status: true
            })
        }).catch(error => {
            this.setState({
                mensaje: error.message
            })
        })
    }


    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div className="max-w-xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
                    {
                        this.state.mensaje != null &&
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <strong className="font-bold">Error: </strong>
                            <span className="block sm:inline">{this.state.mensaje}</span>
                        </div>
                    }
                            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
                                Crear coche
                            </h1>

                            <form onSubmit={this.crearCoche} className="space-y-5">
                               
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Marca
                                    </label>
                                    <input
                                        type="text"
                                        name="marca"
                                        ref={this.cajaMarca}
                                        required
                                        placeholder="Ej: Toyota, Audi..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Modelo
                                    </label>
                                    <input
                                        type="text"
                                        name="modelo"
                                        ref={this.cajaModelo}
                                        required
                                        placeholder="Ej: Corolla, A4..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Conductor
                                    </label>
                                    <input
                                        type="text"
                                        name="conductor"
                                        ref={this.cajaConductor}
                                        required
                                        placeholder="Nombre del conductor"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        URL Imagen
                                    </label>
                                    <input
                                        type="text"
                                        name="imagen"
                                        ref={this.cajaImagen}
                                        required
                                        placeholder="https://ejemplo.com/foto.jpg"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                                    >
                                        Crear coche
                                    </button>
                                </div>
                            </form>
                        </div>
            )
        }
    }
}
