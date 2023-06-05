const express = require('express')
const DB ="mongodb+srv://imchintan0207:jzqCQId1vVSo8Hct@cluster0.tsyw0ac.mongodb.net/mycab?retryWrites=true&w=majority"
const cors = require('cors')
const bodyParser=require('body-parser')
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB);
  console.log('mongodb connected')

}
//...................................................for booking form................
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password:String,
  pickuppoint: String,
  droppoint:String,
  pickupdate: String,
  pickuptime: String,
  selecttaxi: String,
  numofpass: String
  });

const User = mongoose.model('User', userSchema);

//...............................for Register..........................

const Registerdata = mongoose.model('Registerdata',userSchema)

//...........................for contact................................

const Contactdata = mongoose.model('Contactdata',userSchema)


const server = express();
server.use(cors());
server.use(bodyParser.json());

// CURD....
//1.CREATE
server.post('/demo', async (req,res)=>{

  //........................................email..............................................
  let gmail = req.body.email
  let testAccount = await nodemailer.createTestAccount();
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "imchintan0207@gmail.com", // generated ethereal user
      pass: "vidomwssblyqbyrv", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: 'imchintan0207@gmail.com', // sender address
    to: gmail, // list of receivers
    subject: "Taxi Booking", // Subject line
    text: "Hello user", // plain text body
    html: "<div style=text-align:center><h1 style=color:#ffb300>Your taxi has been booked successfully </h1><h3 style=color:white>Enjoy your Ride</h3><h3 style=color:#ffb300>Happy Journey !</h3> <img src=https://www.slidekit.com/wp-content/uploads/2022/02/Thank-you-slide-in-free-cab-and-taxi-templates-jpg-webp.webp></div>", // html body
  });

  console.log("Message sent: %s", info.messageId);


  //.....................................................................................

    let person= new User();
    person.name = req.body.name;
    person.email = req.body.email;
    person.password = req.body.password;
    person.mobile = req.body.mobile;
    person.pickuppoint = req.body.pickuppoint;
    person.droppoint = req.body.droppoint;
    person.pickupdate= req.body.pickupdate;
    person.pickuptime= req.body.pickuptime;
    person.selecttaxi= req.body.selecttaxi;
    person.numofpass= req.body.numofpass;
    
    const doc = await person.save();
    console.log(doc)
    res.json(doc);
})
//.................................................................

//.....................................................................

//READ
server.get('/demo',async (req,res)=>{
    const docs = await User.find({})
    const docs2 = await LoginUser.find({})
    res.json(docs)
    res.json(docs2)

})
//............................................

server.listen(3005,()=>{
    console.log("server started")
})