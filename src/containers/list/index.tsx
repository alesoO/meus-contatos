import { useSelector } from 'react-redux'
import Contact from '../../componets/contacts'
import { ContainerList } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <ContainerList>
      <ul>
        {items.map((t) => (
          <li style={{ listStyleType: 'none' }} key={t.name}>
            <Contact
              id={t.id}
              name={t.name}
              email={t.email}
              number={t.number}
            />
          </li>
        ))}
      </ul>
    </ContainerList>
  )
}

export default ContactList
