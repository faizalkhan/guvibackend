import React, { useState } from 'react';
import FormContainer from '../FormContainer';
import { Button, Form } from 'react-bootstrap';
import Message from './Message';

export default function Signup() {


  const[fname, setFname] = useState('');
  const[lname, setLname] = useState('');
  const[email, setEmail] = useState('');
  const[pass1, setPass1] = useState('');
  const[pass2, setPass2] = useState('');
  const[mobile, setMobile] = useState('');
  const[message, setMessage] = useState('');

  const submitHandler = (e) =>
  {
    debugger
         e.preventDefault();
         setMessage(`${fname}, ${lname}, ${email}, ${pass1}, ${pass2}, ${mobile}`);




         if(pass1 != pass2)
         {
          setMessage(`Password is not matching`);
         }

         else if(mobile.length != 10)
         {
          setMessage(`Mobile number should be 10 digits`);
         }

         else
         {
          setFname('');
          setLname('');
          setEmail('');
          setPass1('');
          setPass2('');
          setMobile('');
 
         }
     
  }

  return (
    <>
    
 <FormContainer>
<Form onSubmit={submitHandler}>
<br/>
 <h1 className='text-center'> Signup Here</h1>

{ message && <Message variant='success' message={message}> </Message> }

    <Form.Group controlId='firstname'>
        <Form.Label>  <i class="fa-solid fa-user"></i>  First Name</Form.Label>
        <Form.Control type='text' placeholder='Enter the first name' value={fname} onChange={(e) => setFname(e.target.value)} required></Form.Control>
    </Form.Group>

    {fname}

    <Form.Group controlId='lastname'>
        <Form.Label> <i class="fa-solid fa-user"></i> Last Name </Form.Label>
        <Form.Control type='text' placeholder='Enter the last name' value={lname}  onChange={(e) => setLname(e.target.value)} required></Form.Control>
    </Form.Group>

    <Form.Group controlId='firstname'>
        <Form.Label> <i class="fa-solid fa-envelope"></i> Email</Form.Label>
        <Form.Control type='text' placeholder='Enter the Email id' value={email}  onChange={(e) => setEmail(e.target.value)} required></Form.Control>
    </Form.Group>

    <Form.Group controlId='password'>
        <Form.Label> <i class="fa-solid fa-key"></i> Password </Form.Label>
        <Form.Control type='password' placeholder='Enter your Password' value={pass1}  onChange={(e) => setPass1(e.target.value)}       required></Form.Control>
    </Form.Group>

    <Form.Group controlId='confrimpassword'>
        <Form.Label><i class="fa-solid fa-lock"></i> Confirm Password </Form.Label>
        <Form.Control type='password' placeholder='Confirm Password' value={pass2}  onChange={(e) => setPass2(e.target.value)}  required></Form.Control>
    </Form.Group>

    <Form.Group controlId='confrimpassword'>
        <Form.Label> <i class="fa-solid fa-mobile"></i> Mobile Number</Form.Label>
        <Form.Control type='number' placeholder='Enter your mobile number' value={mobile}  onChange={(e) => setMobile(e.target.value)}   required></Form.Control>
    </Form.Group>

    <Button className='mt-3' type='submit' variant='success' >Signup</Button>

</Form>

    </FormContainer>

    
    </>
  )
}
