const mongoose=require('mongoose');

require('dotenv').config();


mongoose.connect(process.env.Mongo_URL,
{useNewUrlParser:  true,
	useUnifiedTopology:  true});

mongoose.connection.on("error",err=>{
    console.log("Error in the Mongoose Connection...!");
});

mongoose.connection.on("connected",()=>{
    console.log("Mongoose connection Successful...!");
});

mongoose.connection.on("disconnected",()=>{
    console.log("Mongoose Disconnected...!");
});

process.on("SIGINT", function() {
	mongoose.connection.close(() => {
		process.exit(0);
	});
});

