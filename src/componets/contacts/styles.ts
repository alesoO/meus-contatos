import styled from 'styled-components'

export const Card = styled.div`
  display: block;
`

export const Name = styled.input.attrs({ type: 'text' })`
  font-size: 24px;
  font-weight bold;
  display: block;
  resize: none;
  border: none;
  max-height: 32px;
  width: 100%;
`
export const Email = styled.input.attrs({ type: 'text' })`
  font-size: 16px;
  display: block;
  resize: none;
  border: none;
  max-height: 24px;
  width: 100%;
`
export const Number = styled.input`
  font-size: 16px;
  resize: none;
  border: none;
  max-height: 24px;
  width: 100%;
`
export const ButtonGroup = styled.div`
  margin-top: 15px;
  display: flex;
  justfy-content: flex-end;
`
export const Info = styled.div`
  display: flex;
`

export const ListInfo = styled.div`
  margin: 0;
  padding-left: 24px;
  max-width: 500px;
  width: 100%;
  list-style-type: none;

  input {
    margin: 4px;
  }
`

export const Icon = styled.img`
  max-width: 4.7em;
  width: 100%
  margin: 0;
`
