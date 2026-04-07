import './App.css'
import { useState } from "react";
import Formulario from "./components/formulario";
import ListadoCitas from "./components/listacitas";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const confirmar = window.confirm("¿Estas seguro de eliminar esta cita?");
    if (!confirmar) return;

    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;