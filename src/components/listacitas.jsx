import './listacitas.css'
import Cita from "./Cita";

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita
            key={index}
            cita={cita}
            eliminarCita={() => eliminarCita(index)}
          />
        ))
      )}
    </div>
  );
}

export default ListadoCitas;