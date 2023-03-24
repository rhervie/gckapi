const mongoose = require('mongoose');
const gckSchema = mongoose.Schema ({
    firstName: {
        type:String,
        required: [true, "Please Enter Your First Name"]
    },
    lastName: {
        type:String,
        required:[true,"Please Enter Your Last Name"]
    },
    profession: {
        type:String,
        required:[true, "Please Enter Your Profession"]
    },
    location:{
        type:String,
        required:[true,"Please Enter Your Location"]
    },
    service: {
        type:String,
        required:[true,"Full time or Part time"]  
    },
    days: {
        type:Number,
        required:[true,"Number of days available"]
    }
},
{
    timestamps: true
 }
)
const Welfare = mongoose.model('Welfare',gckSchema );
module.exports= Welfare;