import React from 'react';
import { Col, Row } from 'react-bootstrap';
import courses from '../courses';
import HomeScreen from './screens/HomeScreen';


export default function Home() {

  console.log(courses)
  return (
 
    <>
    <h2 className="text-center"> Welcome to Guvi  </h2>
    <hr />

   <Row>   
    {
    
    courses.map((course) =>
    
    <Col xs={6} lg={4} key={course._id}> 
    
     <HomeScreen course = {course} />
    
     </Col>

    )}

    </Row>
    </>
  )
}
