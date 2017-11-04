
var mongoose = require('mongoose');
mongoose.connect(require('.././config/config').database,{useMongoClient: true });
mongoose.Promise = global.Promise;

/*
    Users Model
*/
mongoose.model("coins_users",
                mongoose.Schema({
                            _username:{type:String,required:true,unique:true,dropDups:true},
                            _password:{type:String,required:true},
                            _fname:{type:String,required:true},
                            _lname:{type:String,required:true},
                            _email:{type:String,required:true},
                            _status:{type:String,required:true},
                            _type:{type:String,required:true},
                            _contact:{type:Number,required:false},
                            _created:{type:Date,default:Date.now}
                        })
                );
                
module.exports = mongoose;
