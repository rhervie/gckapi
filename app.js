const express =  require('express')
const mongoose = require('mongoose')
const Welfare =  require('./Model/gckWelfare')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Route
app.get('/' , async (req,res)=>{
    try {
      const welfare =  await Welfare.find({})
    res.status(200).json(welfare)
    } catch(error) {
     console.log(error)
    }
})
app.get('/welfare/:id', async(req,res)=>{
    const {id} =  req.params
    try {
       const welfare =  await Welfare.findById(id)
       res.status(200).json(welfare)
    } catch(error) {
        res.status(400).json(error)
    }
})
app.delete('/welfare/:id', async(req,res) =>{
    const {id} = req.params
   try{
     const welfare=  await Welfare.findByIdAndDelete(id)
     res.status(200).json(welfare)
   } catch(error) {
    res.send(404).json(error)
   }
})
app.post('/welfare', async (req,res)=>{
    try {
        const welfare =  await Welfare.create(req.body)
        res.status(200).json(welfare)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: error.message})
    } 
})
app.put('/welfare/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const welfare=  await Welfare.findOneAndUpdate(id,req.body)
        res.status(200).json(req.body)
        if(!welfare) {
            return res.status(404).json({message:`cannot find product with the ID ${id}`}) 
        }
      } catch(error) {
       res.status(404).json(error)
      } 
})
app.put('/welfare/:id', async(req,res)=>{
    const {id} = req.params
    try{
        const welfare=  await Welfare.findByIdAndUpdate(id,req.body)
        res.status(200).json(req.body)
        if(!welfare) {
            return res.status(404).json({message:`cannot find product with the ID ${id}`}) 
        }
      } catch(error) {
       res.status(404).json(error)
      } 
})
mongoose
.connect("mongodb://127.0.0.1:27017")
.then(()=>{
   console.log("Local DB connected")
}).catch(error=>{
 console.log(error)
})
app.listen(3000, (req,res)=>{
    console.log('Local Server Running on port 3000')
});



