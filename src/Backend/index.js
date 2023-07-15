const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')


const mongoose=require('mongoose')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactus');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    query:String
  });

  const User = mongoose.model('User',userSchema);

const server=express()

server.use(cors());
server.use(bodyparser.json());
//create user data
server.post('/demo',async(req,res)=>{
    let user=new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.query=req.body.query;
    const doc=await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/demo',async(req,res)=>{
   const docs=await User.find({});
   res.json(docs)
})

server.listen(8080,()=>{
    console.log('server is started')
})