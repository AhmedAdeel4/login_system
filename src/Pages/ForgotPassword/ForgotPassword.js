import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className='container mt-5' style={{maxWidth:400}}>
        <Card>
            <Card.Body>
                <h1 className='mb-3'>Reset</h1>
                <Formik>
                    <Form>
                        
                        <div className='mb-3'>
                            <div>
                                <label htmlFor='email'>Email :</label>
                                <Field class="form-control" name='email' id='email' type='email' />
                            </div>
                            <span></span>
                        </div>
                        
                        <button className='btn btn-primary w-100 mb-3' type='submit'>Reset</button>

                    </Form>
                </Formik>
            </Card.Body>
        </Card>
        <div>
            Already have an account <Link to='/login'>Log In</Link>
        </div>
    </div>
  )
}
