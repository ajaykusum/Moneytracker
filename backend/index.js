const express= require('express');
const cors= require('cors');
require('dotenv').config();
const Transaction = require('./models/Transcation');
const mongoose= require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log('Database connected');
})
.catch((err)=>{
  console.log(err);
})

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json({ body: 'test ok4' });
  });
  
app.post('/api/transaction',async(req, res) => {
  const{name,description,datetime,price}=req.body;
  const transaction= await Transaction.insertMany({name,description,datetime,price});
  
  res.json(transaction);
// res.json(req.body);
});


 

app.get('/api/transaction',async(req,res)=>{
await mongoose.connect(process.env.MONGO_URL);
const transaction= await Transaction.find();
res.json(transaction);
});

  const port = 4000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);  /* template litrals- combines expression and variable*/
  }); 
