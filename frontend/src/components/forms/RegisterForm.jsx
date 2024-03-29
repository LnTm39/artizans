import { useState } from 'react'
import Button from './buttons/Button'
import Input from './inputs/Input'
import './Form.css'
import { validateRegisterForm } from '../../services/formAuthValidation'
import { toast } from 'react-toastify'

function RegisterForm () {
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const _errors = validateRegisterForm(formData)
    if (_errors) {
      setErrors(_errors)
    }
    toast.error(`Formulaire soumis : ${formData.lastName} ${formData.firstName}`)
  }

  console.log(formData)

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <Input
        name='lastName'
        label='Nom'
        placeholder='Entrez votre nom...'
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      <Input
        name='firstName'
        label='Prénom'
        placeholder='Entrez votre prénom...'
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
      />
      <Input
        name='username'
        label="Nom d'utilisateur :"
        placeholder='Entrez votre nom...'
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        name='email'
        label='Email'
        placeholder='Entrez votre email...'
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        name='password'
        label='Mot de passe'
        placeholder='Entrez votre mot de passe...'
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        type='submit'
      >
        S'enregistrer
      </Button>
    </form>
  )
}

export default RegisterForm
