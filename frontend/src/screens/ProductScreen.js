import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'







const ProductScreen = ({history, match })  => {
    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
    

    const productDetails = useSelector(state => state.productDetails)
    const {loading , error , product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
        

    }, [dispatch,match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const goTOvideos = () => {
        history.push(`/videos`)
    }



    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
              {loading ? <Loader /> : error ? <h3>{error}</h3> : (
               <Row>
               <Col md={3}>
                   <Image src={product.image} alt={product.name} fluid />
               </Col>

               <Col md={7}>
                   <ListGroup varient='flush'>
                       <ListGroup.Item>
                           <h5>{product.name}</h5>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h7>Note Link : </h7>
                           <a href = '  https://press.rebus.community/programmingfundamentals/chapter/structured-programming/ '>Computer programming</a>
                       </ListGroup.Item>
                       <ListGroup.Item>
                        
                       <Button 
                               onClick = {goTOvideos} className='btn-black' type='button'>
                                   C programming: structures
                               </Button>
                               
                        
                           
                       </ListGroup.Item>
                               <ListGroup.Item>
                                   <a href='https://flylib.com/books/en/2.123.1/'> QUORA  -- FEEDBACK-Q/A</a>
                               </ListGroup.Item>
                       <ListGroup.Item>
                       <Button 
                               onClick = {goTOvideos} className='btn-black' type='button'>
                                   C programming:Array
                               </Button>
                        
                           
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h7>Note Link2 : </h7>
                           <a href = '  https://www.tutorialspoint.com/cprogramming/c_data_types.htm '>Data Types</a>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h7>Note Link3 : </h7>
                           <a href = '  https://www.studytonight.com/c/string-and-character-array.php '>Arrays</a>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <h7>Internship : </h7>
                           <a href = ' https://www.linkedin.com/posts/nextgeniotofficial_career-jobs-hiring-activity-6743791861850288129-VUHd '>  click here  </a>
                       </ListGroup.Item>



                   </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup varient='flush'>
                           <ListGroup.Item>
                               <Row>
                                   <Col> Benefits:</Col>
                                   <Col>
                                       <strong>{product.Materials}</strong>
                                   </Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                       Price:
                                   </Col>
                                   <Col>
                                       <strong>${product.price}</strong>
                                   </Col>
                               </Row>
                           </ListGroup.Item>

                           {product.countInStock > 0 &&(
                               <ListGroup.Item>
                                   <Row>
                                       <Col>
                                       Materials
                                       </Col>
                                       <Col>
                                       <Form.Control as = 'select' value = {qty} onChange={(e) => setQty(e.target.value)}>
                                           {
                                           [...Array(product.countInStock).keys()].map((x) => (
                                               <option key={x+1} value={x+1} > {x+1}  </option>
                                           ))}
                                       </Form.Control>
                                       </Col>
                                   </Row>
                               </ListGroup.Item>
                           )}
                            

                        
                          

                           <ListGroup.Item>
                               <Button 
                               onClick = {addToCartHandler} className='btn-black' type='button'>
                                   Purchase
                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                   </Card>
               </Col>
           </Row> 
           
           
           
          
              )}
             

             
              
                  
                  
            
        </>
    )
}


export default ProductScreen
