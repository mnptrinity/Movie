const express=require('express');
const router=express.Router();
const Movie=require('../schema/movie');
const Genre=require('../schema/genre');




//making the router for the insetion
router.post('/add',function(req,res){
        const movie=new Movie(req.body);
        movie.save(function(err,user){
            if(err)
                res.status(500).send("There is trouble in saving the data !");
            else
            res.status(200).send("Data saved Successfully !");

        });
});


router.post('/genre',function(req,res){
        const genre=new Genre(req.body);
        genre.save(function(err,user){
            if(err)
                res.status(500).send("There is trouble in saving the data !");
            else
            res.status(200).send("Data saved Successfully !");

        });
});




module.exports=router;

