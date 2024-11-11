import { Provider } from 'react-redux'

import store from './store'
import Style, { Container } from './styles'
import Form from './containers/form'
import ContactList from './containers/list'

function App() {
  return (
    <Provider store={store}>
      <Style />
      <Container>
        <Form />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
