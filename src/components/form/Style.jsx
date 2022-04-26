import styled from 'styled-components'

export const FormContainer = styled.form`   
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`
export const FormLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #555;
`
export const FormInput = styled.input`
    border: 1px solid #aaa;
    border-radius: 8px;
    background-color: #fff;
    height: 2.4rem;
    width: 800px;
    padding: 0 2em;
    &:focus {
        outline: 1px solid #4398d8;
    }
`
export const FormBtn = styled.button`
    margin-top: 1em;
    padding: 1em 5rem;
    border: 1px solid #3498d8;
    border-radius: 8px;
    background-color: transparent;
    color: #3498d8;
    font-size: 1em;
    cursor: pointer;
`
