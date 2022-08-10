// REGLAS PARA CREAR UN HOOK
// custom hook es una funcion que utiliza otros hook de React
// 1. Siempre debemos usar la palabra "use" al nombrarlo :useForm
// 2. Siempre deben de ser funciones (a partir de React V16 usamos hooks)
// 3. Siempre deben usar algun hook de react (useState, UseEffect, Use Ref, etc.)
// 4. Deben ser reutilizables, no para casos muy especificos

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unido para guaradar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Equivale a:
    // const name = event.target.name
    // const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault() // hacemos que no se recarge la pagina
    callback(input)
  }
  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
