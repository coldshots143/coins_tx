var express      = require('express');
var publicRoutes        =  express.Router();
var jwt          = require('jsonwebtoken');
var mongoose     = require('.././models/models');

publicRoutes.post('/auth',function(req,res)
            {
                mongoose.model('coins_users')
                        .findOne({_username:req.body.username},function(err,user)
                        {
                            if(err) throw err;
                            if(!user){
                                res.json({success:false,message:'Authentication Failed!!!'});
                            }else if(user){
                                if(user._password != req.body.password)
                                {
                                    res.json({success:false,message:'Authentication Failed!!!'});
                                }else{
                                    res.json({success:true,
                                                message:'Success',
                                                token:  jwt.sign({user},//data
                                                                    require('.././config/config').secret,//secret key
                                                                    {algorithm:'HS512', expiresIn:'24h'}
                                                                )
                                                });
                                }
                            }
                        })
            })
            .post('/signup',function(req, res){
                newData = mongoose.model('coins_users');
                let nData =  new newData(req.body)
                .save(function(err)
                {
                if(err)
                {  
                    res.json(err.errors);
                }else{
                    res.json({msg:'Success!!!'});
                }
                })

            })
            .get('/',function(req, res)
            {
                res.send('Hello');
            })
            .get('/users',function(req,res){
                mongoose.model('coins_users')
                .find().exec(function(err,user)
                {
                    if(err) throw err;
                    res.json(user);
                })
            })
            .get('/:info',function(req,res){
                mongoose.model('coins_users')
                .findOne({_id:req.params.info},function(err,user)
                {
                    if(err) throw err;
                    res.json(user);
                })
            })
            

module.exports = publicRoutes;
