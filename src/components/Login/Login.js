import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import classes from './Login.module.scss'

import { userLogin } from '../../store/actions'

function Form() {
  const [userTextInput, setUserTextInput] = React.useState('')
  const [passwordInput, setPasswordInput] = React.useState('')
  const dispatch = useDispatch()

  function handleUserTextInput(e) {
    return setUserTextInput(e.target.value)
  }

  function handlePasswordInput(e) {
    return setPasswordInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(userLogin({ name: userTextInput, password: passwordInput }))
  }

  return (
    // logo grandote
    // separar inputs texto & password de submit
    // poner dos bloques, separando mitades de pantalla
    <div className={classes['form']}>
      <div className='container'></div>
      <form action=''>
        <div className={classes['form-content']}>
          <input
            type='text'
            className={classes['text-input']}
            placeholder='Usuario'
            value={userTextInput}
            onChange={handleUserTextInput}
          />
          <input
            className={classes['text-input']}
            type='password'
            placeholder='Contraseña'
            value={passwordInput}
            onChange={handlePasswordInput}
          />
          <input
            type='submit'
            className={classes['button']}
            onClick={handleSubmit}
            value='Submit'
          />
        </div>
      </form>
    </div>
  )
}

function FormValidate({ userData }) {
  switch (userData) {
    case 'logged in':
      return <Redirect to='/home' />
    case 'logged out':
      return <Form />
    default:
      return <Form />
  }
}
FormValidate.propTypes = PropTypes.string.isRequired

export default function Login() {
  const userData = useSelector(state => state.user)

  return (
    <>
      <div className={classes['container']}>
        <p className='u-no-margins u-center-text'>
          Welcome to <br /> iNuba (v0.1)
        </p>
        <FormValidate userData={userData} />
      </div>
    </>
  )
}
