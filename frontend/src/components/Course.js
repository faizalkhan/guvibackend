import React from 'react';

import courses from '../courses';
import { Link, useParams } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rating from './Rating';


export default function Course({ids}) {

    debugger;

console.log(useParams())

    const { id }  = useParams();

    const course = courses.find(c => c._id == id);

    console.log(course);

  return (
    <div>
      
      <Link to="/" className='btn btn-dark my-3'>

       Go Back

      </Link>

     <Row>
 <Col md ={3}>
 <img src ={course.image} />
 </Col>

 <Col md ={6}>

    <ListGroup variant='flush'>

      <ListGroupItem>
   <h3> {course.name}</h3>

      </ListGroupItem>


      <ListGroupItem>
      <Rating value= {course.rating} text={`${course.numReviews} reviews`}>   </Rating>

      </ListGroupItem>
    

      <ListGroupItem>
      
      <h3> Price :  {course.price} </h3>
      </ListGroupItem>


      <ListGroupItem>
      
      <p>  {course.description} </p>
      </ListGroupItem>
    


      <ListGroupItem>
      
<button className="btn btn-primary"> Enroll Now </button>


      </ListGroupItem>
    

    </ListGroup>


 </Col>


 <Col md ={3}>

    <ListGroup variant='flush'>


      <ListGroupItem>
   
           Duration : {course.duration}

      </ListGroupItem>
    

      <ListGroupItem>

      Language  : {course.language}

      </ListGroupItem>


      <ListGroupItem>
      
     Enrolled Candidates  : {course.enrolledstudents}
      </ListGroupItem>
    


    

    </ListGroup>


 </Col>





     </Row>
 




  
    </div>
  )
}
