import mongoose from 'mongoose'

const moduleSchema = mongoose.Schema({
    name:{type:String,required:true},
    comment:{type:String,required: true}
}, {
    timestamps : true
})

const productSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'

     
    },
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true,
    },
    Materials:{
        type:String,
        required: true,
    },
    modules:[moduleSchema],
    price:{
        type:Number,
        required: true,
        default:0
    },
    description:{
        type:String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    

},{
    timestamps:true
})

const Product = mongoose.model('Product',productSchema)

export default Product