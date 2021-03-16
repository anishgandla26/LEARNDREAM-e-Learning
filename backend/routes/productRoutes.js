import express from 'express'
import { getProducts,getProductById } from '../controllers/productController.js'

const router = express.Router()

//@desc  fetch all courses
//@desc  get /api/products
//@access  Public
router.route('/').get(getProducts)

  
//@desc  fetch single course
//@desc  get /api/products
//@access  Public
router.route('/:id').get(getProductById)

  
  

export default router