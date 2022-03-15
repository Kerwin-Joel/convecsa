import React, { useState } from 'react'
import { FormContainer, LoginContainer, FloatContainer, Mask, Input, Label, Button } from './styles';
import { Link } from 'react-router-dom';
import { login } from '../../api/get';


export const Login = () => {

  const [value, setValue] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = ({target}) => {
    setValue('')
    setValue({
        ...value,
        [target.name] : target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {error, message} = login(value)
    if(error === false){
      console.log('login success')
    }
    // console.log(error);
  }

  return (
    <LoginContainer>
      <Mask/>
      <main>
        <FloatContainer>
          <p>Bienvenido</p>
          <span>Ingeniria y construccion</span>
        </FloatContainer>
        <FormContainer>
          <div>
            <input
              name="username"
              value={value.username}
              onChange={handleInputChange}
              type="text"
              />
            <Label fillText={value.username} >Usuario</Label>
          </div>
          <div>
            <input 
            name="password"
            value={value.password}
            onChange={handleInputChange}
            type="password" />
            <Label fillText={value.password} >Contraseña</Label>
          </div>
          <div onClick={handleSubmit}>
            <Button>Ingresar</Button>
          </div>
          {/* <Link to="/aqui">
            <Button  >Iniciar sesión</Button>
          </Link> */}
          <span>¿No recuerdas tu contraseña? <b><a href="google.com">Recuperar contraseña</a></b></span>
        </FormContainer>
      </main>
      <footer>
        <p>&copy; 2022 Kerwin</p>
      </footer>
    </LoginContainer>
  )
}
