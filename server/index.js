const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId, Admin } = require('mongodb');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());



// const uri = "mongodb://localhost:27017";
const uri=`mongodb+srv://Advancer:IFEl9KfNGF8KWmkx@cluster0.ctmwtm0.mongodb.net/`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization
    
    if (!authHeader) {
  return  res.status(401).send({message:'unauthorized access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            console.log(err);
            return  res.status(401).send({message:'unauthorized access'})
        }
        req.decoded=decoded
        next()
    })
}

async function run() {
    try {
        const bookingsCollection =client.db('Advancer').collection('booking')

        const token = process.env.ACCESS_TOKEN;
       app.get('/', (req, res) => {
          res.send({ token });
        });
  
 // verify user by  json web token
 app.post('/jwt', (req, res) => {
    const user = req.body;
    console.log(user)
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '10d' })
    res.send({token})
})
// app.get('/jwt', async (req, res) => {
//     const email = req.query.email;
//     console.log(email,'user eamil')
//     const query = { email: email };
//     const user = await usersCollection.findOne(query);
//     if (user) {
//         const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '10d' })
//         return res.send({ accessToken: token });
//     }
//     res.status(403).send({ accessToken: '' })
// });

app.post('/booking', async (req, res) => {
    const booking = req.body;
  
    const result = await bookingsCollection.insertOne(booking);
    res.send(result);
})
app.get('/booking',verifyJWT, async (req, res) => {
    const email = req.query.email;
    console.log(email);
    const decoded = req.decoded;
    if (decoded.email !== email) {
     res.status(403).send({ message: 'forbidden access' });
    }
    const query = { email: email };
    const bookings = await bookingsCollection.find(query).toArray()
    console.log(bookings);
    res.send(bookings);
});
  
app.delete('/booking/:id', async (req, res) => {
    const id = req.params.id;
    // const query = { _id:ObjectId(id) }
    console.log(id,{ _id:ObjectId(id) });
    const result = await bookingsCollection.deleteOne();
    res.send(result);
})
        
        
        

        
    } catch (error) {
        console.log(error);
    }
}run().catch(error => console.log(error, 'the from main function'))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })