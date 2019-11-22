const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const genreSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:Number,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    movies:{
        type:String
    }
});

// module.exports.genreSchema=genreSchema;
// const Genre=mongoose.model('genre',genreSchema);

// module.exports.Genre=Genre;
module.exports=mongoose.model('genre',genreSchema);