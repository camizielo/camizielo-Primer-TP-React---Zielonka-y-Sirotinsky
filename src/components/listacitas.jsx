import './ListaCitas.css'
import Cita from '../Cita/Cita'

function ListaCitas({ citas }) {
  return (
    <div className="lista-citas">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  )
}

export default ListaCitas