const express = require('express')
const mongoose = require('mongoose');
const Product=require('./models/product.model.js');
const productRoute=require('./routes/product.route.js');
const app = express()

app.use(express.json()); //middleware
app.use(express.urlencoded({extended: false}));//middleware

//routes
app.use('/api/products',productRoute)


app.get('/',(req,res)=>{
res.send("Hello from node api to reethu")
});



// app.get('/api/products',async(req,res)=>{
//     try{
//       const production=await Product.find({});
//       res.status(200).json(production);
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id',async(req,res)=>{ //or api/product
//     try{
//       const {id}=req.params;
//       const product=await Product.findById(id);
//       res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });


// app.post('/api/products',async(req,res)=>{
//    try{
//      const product =await Product.create(req.body);
//      res.status(200).json(product);
//    }
//    catch(error){
//     res.status(500).json({message: error.message});
//    }
// });

// //update a product
// app.put('/api/products/:id',async (req,res)=>{
//     try{
//          const {id}=req.params;
//          const product=await Product.findByIdAndUpdate(id, req.body);
//          if(!product){
//             return res.status(404).json({message:"Product not found"});
//          }
//          const updatedProduct=await Product.findById(id);
//          res.status(200).json(updatedProduct);
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// //delete a product

// app.delete('/api/products/:id',async (req,res)=>{
//   try{
//        const {id}=req.params;
//        const product=await Product.findByIdAndDelete(id);
//        if(!product){
//         return res.status(404).json({message:"not deleted"});
//        }
//        res.status(200).json({message:"Product deleted successfully"});
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
// }
// });


mongoose.connect("mongodb+srv://dumpareethika:AHCHmTRImZuwgur9@backend.p9cxilt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    });
})
.catch(()=>{
    console.log("connection failed");
});