import { useState, useEffect } from 'react'
import useForm from '../hook/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
/* Paso 1: Crear un UNICO estado con toda la informacion en forma de objeto */
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })
  const sendData = (data) => {
    console.log(data)
  }

  /* Paso 4 . Uso mi custom hook de useForm */
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)
  /* Paso 2. Voy a simular traer data de una API y prellenar el formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // JSON que manda el BackEnd
        nombre: 'César',
        apellido: 'Guerra',
        edad: 37,
        genero: 'M',
        email: 'cesar@devf.mx',
        password: 'passwordMySeguro'
      }
      setDatos(info)
    }, 2000)
  }, [])

  return (
    <div className='login'>
      <div className='login-container' />
      <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
      <form>
        {/* Paso 3: Guardo cada cambio del input en su estado correspondiente */}
        <label htmlFor='nombre'>Nombre</label>
        <input
          type='text'
          name='nombre'
          placeholder='nombre'
          onChange={handleInputChange}
          value={input.nombre}
        />

        <label htmlFor='apellido'>Apellido</label>
        <input
          type='text'
          name='Apellido'
          placeholder='Apellido'
          onChange={handleInputChange}
          value={input.apellido}
        />
        <label htmlFor='genero'>Genero</label>
        <select
          name='genero'
          onChange={handleInputChange}
          value={input.genero}
        >
          <option value=''>Elige un genero</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='correo@mail.com'
          onChange={handleInputChange}
          value={input.email}
        />

        <input
          type='password'
          name='password'
          placeholder='++++'
          onChange={handleInputChange}
          value={input.password}
        />
        <button onClick={handleSubmit}>
          Inciar sesión
        </button>

      </form>

    </div>
  )
}

export default FormHook
