import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

export default function HomeScreen({course}) {

  return (
    <div>
       <Card className='my-3 p-3 rounded'>

       <Card.Body>
        <Link to={`course/${course._id}`}>
        
       
<Card.Img variant="top" src={course.image}  />
<Card.Title as ="h4">{course.name}</Card.Title>
</Link>
<Card.Text as ="div">
      


        </Card.Text>

        <Card.Text as ="h6">
      
   <div className='my-3'>
     Rs {course.price}
   </div>

        </Card.Text>
        <div className='my-3'>
     {course.rating}
   </div>


        <Rating value= {course.rating} text={`${course.numReviews} reviews`}  ></Rating>

     
        </Card.Body>
      </Card>
    </div>
  )
}
