
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
                        _btc_add:{type:String,required:true},
                        _status:{type:String,required:true},
                        _type:{type:String,required:true},
                        _upline:{type:mongoose.Schema.Types.ObjectId,ref:'coins_users',required:false,default:null},
                        _created:{type:Date,default:Date.now}
                        })
                );
                

mongoose.model("coins_dummy_btc",
                mongoose.Schema({
                        _btc_add:{type:String,required:true},
                        _status:{type:String,required:true}
                        })
            );


mongoose.model("coins_released",
               mongoose.Schema({
                        _total_coins:{type:Number,required:true},
                        _price:{type:Number,required:true},
                        _date_release:{type:Date,default:Date.now},
                        _maximum_coins:{type:Number,required:true},//coins per user to sold
                        _minimum_coins:{type:Number,required:true}//minimum coins to be sold
                    })
            );


mongoose.model("coins_reserved",
                mongoose.Schema({
                        _coin_id:{type:mongoose.Schema.Types.ObjectId,ref:'coins_released',required:false},
                        _reserved_by:{type:mongoose.Schema.Types.ObjectId,ref:'coins_users',required:false},
                        _pay_here:{type:String,required:true},//btc_address
                        _expiration:{type:Date,default:(Date.now + (1000*60*15))},
                        _reservation_made:{type:Date,default:Date.now},
                        _status:{type:String,required:true},
                })  
            );


mongoose.model("coins_wallet",
                mongoose.Schema({
                        _owner:{type:mongoose.Schema.Types.ObjectId,ref:'coins_users',required:false},
                        _balance:{type:Number,default:0},
                        _tx_amount:{type:Number,default:0},
                        _type:{type:String,requried:true},
                        _created:{type:Date,default:Date.now}
              })
            );

module.exports = mongoose;

