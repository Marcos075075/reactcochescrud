import React, { Component } from 'react'
import ServicesCoches from '../services/ServicesCoches';
import { NavLink } from 'react-router-dom';
import Global from '../Global';
export default class HomeComponent extends Component {
  service = new ServicesCoches();

  state = {
    coches: [],
    status: false,
    detalles: null
  }

  cargarCoches = () => {
    this.service.getCoches().then(result => {
      Global.coches = result;
      this.setState({
        coches: result,
        status: true
      })
    })
  }

  getDetalles = (idCoche) => {
    this.service.getDetalles(idCoche).then(result => {
      this.setState({
        detalles: result
      })
    })
  }

  componentDidMount = () => {
    if (this.props.cancelar == "true" && Global.coches.length > 0) 
      this.setState({
        coches: Global.coches,
        status: true
      })
     else 
      this.cargarCoches();
  }


  render() {
    if (this.state.status === true) {
      return (
        <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Garaje</p>
              <h1 className="mt-1 text-3xl font-bold text-slate-900">Catálogo de coches</h1>
              <p className="mt-2 text-slate-500">Consulta los modelos disponibles y sus detalles.</p>
            </div>

            {this.state.detalles && (
              <section className="rounded-xl bg-blue-50 p-6 shadow-sm ring-1 ring-blue-100">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <img
                    className="h-48 w-full rounded-lg object-cover shadow-sm sm:w-72"
                    src={this.state.detalles.imagen}
                    alt={`${this.state.detalles.marca} ${this.state.detalles.modelo}`}
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Detalle seleccionado</p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      {this.state.detalles.marca} {this.state.detalles.modelo}
                    </h2>
                    <dl className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-slate-800">ID</dt>
                        <dd>{this.state.detalles.idCoche}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-800">Conductor</dt>
                        <dd>{this.state.detalles.conductor}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            )}

            <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-200">
              <div className="overflow-x-auto">
                {
                  this.state.coches.length === 0 && (
                    <p className="px-6 py-10 text-center text-slate-500">No hay coches disponibles.</p>
                  )
                }
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-800">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Modelo
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Imagen
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Detalles
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {
                      this.state.coches.map((coche, index) => {
                        return (
                          <tr className="transition-colors hover:bg-slate-50" key={coche.idCoche || index}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-800">{coche.modelo}</td>
                            <td className="px-6 py-4 text-sm text-slate-500">
                              <img className="h-20 w-32 rounded-md object-cover" src={coche.imagen} alt={coche.modelo} />
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500">
                              <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => { this.getDetalles(coche.idCoche) }}>
                                Ver detalles
                              </button>
                            </td>
                            <td className="space-x-2">
                              <NavLink to={"/update/" + coche.idCoche} className="rounded-lg bg-yellow-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2" >
                                Modificar
                              </NavLink>
                              <NavLink to={"/delete/" + coche.idCoche}className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" >
                                Eliminar
                              </NavLink>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
          <div className="rounded-xl bg-white px-8 py-10 text-center shadow-lg ring-1 ring-slate-200">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
            <p className="mt-4 font-medium text-slate-600">Cargando coches...</p>
          </div>
        </div>
      )
    }
  }

}
