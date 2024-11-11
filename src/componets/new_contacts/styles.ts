import styled from 'styled-components'

export const FormContact = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  margin: 40px 30px 40px 30px;

  input {
    padding: 8px 16px;
    width: 100%;
  }
`
export const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  border-color: #666666;
`
export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
