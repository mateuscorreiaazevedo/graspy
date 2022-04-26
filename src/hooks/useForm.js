import { useState } from 'react'

export const useForm = () => {
  const [values, setValues] = useState({})

  const change = (event) => {
    const { name, value } = event.target
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return {
    change,
    values
  }
}
