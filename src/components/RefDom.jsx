import { useRef, useEffect } from 'react'
const RefDom = () => {
  const inputRef = useRef()
  const effectRan = useRef(false)
  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'developmnet') {
      console.log(inputRef.current)
      inputRef.current.focus()
      inputRef.current.value = 'Hola useref'
    }
    return () => {
      effectRan.current = true
    }
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}
export default RefDom
