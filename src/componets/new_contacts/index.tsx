import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import Contact from '../../models/contact'
import { add } from '../../store/reducers/contacts'

const NewContact = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const addContact = (event: FormEvent) => {
    event.preventDefault()
    const contactToAdd = new Contact(name, email, number, 7)
    dispatch(add(contactToAdd))
  }
  return (
    <S.FormContact onSubmit={addContact}>
      <S.Field
        value={name}
        onChange={({ target }) => setName(target.value)}
        type="text"
        placeholder="Nome:"
      />
      <S.Field
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="text"
        placeholder="Email:"
      />
      <S.Field
        value={number}
        onChange={({ target }) => setNumber(target.value)}
        type="text"
        placeholder="Telefone:"
      />
      <S.Button type="submit">Adicionar</S.Button>
    </S.FormContact>
  )
}

export default NewContact
