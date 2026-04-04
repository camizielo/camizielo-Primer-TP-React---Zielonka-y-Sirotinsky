import { useState } from 'react'
import Formulario from './components/formulario'
import ListaCitas from './components/ListaCitas'
import './App.css'

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
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
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