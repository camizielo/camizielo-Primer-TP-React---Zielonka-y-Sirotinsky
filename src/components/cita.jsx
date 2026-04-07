import './cita.css'

function Cita({ cita, eliminarCita }) {
  const { mascota, propietario, fecha, hora, sintomas } = cita

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>

      <button className="button eliminar u-full-width" onClick={eliminarCita}>Eliminar ×</button>

    </div>
  )
}

export default Cita