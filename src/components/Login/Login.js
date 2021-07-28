// import React from 'react';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import inubaLogo from '../../assets/inuba-logo.png'

import classes from './Login.module.scss'

export default function Login(props) {
  return (
    <>
      <header className={classes['home-section']}>
        <div className={classes['dark-overlay']}>
          <div className={classes['home-inner']}>
            <Container>
              <Row>
                <Col lg='6' className='d-none d-lg-block text-white'>
                  <h1 className='display-4 text-center'>
                    <strong className='fw-bold'>Prueba gratis</strong>
                  </h1>
                  <div className='text-center mt-2 mb-4'>
                    <h5 className='p-4 align-self-end login-tagline'>
                      Look, just because I don't be givin' no man a foot massage
                      don't make it right for Marsellus to throw Antwone into a
                      glass motherfuckin' house...
                    </h5>
                    <FontAwesomeIcon
                      icon={faTag}
                      className={`fa-4x ${classes['tag-icon']}`}
                    />
                  </div>
                  <div className='d-flex'>
                    <div className='p-4 align-self-start'>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={`fa-2x ${classes['check-icon']}`}
                      />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium doloremque excepturi commodi corporis non
                      asperiores!
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='p-4 align-self-start'>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={`fa-2x ${classes['check-icon']}`}
                      />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium doloremque excepturi commodi corporis non
                      asperiores!
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='p-4 align-self-start'>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={`fa-2x ${classes['check-icon']}`}
                      />
                    </div>
                    <div className='p-4 align-self-end'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium doloremque excepturi commodi corporis non
                      asperiores!
                    </div>
                  </div>
                </Col>
                <Col lg='6'>
                  <Card className='bg-white p-3'>
                    <Card.Body>
                      <Row>
                        <Col lg='4' md='4' xs='4'>
                          <Image src={inubaLogo} fluid />
                        </Col>
                      </Row>
                      <h4 className='mt-5 mb-4 fw-bold text-secondary'>
                        Iniciar sesión
                      </h4>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            type='text'
                            size='lg'
                            placeholder='Usuario'
                            onChange={handleChange}
                            value={firstName}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type='password'
                            size='lg'
                            placeholder='Contraseña'
                            className='mb-1'
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <a
                            href='#'
                            class='text-secondary text-decoration-none fs-6'
                          >
                            Has olvidado tu contraseña?
                          </a>
                        </Form.Group>
                        <Button
                          block
                          type='submit'
                          value='Submit'
                          className='text-uppercase float-end fw-bold mt-4 px-5 py-2'
                          primary
                        >
                          Iniciar sesión
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    </>
  )
}
