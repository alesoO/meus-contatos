import styled, { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #6c757d;
  border-radius: 8px;
  margin-right: 8px;
`

export const Save = styled(Button)`
  background-color: #28a745;
`
export const Remove = styled(Button)`
  background-color: #dc3545;
`
export const Edit = styled(Button)`
  background-color: #ffc107;
`
export default Style
