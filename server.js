//express js
var express = require('express');
var app = express();
var port = 3000;

//corse request
var cors = require('cors')
app.use(cors())

//enabling json body parse
app.use(express.json());

//MONGOOSE - requiring library
const mongoose = require('mongoose');

//auto increment sequence
var AutoIncrement = require('mongoose-sequence')(mongoose);

//MONGOOSE - connecting to database
mongoose.connect('mongodb://localhost:27017/pastebin',function(err){
    if(err){
        console.log("error occured while connecting to database");
    }else{
        console.log("successfully connected to database");
    }
});

//users schema
const UsersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    account_type: String,
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String
},{
    strict:false
});
//users model
const UsersModel = mongoose.model('users', UsersSchema,'users',{versionKey: false});

//users -> signup
app.post("/signup",(json_data,res)=>{
    //MONGOOSE - preparing json data for sending
    const new_signup = new UsersModel({first_name:json_data.body.first_name,
                                        last_name:json_data.body.last_name,
                                        account_type:json_data.body.account_type,
                                        email:json_data.body.email,
                                        password:json_data.body.password,
                                    });

    //MONGOOSE - inserting data to database
    new_signup.save(function (err, data) {
        if(err){
            if (err.code && err.code === 11000) {
                return res.json({status:3,msg:"Account Already Exists : "+json_data.body.email});    
            }
            return res.json({status:3,msg:"error occured while insertion "+err});
        }else{
            return res.json({status:1,msg:"account created successfully : "+json_data.body.email});
        }
    });
});

//listing express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})