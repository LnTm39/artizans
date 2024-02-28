import { useEffect, useState } from 'react'
import Input from './inputs/Input'
import Button from './buttons/Button'
import './Form.css'
import { useLogin } from '../../hooks/Auth'
import { useNavigate } from 'react-router-dom'

function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'jeanmich@mail.com',
    password: 'password'
  })

  const { response, error, /* isLoading, */ login } = useLogin()

  const navigate = useNavigate()

  useEffect(() => {
    if (response && response.jwt) {
      navigate('/dashboard')
    }
  }, [response])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(formData)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>SE CONNECTER</h2>
      <Input
        name='identifier'
        label='Email : '
        placeholder='mail@provider.com'
        value={formData.identifier}
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        label='Mot de passe : '
        placeholder=''
        value={formData.password}
        onChange={handleChange}
      />
      {
            error && <p style={{ color: 'red' }}>{error}</p>
        }
      <Button
        type='submit'
      >
        Se connecter
      </Button>
    </form>
  )
}

export default LoginForm
