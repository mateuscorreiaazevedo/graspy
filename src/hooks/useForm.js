import { useState } from 'react'
import { formService } from '../service/postPromotion'
import { useNavigate } from 'react-router-dom'

export const useForm = () => {
  const [values, setValues] = useState({})
  const navigate = useNavigate()

  const setValue = (event) => {
    const { name, value } = event.target
    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    formService
      .save(values)
      .then(resp => {
        navigate('/')
      })
      .catch(err => alert(err.message))
  }

  return {
    setValue,
    handleSubmit
  }
}
