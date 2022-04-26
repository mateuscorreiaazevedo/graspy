/* eslint-disable no-console */
// import { useForm } from '../../hooks/useForm'
import { useState } from 'react'
import { FormGroup, FormLabel, FormInput, FormContainer, FormBtn } from './Style'

export default function PromotionForm () {
  const [values, setValues] = useState({})

  console.log(values)
  const change = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  return (
        <div>
          <h1>Promo Show</h1>
          <h2>Nova Promoção</h2>

          <FormContainer>
            <FormGroup>
              <FormLabel htmlFor="title">Título</FormLabel>
              <FormInput type="text" name="title" id="title" onChange={change} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="url">Link</FormLabel>
              <FormInput type="text" name="url" id="url" onChange={change} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="imageUrl">Imagem (URL)</FormLabel>
              <FormInput type="text" name="imageUrl" id="imageUrl" onChange={change} />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="price">Preço</FormLabel>
              <FormInput type="number" name="price" id="price" onChange={change} />
            </FormGroup>
            <div>
              <FormBtn type="submit">Salvar</FormBtn>
            </div>
          </FormContainer>
        </div>
  )
}
