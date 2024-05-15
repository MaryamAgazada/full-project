const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
const personSchema = new mongoose.Schema({
    name: String,
    id: Number
  });
  const Person = mongoose.model('Person', personSchema);

app.get('/', async(req, res) => {
    const getData=await Person.find()
  res.send(getData)
})
app.post('/', async(req, res) => {
    const title=req.body
    const postedData=new Person(title)
    await postedData.save()
    res.send(postedData)
  })
  app.put('/:id',async (req, res) => {
    const {id}=req.params
    const title=req.body
    const updatedData= await Person.findByIdAndUpdate(title,id)
    res.send(updatedData)
  })
  app.delete('/:id',async  (req, res) => {
    const {id}=req.params
    const deletedData=await Person.findByIdAndDelete(id)
    res.send(deletedData)
  })

  mongoose.connect('mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log('err'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})