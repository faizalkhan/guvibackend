import {React, useState} from 'react';

import FormContainer from '../FormContainer';
import { Button, Form } from 'react-bootstrap';
import Message from './Message';

export default function Login() {

  const[username, setEmail] = useState('');
  const[password, setPass] = useState('');
  const[message, setMessage] = useState('');

  const submitHandler = (e) =>
  {
    debugger
         e.preventDefault();
         setMessage(`${username}, ${password}`);
      
         setEmail('');
         setPass('');
        
 
       
     
  }

  return (
    <FormContainer>
<Form onSubmit={submitHandler}>
<br/>
 <h1 className='text-center'> Signup Here</h1>

{ message && <Message variant='success' message={message}> </Message> }

    <Form.Group controlId='firstname'>
        <Form.Label><i class="fa-solid fa-envelope"></i> Email </Form.Label>
        <Form.Control type='text' placeholder='Enter the first name' value={username} onChange={(e) => setEmail(e.target.value)} required></Form.Control>
    </Form.Group>



    <Form.Group controlId='lastname'>
        <Form.Label> <i class="fa-solid fa-lock"></i> Password </Form.Label>
        <Form.Control type='password' placeholder='Enter the last name' value={password}  onChange={(e) => setPass(e.target.value)} required></Form.Control>
    </Form.Group>

   


    <Button className='mt-3' type='submit' variant='success'>Login</Button>

</Form>

    </FormContainer>
  )
}
