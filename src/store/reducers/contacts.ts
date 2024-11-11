import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Casemiro Vieira Gouveia',
      email: 'casemiro.gouveia@geradornv.com.br',
      number: '(38) 3283-5379'
    },
    {
      id: 2,
      name: 'César de Rodrigues Medeiros',
      email: 'cesar.medeiros@geradornv.com.br',
      number: '(71) 2684-3694'
    },
    {
      id: 3,
      name: 'Regiane Caruso Barroso',
      email: 'regiane.barroso@geradornv.com.br',
      number: '(83) 3868-3835'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex((t) => t.id === action.payload.id)

      if (index >= 0) {
        state.items[index] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Esse contato já existe')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, add } = contactSlice.actions
export default contactSlice.reducer
