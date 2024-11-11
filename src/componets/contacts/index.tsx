import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Remove, Save, Edit } from '../../styles'
import { remove, edit } from '../../store/reducers/contacts'
import ContactClass from '../../models/contact'

type Props = ContactClass

const Contact = ({
  id,
  name: oldName,
  email: oldEmail,
  number: oldNumber
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    if (oldName.length > 0) {
      setName(oldName)
    }
  }, [oldName])

  useEffect(() => {
    if (oldEmail.length > 0) {
      setEmail(oldEmail)
    }
  }, [oldEmail])

  useEffect(() => {
    if (oldNumber.length > 0) {
      setNumber(oldNumber)
    }
  }, [oldNumber])

  function cancelEdit() {
    setIsEditing(false)
    setName(oldName)
    setEmail(oldEmail)
    setNumber(oldNumber)
  }
  return (
    <S.Card>
      <S.Info>
        <S.Icon
          src="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
          alt="icone de contatos"
        />
        <S.ListInfo>
          <S.Name
            disabled={!isEditing}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.Email
            disabled={!isEditing}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.Number
            disabled={!isEditing}
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </S.ListInfo>
      </S.Info>
      <S.ButtonGroup>
        {isEditing ? (
          <>
            <Save
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    name,
                    email,
                    number
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </Save>
            <Remove onClick={cancelEdit}>Cancelar</Remove>
          </>
        ) : (
          <>
            <Edit onClick={() => setIsEditing(true)}>Editar</Edit>
            <Remove onClick={() => dispatch(remove(id))}>Remover</Remove>
          </>
        )}
      </S.ButtonGroup>
    </S.Card>
  )
}

export default Contact
