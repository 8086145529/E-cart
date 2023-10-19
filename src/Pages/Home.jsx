// import React from 'react'
// import { Row,Col, Card, Button } from 'react-bootstrap'
// import useFetch from '../Hooks/useFetch'


// function Home() {
//   const data = useFetch("https://dummyjson.com/products")
//   console.log(data);
//   return (
//     <Row className='ms-5' style={{marginTop:'100px'}}>
//       {/* sm={12} md={6} lg={4} xl={3} means medium sizeil 6/12 = 1/2 i.e half portion of the available space eduthitt ee oru column display cheyum.largeil 4/12 = 1/3 eduthitt ee oru column display aavum.i.e 4 columns indenkil 3 column oru rowilum remaining 1 column next rowilum undayirikum  */}
//      {
//       data?.length>0?data?.map((product,index)=>(
//      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <div className='d-flex justify-content-between'>
//           <Button className='btn btn-light'><i className='fa-solid fa-heart text-danger '></i></Button>
//           <Button className='btn btn-light'><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
//         </div>
//       </Card.Body>
//     </Card>
//       </Col>}
//     </Row>
//   );
// }

// export default Home

import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'

function Home() {
  const dispatch = useDispatch()
  const data = useFetch("https://fakestoreapi.com/products")
  console.log(data);
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
{/* sm={12} md={6} lg={4} xl={3} means medium sizeil 6/12 = 1/2 i.e half portion of the available space eduthitt ee oru column display cheyum.largeil 4/12 = 1/3 eduthitt ee oru column display aavum.i.e 4 columns indenkil 3 column oru rowilum remaining 1 column next rowilum undayirikum  */}

     { 
     data?.length>0?data?.map((product,index)=>( // ippo arrayude lengthinod equal aayittula number of cards display aavum.without
       <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
       <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
       <Card.Img height={'200px'}  variant="top" src={product.image} />
       <Card.Body>
         <Card.Title>{product?.title}</Card.Title>
         <Card.Text>
          <p>{product?.description.slice(0,55)}...</p>
          <h5>${product.price}</h5>
         </Card.Text>
       <div className='d-flex justify-content-between'>  
         <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'>
           <i className='fa-solid fa-heart text-danger fa-2x'></i>
         </Button>
         <Button className='btn btn-light'>
           <i className='fa-solid fa-cart-plus text-success fa-2x'></i>
         </Button>
         </div>
       </Card.Body>
     </Card>
       </Col>
     )):<p className='text-danger fw-bolder fs-4'>Nothing to display!!!</p>
     
      }
    </Row>
  )
}

export default Home