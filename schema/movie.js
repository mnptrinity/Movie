const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const movieSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:Schema.Types.ObjectId,
        ref:'genre'
    },
    director:{
        type:String,
        require:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    description:{
        type:String,
        default:"No Spoilers"
    }
});

// module.exports.movieSchema=movieSchema;
// const Movie=mongoose.model('movie',movieSchema);

// module.exports.Movie=Movie;

module.exports=mongoose.model('movie',movieSchema);