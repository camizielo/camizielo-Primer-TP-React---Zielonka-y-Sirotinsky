import { useState } from 'react'
import Header from './components/Header/Header'
import FormularioCita from './components/FormularioCita/FormularioCita'
import ListaCitas from './components/ListaCitas/ListaCitas'

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: 'Nina',
      propietario: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna',
    },
    {
      id: 2,
      mascota: 'Sifon',
      propietario: 'Flecha',
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: 'Duerme mucho',
    },
    {
      id: 3,
      mascota: 'Floki',
      propietario: 'Ari',
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: 'No está comiendo',
    },
  ])

  return (
    <div>
      <Header titulo="Administrador de Pacientes" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <FormularioCita />
          </div>
          <div className="one-half column">
            <ListaCitas citas={citas} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
