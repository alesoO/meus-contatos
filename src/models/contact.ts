class Contact {
  id: number
  name: string
  email: string
  number: string

  constructor(name: string, email: string, number: string, id: number) {
    this.id = id
    this.name = name
    this.email = email
    this.number = number
  }
}

export default Contact
