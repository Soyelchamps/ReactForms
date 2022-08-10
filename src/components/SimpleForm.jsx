import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1: Crear los estados donde guardare la infomacion
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Paso 4: Manejo lo que sucedera cuando envie mi formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }
  // Paso 2: Crear mi formulario base
  return (
    <div className='login'>
      <div className='login-container' />
      <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
      <form>
        { /* Paso 3: Guardo cada cambio del input en su estado correspondiente */ }
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='correo@mail.com'
          onChange={(event) => { setEmail(event.target.value) }}
        />

        <input
          type='password'
          name='password'
          placeholder='++++'
          onChange={(event) => { setPassword(event.target.value) }}
        />
        <button onClick={handleSubmit}>
          Inciar sesión
        </button>

      </form>

    </div>
  )
}

export default SimpleForm
