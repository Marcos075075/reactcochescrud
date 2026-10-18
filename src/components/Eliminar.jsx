import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import ServicesCoches from '../services/ServicesCoches';

export default class Eliminar extends Component {
    services = new ServicesCoches();

    state = {
        status: false
    }

    deleteCoche = () => {
        this.services.deleteCoche(this.props.id).then(result => {
            this.setState({
                status: true
            })
        })
    }


  render() {
    return (
<div className="mx-auto my-12 max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg">
    {
        this.state.status == true &&
        (<Navigate to="/" />)
    }
  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  </div>

  <h1 className="text-xl font-bold text-gray-800">
    ¿Quieres eliminar el coche?
  </h1>
  <p className="mt-2 text-sm text-gray-500">
    Esta acción no se puede deshacer. El registro se eliminará permanentemente.
  </p>

  <div className="mt-6 flex items-center justify-center gap-3">
    <button
      onClick={() => {this.deleteCoche()}}
      className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Confirmar
    </button>

    <NavLink
      to="/true"
      className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
    >
      Cancelar
    </NavLink>
  </div>
</div>
    )
  }
}
