//imports
const express = require("express");
const  mongoose =require('mongoose');
const cors = require('cors');
const path = require('path');

const Clients = require('./model/Clients.js');

const app = express();
const port = process.env.PORT || 5000;

//middlewares

app.use(express.json())
app.use(cors())

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//db connection
mongoose.connect("mongodb://localhost:27017/myMern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("UNABLE TO CONNECT DB................");
})

//routes
app.get('/', (req, res)=>{
    Clients.find()
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    // console.log('get request')
    // res.send("App is running fine successfully....")
});

app.post('/clients', (req,res)=>{
    console.log(req.body.name);
    console.log(req.body.nationality);
    console.log(req.body.passport_no);
    console.log(req.body.emirates_id_no);
    console.log(req.body.mobil_no);
    console.log(req.body.email);
    const client = new Clients({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        nationality : req.body.nationality,
        passport_no : req.body.passport_no,
        emirates_id_no : req.body.emirates_id_no,
        mobil_no : req.body.mobil_no,
        email : req.body.email
    })
    client.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"successfully submitted"})
    })
    .catch(err=>{
        console.log(err)
        res.status(200).json({msg:"Error Occured"})
    })
    // res.send('ok');
})

app.delete('/clients/:id', (req, res)=>{
    const id = req.params.id;
    Clients.deleteOne({_id:id}, (err,result)=> {
        if(err){
            console.log(err)
            res.status(500).send('error occured');
        }
        else {
            res.status(200).json({msg:"Successfully deleted"});
        }
    })
})

app.put('/clients/:id',(req, res) => {
    const name = req.body.name;
    const nationality = req.body.nationality;
    const passport_no = req.body.passport_no;
    const emirates_id_no = req.body.emirates_id_no;
    const mobil_no = req.body.mobil_no;
    const email = req.body.email;
    const id = req.params.id;
    Clients.updateMany({_id:id},{$set:{name:name,nationality:nationality,passport_no:passport_no,emirates_id_no:emirates_id_no,mobil_no:mobil_no,email:email}})
    .then(result=>{
        console.log(result)
        res.status(200).json({msg:"successfully updated"});    
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occured"});
    })

})



//server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})