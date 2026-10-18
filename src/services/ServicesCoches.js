import Global from "../Global";
import axios from "axios";

export default class ServicesCoches {

  getCoches() {
    return new Promise(function (resolve) {
      let url = Global.urlApiCoches;
      let request = "api/coches";
      axios.get(url + request).then(response => {
        console.log("Leyendo coches");
        resolve(response.data)
      })
    })
  }

  getDetalles(idCoche) {
    return new Promise(function (resolve) {
      let url = Global.urlApiCoches;
      let request = "api/coches/findcoche/" + idCoche;
      axios.get(url + request).then(response => {
        console.log("Leyendo detalles del coche");
        resolve(response.data)
      })
    })
  }

  insertCoche(coche) {
    return new Promise(function (resolve, reject) {
      let url = Global.urlApiCoches;
      let request = "api/coches/insertcoche";
      axios.post(url + request, coche)
      .then(response => {
        console.log("Insertando coche");
        resolve(response)
      }).catch(error => {
        console.log("Error insertando");
        reject(error);        
      })
    })
  }
  
  updateCoches(coche) {
    return new Promise(function (resolve) {
      let url = Global.urlApiCoches;
      let request = "api/coches/updatecoche";
      axios.put(url + request, coche).then(response => {
        console.log("Actualizando coche");
        resolve(response)
      })
    })
  }

  deleteCoche(idCoche) {
    return new Promise(function (resolve) {
      let url = Global.urlApiCoches;
      let request = "api/coches/deletecoche/" + idCoche;
      axios.delete(url + request).then(response => {
        console.log("Eliminando coche");
        resolve(response)
      })
    })  
  }
  

}
