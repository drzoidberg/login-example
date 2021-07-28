// import React from 'react';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import Collapse from 'react-bootstrap/Collapse'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import homeImg from '../../assets/bg-ordenator.jpg'
import inubaLogo from '../../assets/inuba-logo.png'

// import classes from './Login.module.scss'

export default function Login(props) {
  return (
    <>
      <style>
        {`
                #home-section {
                    background: url(${homeImg});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                    min-height: 700px;
                }

                #home-section .dark-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    min-height: 700px;
                    background: rgba(255,255,255, 0.3);
                }

                #home-section .home-inner {
                    padding-top: 150px;
                }

                #home-section .check-icon {
                    color: white;
                    background: #555;
                    padding: 5px;
                    border-radius: 50%;
                }

                #home-section .card-translucid {
                    background-color: rgba(0,123,255, 0.8)!important;
                }


            `}
      </style>

      <header id='home-section'>
        <div className='dark-overlay'>
          <div className='home-inner'>
            <Container>
              <Row>
                <Col lg='6' className='d-none d-lg-block text-white'>
                  <h1 className='display-4 text-center'>
                    <strong>Prueba gratis</strong>
                  </h1>
                  <div className='d-flex'>
                    <div className='p-4 align-self-start'>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className='fa-2x check-icon'
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
                        className='fa-2x check-icon'
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
                        className='fa-2x check-icon'
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
                        <Col lg='4'>
                          <Image src={inubaLogo} fluid />
                        </Col>
                      </Row>
                      <h3 className='mt-5'>Iniciar sesión</h3>
                      <Form>
                        <Form.Group>
                          <Form.Control
                            type='text'
                            size='lg'
                            placeholder='Usuario'
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type='password'
                            size='lg'
                            placeholder='Contraseña'
                          ></Form.Control>
                        </Form.Group>
                        <Button
                          // variant='outline-light'
                          block
                          type='submit'
                          value='Submit'
                          className='float-end'
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
